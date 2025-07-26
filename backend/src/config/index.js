require('dotenv').config({ path: '.env.local' });

module.exports = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/balshub',
  jwtSecret: process.env.JWT_SECRET || 'your_super_secret_jwt_key',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || 'your_stripe_secret_key',
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || 'your_stripe_webhook_secret',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000'
}; 