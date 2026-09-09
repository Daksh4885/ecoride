const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { sendWhatsAppNotification } = require('../services/whatsapp');

// ─── Fare Calculation Helper ───────────────────────────────────────────────────
const RATES = {
  'Sedan':        { oneWay: 15, roundTrip: 14, batta: 400 },
  'SUV':          { oneWay: 20, roundTrip: 19, batta: 400 },
  'Innova':       { oneWay: 21, roundTrip: 20, batta: 400 },
  'Innova Crysta':{ oneWay: 24, roundTrip: 23, batta: 500 },
};

const MIN_DISTANCE = { oneWay: 130, roundTrip: 250 };

function calculateFare(vehicleType, distanceKm, tripType, noOfDays = 1) {
  const rate = RATES[vehicleType];
  if (!rate) return 0;
  const ratePerKm = tripType === 'round-trip' ? rate.roundTrip : rate.oneWay;
  const minDist = tripType === 'round-trip' ? MIN_DISTANCE.roundTrip : MIN_DISTANCE.oneWay;
  const effectiveDistance = Math.max(distanceKm, minDist);
  const baseFare = effectiveDistance * ratePerKm;
  const batta = rate.batta * (tripType === 'round-trip' ? noOfDays : 1);
  return Math.round(baseFare + batta);
}

// ─── Get distance from Google Maps ────────────────────────────────────────────
async function getDistance(pickup, drop) {
  const apiKey = process.env.GOOGLE_MAPS_KEY;
  if (!apiKey) return null;

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(pickup)}&destinations=${encodeURIComponent(drop)}&mode=driving&key=${apiKey}`;

  try {
    const https = require('https');
    return new Promise((resolve) => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            const element = json.rows[0].elements[0];
            if (element.status === 'OK') {
              resolve(Math.round(element.distance.value / 1000)); // km
            } else {
              resolve(null);
            }
          } catch { resolve(null); }
        });
      }).on('error', () => resolve(null));
    });
  } catch { return null; }
}

// ─── POST /api/bookings  — Create booking ─────────────────────────────────────
router.post('/', async (req, res) => {
  try {
    const {
      name, mobile, tripType, pickup, drop,
      pickupDate, pickupTime, vehicleType,
      noOfPersons, noOfDays
    } = req.body;

    // Basic validation
    if (!name || !mobile || !pickup || !drop || !pickupDate || !pickupTime || !vehicleType) {
      return res.status(400).json({ success: false, message: 'All required fields must be filled.' });
    }

    // Try to get real distance from Google Maps, fallback to 0
    let distanceKm = await getDistance(pickup, drop);
    if (!distanceKm) distanceKm = 0;

    // Calculate fare
    const estimatedFare = distanceKm > 0
      ? calculateFare(vehicleType, distanceKm, tripType || 'one-way', noOfDays || 1)
      : 0;

    // Create booking
    const booking = new Booking({
      name: name.trim(),
      mobile: mobile.trim(),
      tripType: tripType || 'one-way',
      pickup: pickup.trim(),
      drop: drop.trim(),
      pickupDate,
      pickupTime,
      vehicleType,
      noOfPersons: parseInt(noOfPersons) || 1,
      noOfDays: parseInt(noOfDays) || 1,
      distanceKm,
      estimatedFare
    });

    await booking.save();

    // Send WhatsApp notification to operator
    const waResult = await sendWhatsAppNotification(booking);
    if (waResult.success) {
      booking.whatsappNotified = true;
      booking.notifiedAt = new Date();
      await booking.save();
    }

    res.status(201).json({
      success: true,
      message: 'Booking confirmed! You will receive a confirmation call from EcoRide team.',
      whatsappError: !waResult.success ? waResult.reason : undefined,
      booking: {
        bookingId: booking.bookingId,
        name: booking.name,
        mobile: booking.mobile,
        tripType: booking.tripType,
        pickup: booking.pickup,
        drop: booking.drop,
        pickupDate: booking.pickupDate,
        pickupTime: booking.pickupTime,
        vehicleType: booking.vehicleType,
        noOfPersons: booking.noOfPersons,
        noOfDays: booking.noOfDays,
        distanceKm: booking.distanceKm,
        estimatedFare: booking.estimatedFare,
        status: booking.status
      }
    });

  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ success: false, message: 'Server error: ' + err.message });
  }
});

// ─── POST /api/bookings/fare — Calculate fare without saving ──────────────────
router.post('/fare', async (req, res) => {
  try {
    const { pickup, drop, vehicleType, tripType, noOfDays } = req.body;
    if (!pickup || !drop || !vehicleType) {
      return res.status(400).json({ success: false, message: 'Missing required fields.' });
    }

    let distanceKm = await getDistance(pickup, drop);
    if (!distanceKm) {
      return res.json({ success: true, distanceKm: null, estimatedFare: null, message: 'Could not calculate distance.' });
    }

    const fare = calculateFare(vehicleType, distanceKm, tripType || 'one-way', noOfDays || 1);
    res.json({ success: true, distanceKm, estimatedFare: fare });

  } catch (err) {
    res.status(500).json({ success: false, message: 'Error calculating fare.' });
  }
});

// ─── GET /api/bookings — List all bookings (admin) ────────────────────────────
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 }).limit(100);
    res.json({ success: true, count: bookings.length, bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// ─── GET /api/bookings/:id — Single booking ───────────────────────────────────
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findOne({ bookingId: req.params.id });
    if (!booking) return res.status(404).json({ success: false, message: 'Booking not found.' });
    res.json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// ─── PATCH /api/bookings/:id/status — Update status ──────────────────────────
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findOneAndUpdate(
      { bookingId: req.params.id },
      { status },
      { new: true }
    );
    if (!booking) return res.status(404).json({ success: false, message: 'Booking not found.' });
    res.json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
