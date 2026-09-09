require('dotenv').config();
const axios = require('axios');
const phone = process.env.WHATSAPP_NUMBER;
const phoneId = process.env.WHATSAPP_PHONE_ID;
const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
const url = `https://graph.facebook.com/v17.0/${phoneId}/messages`;
axios.post(url, {
  messaging_product: 'whatsapp',
  to: phone,
  type: 'text',
  text: { body: 'Test from agent' }
}, {
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
}).then(r => console.log('SUCCESS', r.data)).catch(e => console.error('ERROR', e.response ? e.response.data : e.message));
