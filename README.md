<div align="center">
  <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/Hackathon-Ready-blue?style=for-the-badge" alt="Hackathon" />
  <img src="https://img.shields.io/badge/AI_Powered-Groq_Llama_3-purple?style=for-the-badge" alt="AI Engine" />
  <br />
  <br />

  # 🌟 SmartStock AI
  ### Enterprise Inventory Intelligence, powered by Live Llama 3.3.
  *An advanced full-stack SaaS platform featuring role-based dashboards, automated real-time Llama 3 restock predictions, and a stunning 60fps WebGL glass-morphic interface.*

  <img src="./frontend/public/vite.svg" height="80" alt="Logo" />
</div>

---

## 🏆 Project Overview

**SmartStock AI** isn't just a database GUI—it is a proactive, cognitive system. Designed for the modern enterprise floor, this application bridges the gap between chaotic warehouse management and precise, AI-driven foresight. 

Instead of waiting for stock to hit zero, **SmartStock AI analyzes live velocity and autonomously calculates mathematically optimal restock thresholds using the Groq Llama-3.3-70b LLM API.**

From the gorgeous, hardware-accelerated fluid WebGL UI to the deep Role-Based Access controls (Admin vs Staff), this platform is engineered natively to scale and impress.

---

## ✨ Flagship Features

### 🧠 1. Real-Time Groq AI Engine
- **Demand Forecasting**: Autonomously classifies real-time product health (`Healthy`, `Low Stock`, `Critical`) and calculates future trend trajectory.
- **Cognitive Recommendations**: Employees can trigger "Smart Restock Requests". The system connects to Groq contextually, analyzes current warehouse state, and suggests mathematically optimal buffer quantities.
- **Conversational AI Assistant**: A draggable, context-aware chatbot widget floating in the Staff dashboard capable of querying live MongoDB vectors to answer questions like: *"What is our most expensive critical item right now?"*

### 👑 2. Enterprise SaaS Architecture
- **Role-Based Access Control (RBAC)**: Distinct, isolated experiences.
  - **Admin**: God-mode. Approve pending staff requests, accept/reject new catalog product proposals, manage Team Roles, and handle raw Data Exports.
  - **Employee**: Floor-view. Trigger stock consumption, browse catalog, request restocks, and query the Chatbot.
- **System Settings Hub**: A beautifully tabbed control panel for manipulating Global AI Thresholds, managing user assignments, downloading CSV Ledgers, or triggering simulated Cloud Database Snapshots.

### 🎨 3. Premium UI/UX & WebGL Integration
- **Live Theme Interface**: Powered by `ogl`, a custom 60fps WebGL `<LightRays />` shader calculates 3D light shafts that pulse and morph behind frosted glass-morphic layers.
- **Responsive & Animated**: Built natively with Tailwind CSS and `lucide-react` icons. Features smooth `animate-in` transitions across all dynamic routing planes.

---

## 🛠 Tech Stack

| Layers | Technologies Used |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, React-Router-DOM, Lucide Icons, OGL (WebGL) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (Mongoose ORM) |
| **Authentication** | JSON Web Tokens (JWT), bcryptjs |
| **Artificial Intelligence** | Groq API (`llama-3.3-70b-versatile`) |
| **Infrastructure** | Multer (File Uploads), csv-parser (Data ingestion) |

---

## 🚀 Quick Start Guide

Want to spin this up locally? 

### 1. Requirements
Ensure you have `Node.js` installed and a MongoDB instance (local or Atlas cluster) ready. You will also need a free Groq API key to power the intelligence engine.

### 2. Backend Initialization
```bash
cd backend
npm install

# Create your `.env` file!
# PORT=5000
# MONGO_URI=your_mongodb_cluster_url
# JWT_SECRET=your_secret_key
# GROQ_API_KEY=your_groq_api_token
# NODE_ENV=development

npm run dev
```

### 3. Frontend Initialization
```bash
cd frontend
npm install

# Boot the React Application natively on Port 5173
npm run dev -- --port 5173 --strictPort
```

### 4. Demo Credentials
Don't want to create an account? The Login screen features quick-fill Demo Buttons:
- **Admin Access**: `admin@smartsocket.ai` / `password123`
- **Employee Access**: `employee@smartstock.ai` / `password123`

---

## 📸 Application Gallery

*A masterclass in modern dark-mode aesthetic and data density.*

![Login with WebGL Rays](https://raw.githubusercontent.com/Gnanasai1205/smartstock-ai/main/frontend/public/vite.svg) 
*(Note: Replace this image with a local screenshot of your awesome Login view!)*

---

*Built with passion for the Hackathon.* 🚀
