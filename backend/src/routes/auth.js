const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// @route   POST api/auth/register
// @desc    Register admin
// @access  Public (for setup, should be protected later)
router.post('/register', authController.register);

// @route   POST api/auth/login
// @desc    Login admin & get token
// @access  Public
router.post('/login', authController.login);

module.exports = router; 