const router = require('express').Router();
const ctrl = require('../controllers/appointmentController');
const timeWindow = require('../middleware/timeWindowMiddleware');
const limiter = require('../middleware/rateLimiter');

router.get('/slots', ctrl.getAvailableSlots);
router.post('/', limiter, timeWindow, ctrl.bookAppointment);

module.exports = router;