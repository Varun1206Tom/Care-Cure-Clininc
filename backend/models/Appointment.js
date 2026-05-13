const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientName: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    email: { type: String, required: false },
    date: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    status: { type: String, enum: ['confirmed', 'cancelled'], default: 'confirmed' },
    bookedAt: { type: Date, default: Date.now }
}, {timestamps: true});

appointmentSchema.index({ date: 1, timeSlot: 1 }, { unique: true }); // prevents double-booking at DB leve

module.exports = mongoose.model('Appointment', appointmentSchema);