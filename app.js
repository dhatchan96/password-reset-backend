require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import cors package
const authRoutes = require('./routes/authRoutes');

const app = express();

// Enable CORS for requests from localhost:5173
app.use(cors({
  origin: 'http://localhost:5173'  // Replace with your frontend URL in production
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(error => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/auth', authRoutes);

module.exports = app;
