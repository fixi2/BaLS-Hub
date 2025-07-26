const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const auth = require('../middleware/auth');

// @route   POST api/payments/create-subscription-checkout-session
// @desc    Create a Stripe checkout session for a subscription
// @access  Private
router.post('/create-subscription-checkout-session', auth, paymentController.createSubscriptionCheckoutSession);

// @route   POST api/payments/webhook
// @desc    Stripe webhook endpoint
// @access  Public
router.post('/webhook', express.raw({type: 'application/json'}), paymentController.handleWebhook);

module.exports = router; 