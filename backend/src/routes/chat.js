const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// @route   POST api/chat/bot
// @desc    Get a response from the AI bot
// @access  Public
router.post('/bot', chatController.getBotResponse);

module.exports = router; 