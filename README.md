# 📚 KnowMore - Learning Management System

A full-stack Learning Management System (LMS) built with modern technologies, enabling seamless online education experiences for students, instructors, and administrators.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white)

---

## ✨ Features

### 👨‍🎓 For Students
- Browse and enroll in courses
- Watch video content and track progress
- Real-time chat with instructors
- Secure payment processing via Stripe
- Progress tracking and course completion certificates

### 👨‍🏫 For Instructors
- Create and manage courses
- Upload video content via Cloudinary
- Monitor student enrollment and progress
- Real-time chat with students
- Revenue and analytics dashboard

### 🔧 For Administrators
- User management (students/instructors)
- Course approval and moderation
- Platform analytics and reporting
- Content moderation tools

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI Library |
| **Vite** | Build Tool |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Styling |
| **Redux Toolkit** | State Management |
| **React Router DOM** | Routing |
| **Radix UI** | Accessible Components |
| **Chart.js** | Data Visualization |
| **Socket.io Client** | Real-time Communication |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime Environment |
| **Express.js** | Web Framework |
| **TypeScript** | Type Safety |
| **MongoDB** | Database |
| **Mongoose** | ODM |
| **Passport.js** | Authentication |
| **JWT** | Token-based Auth |
| **Socket.io** | Real-time Features |
| **Stripe** | Payment Processing |
| **Cloudinary** | Media Storage |
| **Nodemailer** | Email Service |

---

## 📁 Project Structure

```
KnowMore/
├── backend/
│   └── src/
│       ├── application/     # Use cases and business logic
│       ├── domain/          # Entities and interfaces
│       ├── infrastructure/  # Database, external services
│       ├── interfaces/      # Controllers, routes, middleware
│       ├── main/            # Application entry point
│       ├── types/           # TypeScript type definitions
│       └── utils/           # Utility functions
│
├── frontend/
│   └── src/
│       ├── api/             # API service calls
│       ├── app/             # Redux store configuration
│       ├── assets/          # Static assets (images, icons)
│       ├── axios/           # Axios instance configuration
│       ├── components/      # Reusable UI components
│       ├── config/          # Application configuration
│       ├── features/        # Redux slices
│       ├── hooks/           # Custom React hooks
│       ├── lib/             # Third-party library configs
│       ├── pages/           # Page components
│       │   ├── admin/       # Admin dashboard pages
│       │   ├── instructor/  # Instructor dashboard pages
│       │   └── students/    # Student-facing pages
│       ├── types/           # TypeScript interfaces
│       └── utils/           # Utility functions
│
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas)
- **Stripe Account** (for payments)
- **Cloudinary Account** (for media storage)
- **Google Cloud Console** (for OAuth)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NRnishad/KnowMore.git
   cd KnowMore
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**

   Create `.env` files in both `backend/` and `frontend/` directories:

   **Backend `.env`:**
   ```env
   # App Configuration
   NODE_ENV=development
   PORT=5001
   
   # CORS Configuration
   CLIENT_URL='http://localhost:5173'
   
   # MongoDB Configuration
   MONGO_URI='your_mongodb_connection_string'
   
   # JWT Configuration
   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   ACCESS_TOKEN_EXPIRE=1d
   REFRESH_TOKEN_EXPIRE=7d
   
   # Google OAuth Configuration
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_CALLBACK_URL=http://localhost:5001/auth/google/callback
   
   # Email Configuration
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   
   # Session Configuration
   SESSION_SECRET=your_session_secret
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   
   # Stripe Configuration
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PUBLIC_KEY=your_stripe_public_key
   STRIPE_WEBHOOK_SECRET=your_webhook_secret
   ```

   **Frontend `.env`:**
   ```env
   VITE_API_URL=http://localhost:5001
   VITE_GOOGLE_CLIENT_ID=your_google_client_id
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

4. **Run the application**

   ```bash
   # Start backend (from backend directory)
   npm run dev
   
   # Start frontend (from frontend directory)
   npm run dev
   ```

5. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5001`

---

## 📡 API Routes

| Route | Description |
|-------|-------------|
| `/auth/*` | Authentication endpoints |
| `/admin/*` | Admin management endpoints |
| `/instructor/*` | Instructor operations |
| `/student/*` | Student operations |
| `/chat/*` | Real-time chat endpoints |
| `/webhook` | Stripe webhook handler |

---

## 🔐 Authentication

The application supports multiple authentication methods:

- **Email/Password** - Traditional signup and login
- **Google OAuth 2.0** - Sign in with Google
- **JWT Tokens** - Access and refresh token mechanism
- **Email Verification** - OTP-based account verification

---

## 💳 Payment Integration

Secure payment processing is handled through **Stripe**:

- Credit/Debit card payments
- Webhook integration for payment verification
- Refund handling
- Subscription support (if applicable)

---

## 📦 Scripts

### Backend
```bash
npm run dev      # Start development server with hot reload
npm run build    # Compile TypeScript to JavaScript
npm test         # Run tests
```

### Frontend
```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Nishad N**

- GitHub: [@nrnishad](https://github.com/nrnishad)
- Email: nrnishad106@gmail.com

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Stripe](https://stripe.com/)
- [Cloudinary](https://cloudinary.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

---

<p align="center">Made with ❤️ by Nishad</p>
