# BaLS Hub - Bug & Logic Scanner

Welcome to BaLS Hub, a full-stack marketing and application delivery platform for the BaLS (Bug & Logic Scanner) tool. This repository contains the Next.js (App Router) frontend and the Node.js/Express backend.

## Tech Stack

- **Frontend**: Next.js (React), TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Real-time Chat**: WebSockets (`ws`)
- **Payments**: Stripe
- **CI/CD**: GitHub Actions

---

## Project Structure

```
/
├── .github/              # GitHub Actions workflows
├── backend/              # Node.js/Express Backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   │   └── server.js     # Main server file
│   ├── .env.local        # Local environment variables
│   └── package.json
├── frontend/             # Next.js Frontend (App Router)
│   ├── app/              # Main application routes and layouts
│   ├── components/
│   ├── public/
│   ├── .env.local
│   └── package.json
├── .gitignore
└── README.md
```

---

## Getting Started

Follow these instructions to get the project running locally.

### Prerequisites

- Node.js (v18 or later)
- MongoDB
- Git

### 1. Clone the Repository

```bash
git clone <repository_url>
cd VulnLogic
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env.local` file in the `backend` directory and add the following variables.

```
# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/balshub

# JWT
JWT_SECRET=your_super_secret_jwt_key

# Stripe API Keys
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Client URL (for Stripe redirects)
CLIENT_URL=http://localhost:3000
```

Start the backend server:

```bash
npm run dev
# The server will run on http://localhost:5000
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env.local` file in the `frontend` directory:

```
# URL for the backend API
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# WebSocket URL for the chat
NEXT_PUBLIC_WS_URL=ws://localhost:5000
```

Start the frontend development server:

```bash
npm run dev
# The application will be available at http://localhost:3000
```

---

## Available API Endpoints

- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login a user.
- `POST /api/download` - Get a download link for the tool.
- `POST /api/payments/create-subscription-checkout-session` - Create a Stripe session.
- `POST /api/payments/webhook` - Handle Stripe events.
- `POST /api/chat/bot` - Get a response from the chat bot.
- `GET /api/posts`, `GET /api/docs`, `GET /api/plans` - Retrieve content.

A WebSocket server is also running for the live chat at `/`. 