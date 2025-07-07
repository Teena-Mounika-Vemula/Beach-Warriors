# 🏖️ Beach Warriors 🌊

**Beach Warriors** is a gamified environmental impact platform designed to engage communities in **beach cleanup drives**. The app uses real-time webcam capture, event scheduling, face detection, and XP-based rewards to encourage meaningful participation in environmental sustainability.

Built using **React**, **Firebase**, and **face-api.js**, it empowers users to document their cleanup impact, attend events, and track progress—all while earning XP and climbing leaderboards.

---

## 📘 Introduction

**Beach Warriors** bridges technology with environmental activism. Users can join cleanup events, capture moments via an **Impact Cam** with fun AR filters, and gain XP through participation. Organizers can create and manage events, auto-schedule recurring drives, and track volunteer engagement.

Whether it's marine conservation or community empowerment, this app makes cleanup campaigns measurable, motivating, and fun.

---

## 🚀 Features

### 📸 Impact Cam (AR + AI)
- Capture selfies using webcam during cleanup events
- Apply **Cleanup Hero filters** (e.g., cape, badge) using face landmarks
- Generate **AI captions** to describe each moment
- Automatically reward XP for using the camera

### 📅 Event Management
- Browse upcoming cleanup drives
- RSVP to events and view details (location, time, goal)
- Organizers can add, edit, and delete events
- Attendance tracking system with real-time volunteer counts

### ✅ Volunteer Attendance & XP System
- Check-in and check-out at events
- XP is awarded based on participation and camera use
- Track XP progress with gamified visuals
- Earn badges and appear on the leaderboard

### 🤖 Auto-Scheduling System
- Volunteers express interest in potential cleanup events
- Events automatically go live when interest threshold is reached
- Uses backend logic (Firebase Functions) to monitor interest levels
- Admin override support to manually activate or cancel events
- Reduces manual scheduling workload and ensures community-driven participation

### 📄 AI Copilot (Document Summarizer)
- Upload and summarize reports or documents
- Helps organizers quickly extract content for announcements
- Powered by FastAPI and LLM backend (Groq/OpenAI)

---

## 🧰 Tech Stack

| Area               | Stack / Tools                                       |
|--------------------|-----------------------------------------------------|
| Frontend           | React (Vite), Tailwind CSS, React Router            |
| Camera + AR        | face-api.js, react-webcam, html2canvas              |
| Backend & Hosting  | Firebase Auth, Firestore, Storage, Hosting, Functions |
| Summarization      | FastAPI, Python, Groq/OpenAI API                    |
| Gamification       | XP system, UUID, Leaderboard, Custom XP Logic       |
| Others             | date-fns, pdf-lib, dotenv, validator                |

---

## 📂 Project Structure

```
beach-warriors/
├── beach-warriors-backend/        # Backend (FastAPI or Firebase Functions)
│   └── beachbot-backend/
├── beach-warriors-react/          # Frontend (React + Tailwind + Firebase)
│   ├── components.json
│   ├── cors.json
│   ├── dist/
│   ├── index.html
│   ├── lib/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── pglite-debug.log
│   ├── postcss.config.js
│   ├── src/                       # React source code (pages, components, hooks)
│   ├── styles/                    # Tailwind & global styles
│   ├── tailwind.config.js
│   └── vite.config.js
├── index.js                       # Entry point for CLI or tooling
├── node_modules/                  # Root dependencies
├── package-lock.json
├── package.json
└── public/
    └── models/                    # face-api.js model files
```

---

## 🛠 Setup Instructions

### 🔧 Frontend (React + Firebase)

1. Clone the repository:
   ```bash
   git clone https://github.com/Teena-Mounika-Vemula/Beach-Warriors.git
   cd Beach-Warriors
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add `.env` file with your Firebase and API configs.

4. Run development server:
   ```bash
   npm run dev
   ```

### 🧠 Backend (FastAPI - AI Copilot)

```bash
cd fastapi
pip install -r requirements.txt
uvicorn main:app --reload
```

### ☁️ Firebase Setup

**Enable:**
- Firebase Auth (email/password)
- Firestore DB
- Firebase Storage
- Firebase Hosting

**Deploy Functions (auto-scheduling):**
```bash
firebase deploy --only functions
```

---

## 📜 License

This project is licensed under the MIT License.

---

## 👩‍💻 Authors

- Vemula Teena Mounika

---

## 🔮 Future Scope

- Real-time waste classification using TensorFlow.js
- WhatsApp/SMS alerts for nearby events
- Native mobile app with push notifications
- Blockchain-based reward tokens for volunteers
