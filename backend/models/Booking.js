const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    trim: true
  },
  tripType: {
    type: String,
    enum: ['one-way', 'round-trip'],
    required: true,
    default: 'one-way'
  },
  pickup: {
    type: String,
    required: [true, 'Pickup location is required'],
    trim: true
  },
  drop: {
    type: String,
    required: [true, 'Drop location is required'],
    trim: true
  },
  pickupDate: {
    type: String,
    required: [true, 'Pickup date is required']
  },
  pickupTime: {
    type: String,
    required: [true, 'Pickup time is required']
  },
  vehicleType: {
    type: String,
    enum: ['Sedan', 'SUV', 'Innova', 'Innova Crysta'],
    required: true
  },
  noOfPersons: {
    type: Number,
    min: 1,
    max: 7,
    default: 1
  },
  noOfDays: {
    type: Number,
    min: 1,
    default: 1
  },
  distanceKm: {
    type: Number,
    default: 0
  },
  estimatedFare: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  whatsappNotified: {
    type: Boolean,
    default: false
  },
  notifiedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Auto-generate bookingId before saving
bookingSchema.pre('validate', async function (next) {
  if (!this.bookingId) {
    const count = await mongoose.model('Booking').countDocuments();
    const pad = String(count + 1).padStart(6, '0');
    this.bookingId = `ECO-${new Date().getFullYear()}-${pad}`;
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
