# TravelNest - Tour Package Booking Management

## Short Project Overview
**TravelNest** is a full-stack tour package booking platform built with the **MERN stack** and **Firebase Authentication**.  
It allows users to explore available travel packages, view detailed itineraries, and confirm bookings.  
Users can also add and manage their own packages, while the system securely handles bookings with JWT authentication.

---

## Live Project
🔗 **Live Site:** [https://your-live-site-link.com](https://your-live-site-link.com)

---

## Server Repository
🔗 **Server Repo:** [https://github.com/your-username/TravelNest-server](https://github.com/your-username/TravelNest-server)

---

## Technologies Used

### Frontend
- React
- React Router
- Tailwind CSS
- DaisyUI
- Framer Motion
- React Hook Form

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Others
- Firebase Authentication (Email/Password, Google Login)
- JWT Authentication
- SweetAlert2
- Dotenv
- Axios
- Cors
- Date-fns

---

## Core Features
- **User Authentication** (Email/Password & Google)
- **JWT-secured Private Routes**
- **Tour Package Management**
  - Add, Update, Delete packages
  - Search packages by name/destination
- **Booking Management**
  - Book tours
  - Increment booking count automatically
  - Mark bookings as "completed"
- **Responsive UI**
  - Mobile, Tablet, and Desktop friendly
- **Theme Toggle**
  - Light/Dark mode switch
- About Us Page
- 404 Page
- Custom animated error page
- Toast Notifications
 - Success & error feedback
- Extra Sections
- Custom creative sections for a better landing page
- **Protected API Endpoints**
- Token-based authentication
- Guide Information
- Automatically populated from user profile
- Secure Environment Variables
- Firebase keys & MongoDB URI hidden using `.env`

---

## Dependencies

### Client
```json
"dependencies": {
  "axios": "^x.x.x",
  "react": "^x.x.x",
  "react-dom": "^x.x.x",
  "react-router-dom": "^x.x.x",
  "react-hook-form": "^x.x.x",
  "framer-motion": "^x.x.x",
  "sweetalert2": "^x.x.x",
  "firebase": "^x.x.x",
  "daisyui": "^x.x.x",
  "tailwindcss": "^x.x.x"
}
```
### Server
```json
"dependencies": {
  "express": "^x.x.x",
  "cors": "^x.x.x",
  "dotenv": "^x.x.x",
  "jsonwebtoken": "^x.x.x",
  "mongodb": "^x.x.x"
}
```
## 🖥 How to Run Locally

### 1️⃣ Clone the repositories
```bash
git clone CLIENT_REPO_URL
git clone SERVER_REPO_URL
```

### 2️⃣ Client Setup
```bash
cd client
npm install
```
- Create `.env.local` file and add the **Client Environment Variables** (see below).
- Start development server:
```bash
npm run dev
```

### 3️⃣ Server Setup
```bash
npm install
```
- Create `.env` file and add the **Server Environment Variables** (see below).
- Start server:
```bash
npm run dev
```

---

## Environment Variables

### **Client** (`.env.local`)
```env
VITE_API_BASE_URL=https://travel-nest-server-theta.vercel.app
VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
```
### **Server** (`.env`)
```env
MONGO_USER=YOUR_MONGODB_USERNAME
MONGO_PASS=YOUR_MONGODB_PASSWORD
JWT_SECRET_KEY=YOUR_SECRET_JWT_KEY
