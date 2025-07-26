const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const { initializeChat } = require('./services/chatService');

const app = express();

// Middleware
app.use(cors());
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
app.use('/api/auth', require('./routes/auth'));
app.use('/api/download', require('./routes/download'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/chat', require('./routes/chat'));

const port = config.port;

const server = app.listen(port, () => console.log(`Server started on port ${port}`));

// Initialize WebSocket chat server
initializeChat(server); 