const axios = require('axios');

/**
 * Send WhatsApp message to operator via Official Meta Cloud API
 * @param {Object} booking - Booking details
 */
async function sendWhatsAppNotification(booking) {
  const phone = process.env.WHATSAPP_NUMBER;             // Format: 917019700584 (no +)
  const phoneId = process.env.WHATSAPP_PHONE_ID;         // Meta Phone Number ID
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN; // Meta Permanent Access Token

  if (!phone || !phoneId || !accessToken) {
    console.warn('⚠️  Meta WhatsApp credentials not set. Skipping notification.');
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

  const url = `https://graph.facebook.com/v17.0/${phoneId}/messages`;

  try {
    const response = await axios.post(
      url,
      {
        messaging_product: 'whatsapp',
        to: phone,
        type: 'text',
        text: { body: message }
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.status === 200 || response.status === 201) {
      console.log('✅ WhatsApp notification sent successfully via Meta API');
      return { success: true };
    } else {
      console.error('❌ WhatsApp notification failed:', response.status, response.data);
      return { success: false, reason: response.data };
    }
  } catch (error) {
    console.error('❌ WhatsApp notification error:', error.response ? error.response.data : error.message);
    return { success: false, reason: error.message };
  }
}

module.exports = { sendWhatsAppNotification };
