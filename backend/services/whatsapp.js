const https = require('https');

/**
 * Send WhatsApp message to operator via CallMeBot API
 * @param {Object} booking - Booking details
 */
async function sendWhatsAppNotification(booking) {
  const phone = process.env.WHATSAPP_NUMBER;     // 917019700584
  const apiKey = process.env.CALLMEBOT_APIKEY;   // your CallMeBot API key

  if (!phone || !apiKey) {
    console.warn('⚠️  WhatsApp credentials not set. Skipping notification.');
    return { success: false, reason: 'credentials_missing' };
  }

  const fareStr = booking.estimatedFare
    ? `₹${booking.estimatedFare.toLocaleString('en-IN')} (approx)`
    : 'To be calculated';

  const distStr = booking.distanceKm
    ? `~${booking.distanceKm} km`
    : 'Calculating...';

  const message = `
🚖 *New EcoRide Booking!*

📋 Booking ID: ${booking.bookingId}
👤 Name: ${booking.name}
📱 Mobile: ${booking.mobile}
🚗 Trip: ${booking.tripType === 'one-way' ? 'One Way' : 'Round Trip'} | ${booking.vehicleType}
📍 From: ${booking.pickup}
📍 To: ${booking.drop}
📅 Date: ${booking.pickupDate}
⏰ Time: ${booking.pickupTime}
👥 Persons: ${booking.noOfPersons}
${booking.tripType === 'round-trip' ? `📆 Days: ${booking.noOfDays}\n` : ''}📏 Distance: ${distStr}
💰 Fare: ${fareStr}

Call customer to confirm booking!
`.trim();

  const encodedMsg = encodeURIComponent(message);
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodedMsg}&apikey=${apiKey}`;

  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('✅ WhatsApp notification sent successfully');
          resolve({ success: true });
        } else {
          console.error('❌ WhatsApp notification failed:', res.statusCode, data);
          resolve({ success: false, reason: data });
        }
      });
    }).on('error', (err) => {
      console.error('❌ WhatsApp notification error:', err.message);
      resolve({ success: false, reason: err.message });
    });
  });
}

module.exports = { sendWhatsAppNotification };
