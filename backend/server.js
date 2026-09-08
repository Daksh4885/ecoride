require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const bookingRoutes = require('./routes/bookings');

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ────────────────────────────────────────────────────────────────
const allowedOrigins = process.env.CORS_ORIGIN 
  ? process.env.CORS_ORIGIN.split(',').map(o => o.trim())
  : '*';

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/bookings', bookingRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'EcoRide DropTaxi API',
    timestamp: new Date().toISOString()
  });
});

// ─── Start Server ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚖 EcoRide API running on port ${PORT}`);
});

// ─── MongoDB Connection ────────────────────────────────────────────────────────
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('✅ MongoDB connected successfully');
    })
    .catch(err => {
      console.error('⚠️ MongoDB connection error:', err.message);
      console.log('ℹ️ Server is running, but database features require a working MongoDB connection.');
    });
} else {
  console.log('⚠️ MONGODB_URI not configured in .env');
}

module.exports = app;
