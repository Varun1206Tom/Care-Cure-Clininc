// controllers/appointmentController.js
const Appointment = require('../models/Appointment');

exports.bookAppointment = async (req, res) => {
    const { patientName, phone, email, date, timeSlot } = req.body;

    try {
        // findOneAndUpdate with upsert:false acts as an atomic "check-then-insert"
        // The unique index on {date, timeSlot} guarantees race-condition safety
        const appointment = await Appointment.create({
            patientName, phone, email, date, timeSlot
        });

        res.status(201).json({
            success: true,
            message: 'Appointment confirmed!',
            data: appointment
        });
    } catch (err) {
        if (err.code === 11000) {
            // Duplicate key = slot already taken
            return res.status(409).json({
                success: false,
                message: 'This slot was just taken. Please choose another time.'
            });
        }
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.getAvailableSlots = async (req, res) => {
    const { date } = req.query;

    const ALL_SLOTS = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
        '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
        '14:00', '14:30', '15:00', '15:30'];

    const booked = await Appointment.find({ date, status: 'confirmed' })
        .select('timeSlot -_id');
    const bookedTimes = booked.map(a => a.timeSlot);

    const slots = ALL_SLOTS.map(t => ({
        time: t,
        available: !bookedTimes.includes(t)
    }));

    res.json({ success: true, data: slots });
};