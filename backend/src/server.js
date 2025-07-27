const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const { initializeChat } = require('./services/chatService');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();

// Security Middleware
app.use(helmet());
app.use(mongoSanitize());

// CORS Configuration
const isProduction = process.env.NODE_ENV === 'production';
const corsOptions = {
  origin: (origin, callback) => {
    if (!isProduction || (origin && origin === config.clientUrl)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(cors(corsOptions));


// Rate Limiting for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: 'Too many requests from this IP, please try again after 15 minutes'
});


// Core Middleware
app.use(express.json());

// DB Config
const db = config.mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/posts', require('./routes/posts'));
app.use('/api/docs', require('./routes/docs'));
app.use('/api/plans', require('./routes/plans'));
app.use('/api/auth', authLimiter, require('./routes/auth')); // Apply limiter here
app.use('/api/download', require('./routes/download'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/chat', require('./routes/chat'));

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack for debugging
  res.status(500).send('Something broke!'); // Send generic message to client
});


const port = config.port;

const server = app.listen(port, () => console.log(`Server started on port ${port}`));

// Initialize WebSocket chat server
initializeChat(server); 