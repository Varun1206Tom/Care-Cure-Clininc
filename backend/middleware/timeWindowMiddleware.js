const { getHours, getMinutes } = require('date-fns');

const BOOKING_OPEN_HOUR = 8; // 8 AM IST
const BOOKING_CLOSE_HOUR = 16; // 4 PM IST
// Clinic service starts after booking closes: 5 PM to 10 PM.

module.exports = function timeWindowMiddleware(req, res, next) {
    const now = new Date();
    const hour = getHours(now);
    const min = getMinutes(now);

    const isOpen = (hour > BOOKING_OPEN_HOUR || (hour === BOOKING_OPEN_HOUR && min >= 0))
        && (hour < BOOKING_CLOSE_HOUR);

    if (!isOpen) {
        return res.status(403).json({
            success: false,
            message: 'Booking is currently closed. Please visit between 8:00 AM and 4:00 PM. Clinic service starts at 5:00 PM.',
            nextOpenAt: 'Tomorrow at 8:00 AM'
        });
    }
    next();
};
