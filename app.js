require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import cors package
const authRoutes = require('./routes/authRoutes');

const app = express();

const allowedOrigins = ['http://localhost:5173', 'https://dhatchanpassreset.netlify.app'];
app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
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
