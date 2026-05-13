# 🏥 Care-Cure-Clinic

> A modern, full-stack doctor appointment booking system — built for simplicity, performance, and zero overbooking.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=flat-square&logo=express&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

---

## ✨ Features

- 📅 **No login required** — patients book appointments instantly
- ⏰ **Smart booking window** — open 8:00 AM to 4:00 PM daily, auto-closes after hours
- 🔒 **Atomic slot locking** — MongoDB unique indexing prevents race conditions and double bookings
- 📲 **WhatsApp reports** — daily appointment summary sent to the doctor at 4:00 PM via Twilio
- 📧 **Email fallback** — Nodemailer kicks in automatically if WhatsApp delivery fails
- 🩺 **Admin dashboard** — doctor can view, search, and export daily bookings
- ⚡ **Real-time availability** — slots update live as patients book
- 🎨 **Premium UI** — Framer Motion animations, mobile-first responsive design
- 🛡️ **Rate limiting** — protects against spam and abuse

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 (CRA), Framer Motion, Tailwind CSS, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose ODM) |
| Scheduling | node-cron |
| Notifications | Twilio (WhatsApp), Nodemailer (Email) |
| Security | Helmet, CORS, express-rate-limit |

---

## 📁 Project Structure

```
care-cure-clinic/
├── backend/
│   ├── config/           # MongoDB connection
│   ├── controllers/      # Booking & admin logic
│   ├── middleware/       # Time-window guard, rate limiter
│   ├── models/           # Appointment schema
│   ├── routes/           # API endpoints
│   ├── services/         # Notification + cron scheduler
│   ├── .env.example
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/   # BookingForm, SlotPicker, ConfirmationModal
    │   ├── hooks/        # useBookingWindow
    │   ├── pages/        # BookingPage, AdminPage
    │   └── services/     # Axios API calls
    └── tailwind.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB Atlas account (free tier works)
- Twilio account with WhatsApp sandbox enabled

### 1. Clone the repository

```bash
git clone https://github.com/your-username/care-cure-clinic.git
cd care-cure-clinic
```

### 2. Set up the backend

```bash
cd backend
npm install
cp .env.example .env
# Fill in your credentials in .env
npm run dev
```

### 3. Set up the frontend

```bash
cd frontend
npm install
npm start
```

The app runs at `http://localhost:3000` — API at `http://localhost:5000`.

---

## ⚙️ Environment Variables

Create a `.env` file in `/backend` with the following:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/doctorbooking
FRONTEND_URL=http://localhost:3000

# Twilio WhatsApp
TWILIO_SID=ACxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxx
TWILIO_WHATSAPP_NUMBER=+14155238886
DOCTOR_WHATSAPP=+91XXXXXXXXXX

# Email fallback
DOCTOR_EMAIL=doctor@clinic.com
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

---

## 📡 API Reference

| Method | Endpoint | Description | Guarded |
|---|---|---|---|
| `GET` | `/api/appointments/slots?date=YYYY-MM-DD` | Get available slots for a date | No |
| `POST` | `/api/appointments` | Book an appointment | ✅ Time window + rate limit |
| `GET` | `/api/admin/bookings?date=YYYY-MM-DD` | Get all bookings for a date | Admin |
| `GET` | `/api/admin/export?date=YYYY-MM-DD` | Export daily report | Admin |

---

## 🕐 Booking Window Logic

Bookings are **only accepted between 8:00 AM and 4:00 PM** (IST). This is enforced in two layers:

1. **Frontend** — the UI disables the booking form and shows a friendly closed banner outside hours
2. **Backend** — `timeWindowMiddleware` returns a `403` for any POST request outside the window

At exactly **4:00 PM**, a `node-cron` job fires, collects all confirmed appointments for the day, and sends the full report to the doctor via WhatsApp (with email as automatic fallback).

---

## 🔒 Preventing Double Bookings

The `Appointment` model has a **compound unique index** on `{ date, timeSlot }`. This means even if two patients submit the same slot at the exact same millisecond, MongoDB's atomic write guarantees only one succeeds. The losing request receives a clear "slot just taken" message and is prompted to choose another time.

---

## 🩺 Admin Dashboard

The doctor can access `/admin` to:

- View all appointments for any selected date
- See patient name, phone, time slot, and booking timestamp
- Trigger a manual report export

---

## 📦 Deployment

| Service | Recommended platform |
|---|---|
| Backend | [Railway](https://railway.app) or [Render](https://render.com) |
| Frontend | [Vercel](https://vercel.com) or [Netlify](https://netlify.com) |
| Database | [MongoDB Atlas](https://cloud.mongodb.com) |

Ensure your hosting platform's timezone is set to `Asia/Kolkata` for the 4 PM cron job to fire correctly.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

[MIT](LICENSE) — free to use, modify, and distribute.

---

> Built with care for clinics that deserve modern tech. 🩺
