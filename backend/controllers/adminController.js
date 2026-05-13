// controllers/adminController.js
const Appointment = require('../models/Appointment');
const { format } = require('date-fns');

// GET /api/admin/bookings?date=YYYY-MM-DD
exports.getDailyBookings = async (req, res) => {
  try {
    const date = req.query.date || format(new Date(), 'yyyy-MM-dd');

    const appointments = await Appointment.find({ date, status: 'confirmed' })
                                          .sort({ timeSlot: 1 });

    res.json({
      success: true,
      date,
      total: appointments.length,
      data: appointments
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

// GET /api/admin/export?date=YYYY-MM-DD
exports.exportDailyReport = async (req, res) => {
  try {
    const date = req.query.date || format(new Date(), 'yyyy-MM-dd');

    const appointments = await Appointment.find({ date, status: 'confirmed' })
                                          .sort({ timeSlot: 1 });

    if (!appointments.length) {
      return res.json({ success: true, message: 'No appointments found for this date.' });
    }

    const report = appointments.map((a, i) => ({
      serial:      i + 1,
      time:        a.timeSlot,
      patientName: a.patientName,
      phone:       a.phone,
      email:       a.email || 'N/A',
      bookedAt:    format(new Date(a.bookedAt), 'hh:mm a')
    }));

    res.json({
      success: true,
      date,
      total: appointments.length,
      report
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};

// DELETE /api/admin/cancel/:id
exports.cancelAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled' },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }

    res.json({ success: true, message: 'Appointment cancelled', data: appointment });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};