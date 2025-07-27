const mongoose = require('mongoose');
const { RateLimiterMongo } = require('rate-limiter-flexible');

const mongoConn = mongoose.connection;

const opts = {
  storeClient: mongoConn,
  keyPrefix: 'rate_limit_login',
  points: 10, // Max 10 failed attempts
  duration: 60 * 15, // Block for 15 minutes
  blockDuration: 60 * 15,
};

const rateLimiter = new RateLimiterMongo(opts);

const bruteForceGuard = (req, res, next) => {
  rateLimiter.consume(req.body.email)
    .then(() => {
      next();
    })
    .catch((rejRes) => {
      const secs = Math.round(rejRes.msBeforeNext / 1000) || 1;
      res.set('Retry-After', String(secs));
      res.status(429).send('Too Many Requests');
    });
};

module.exports = { bruteForceGuard, rateLimiter }; 