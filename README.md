# Imagify AI - Text to Image Generator

Imagify AI is a full-stack web application that allows users to transform text descriptions into beautiful, high-quality images using AI. It features a complete user authentication system, a subscription/credit system, and integration with the Razorpay payment gateway for buying image generation credits.

---

## 🚀 Features

- **AI Image Generation**: Powered by the ClipDrop Text-to-Image API to generate stunning visuals from textual prompts.
- **User Authentication**: Secure user registration, login, and session management using JSON Web Tokens (JWT) and bcrypt.
- **Credit System**: Users receive initial free credits upon registration. Every image generation consumes a credit.
- **Razorpay Payment Integration**: Fully functional checkout flow to purchase more credit packages when credits run low.
- **Responsive & Modern UI**: Built with React, Vite, and styled with Tailwind CSS, featuring beautiful animations, clean layouts, and a dark/glassmorphic aesthetic.
- **Transaction History**: Keeps track of credits purchased and payments made.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite template)
- **Tailwind CSS** (for utility-first styling)
- **React Router DOM** (for navigation)
- **Context API** (for global state management)
- **Axios** (for API communication)

### Backend
- **Node.js** & **Express.js** (REST API)
- **MongoDB** & **Mongoose** (Database storage)
- **JSON Web Tokens (JWT)** (for authentication)
- **Razorpay SDK** (for payment processing)
- **dotenv** (for managing environment variables)

---

## 📦 Project Structure

```text
Imagify/
├── client/          # Frontend application (React + Vite)
│   ├── src/
│   │   ├── assets/       # Icons and sample images
│   │   ├── components/   # Reusable UI elements (Navbar, Footer, Headers)
│   │   ├── context/      # App State Context
│   │   └── pages/        # Main pages (Home, Buy Credit, Result)
│   └── package.json
│
└── server/          # Backend REST API (Express + Node.js)
    ├── config/      # Database & configuration settings
    ├── controllers/ # Request handlers (User, Image, Transactions)
    ├── middlewares/ # Authentication & validation middleware
    ├── models/      # Mongoose Schemas (User, Transaction)
    ├── routes/      # API Route definitions
    └── server.js    # Entry point
```

---

## ⚙️ Installation & Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed and a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) database set up.

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd Imagify
```

### 2. Configure Backend
Go to the `server/` directory and configure the environment variables:
```bash
cd server
cp .env.example .env
```
Open `.env` and fill in your credentials:
```env
MONGODB_URL="your-mongodb-connection-string"
JWT_SECRET="your-jwt-secret-key"
CLIPDROP_API="your-clipdrop-api-key"
RAZORPAY_KEY_ID="your-razorpay-key-id"
RAZORPAY_KEY_SECRET="your-razorpay-key-secret"
CURRENCY="INR"
```

Install backend dependencies and start the server:
```bash
npm install
npm run server
```
The server will run on `http://localhost:4000`.

### 3. Configure Frontend
Open a new terminal, go to the `client/` directory, and configure the environment variables:
```bash
cd client
cp .env.example .env
```
Open `.env` and configure:
```env
VITE_BACKEND_URL="http://localhost:4000"
VITE_RAZORPAY_KEY_ID="your-razorpay-key-id"
```

Install frontend dependencies and start the development server:
```bash
npm install
npm run dev
```
The client will run on `http://localhost:5173`.

---

## 🔒 Security Note
Never commit your `.env` files to Git. The project contains a `.gitignore` at the root that automatically ignores `.env` files, `node_modules`, and other temporary files. Use `.env.example` as a template when setting up on new environments.
