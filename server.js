const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const cors = require('cors');
app.use(cors());

dotenv.config();

// Middleware


app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Server listen
module.exports = app;