// services/notificationService.js
const twilio = require('twilio');
const nodemailer = require('nodemailer');

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendWhatsApp = async (message) => {
    return twilioClient.messages.create({
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
        to: `whatsapp:${process.env.DOCTOR_WHATSAPP}`,
        body: message
    });
};

exports.sendEmail = async (reportText, date) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    return transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.DOCTOR_EMAIL,
        subject: `Appointments for ${date}`,
        text: reportText
    });
};