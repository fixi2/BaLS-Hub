const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authController = require('../controllers/authController');
const { registerValidationRules, loginValidationRules, validateRequest } = require('../middleware/validation');
const { bruteForceGuard } = require('../middleware/bruteForceGuard');

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', registerValidationRules(), validateRequest, authController.register);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', loginValidationRules(), validateRequest, bruteForceGuard, authController.login);

// @route   POST api/auth/logout
// @desc    Logout user & blacklist token
// @access  Private
router.post('/logout', auth, authController.logout);

module.exports = router; 