// routes/adminRoutes.js
const router = require('express').Router();
const ctrl   = require('../controllers/adminController');

router.get('/bookings', ctrl.getDailyBookings);
router.get('/export',   ctrl.exportDailyReport);
router.delete('/cancel/:id', ctrl.cancelAppointment);

module.exports = router;