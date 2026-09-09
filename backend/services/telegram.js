const axios = require('axios');

/**
 * Send Telegram message to operator/group via Telegram Bot API
 * @param {Object} booking - Booking details
 */
async function sendTelegramNotification(booking) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn('⚠️  Telegram credentials not set. Skipping notification.');
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

📋 *Booking ID:* ${booking.bookingId}
👤 *Name:* ${booking.name}
📱 *Mobile:* ${booking.mobile}
🚗 *Trip:* ${booking.tripType === 'one-way' ? 'One Way' : 'Round Trip'} | ${booking.vehicleType}
📍 *From:* ${booking.pickup}
📍 *To:* ${booking.drop}
📅 *Date:* ${booking.pickupDate}
⏰ *Time:* ${booking.pickupTime}
👥 *Persons:* ${booking.noOfPersons}
${booking.tripType === 'round-trip' ? `📆 *Days:* ${booking.noOfDays}\n` : ''}📏 *Distance:* ${distStr}
💰 *Fare:* ${fareStr}

📞 _Call customer immediately to confirm booking!_
`.trim();

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await axios.post(url, {
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown'
    });

    if (response.data.ok) {
      console.log('✅ Telegram notification sent successfully');
      return { success: true };
    } else {
      console.error('❌ Telegram notification failed:', response.data);
      return { success: false, reason: response.data.description };
    }
  } catch (error) {
    console.error('❌ Telegram notification error:', error.response ? error.response.data : error.message);
    return { success: false, reason: error.message };
  }
}

module.exports = { sendTelegramNotification };
