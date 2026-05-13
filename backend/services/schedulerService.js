const cron = require('node-cron');
const Appointment = require('../models/Appointment');
const { sendWhatsApp, sendEmail } = require('./notificationService');
const { format } = require('date-fns');

// Runs at 16:00 every day
cron.schedule('0 16 * * *', async () => {
  const today = format(new Date(), 'yyyy-MM-dd');

  const appointments = await Appointment.find({ date: today, status: 'confirmed' })
                                        .sort({ timeSlot: 1 });

  if (!appointments.length) {
    console.log('[Scheduler] No appointments for today.');
    return;
  }

  const report = appointments
    .map((a, i) => `${i + 1}. ${a.timeSlot} — ${a.patientName} (${a.phone})`)
    .join('\n');

  const message = `*Daily Appointment Report — ${today}*\n\nTotal: ${appointments.length}\n\n${report}`;

  try {
    await sendWhatsApp(message);
    console.log('[Scheduler] WhatsApp report sent.');
  } catch (e) {
    console.error('[Scheduler] WhatsApp failed, trying email...', e.message);
    await sendEmail(message, today);
  }
}, { timezone: 'Asia/Kolkata' });