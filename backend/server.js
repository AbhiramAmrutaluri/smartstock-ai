require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Setup
app.use(cors({
  origin: ['http://localhost:5173', 'https://smartstock-ai-11u3.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// API Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/employee', require('./routes/employeeRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/activity', require('./routes/activityRoutes'));

// Basic status route
app.get('/', (req, res) => {
  res.send('SmartStock AI Backend is running...');
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
