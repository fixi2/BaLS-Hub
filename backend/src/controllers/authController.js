const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Plan = require('../models/Plan');
const TokenBlacklist = require('../models/TokenBlacklist');
const config = require('../config');
const { rateLimiter } = require('../middleware/bruteForceGuard');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      // Ambiguous response to prevent user enumeration
      return res.status(200).json({ msg: 'If an account with this email exists, a confirmation has been sent.' });
    }

    user = new User({
      name,
      email,
      password
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.jwtSecret,
      { expiresIn: '24h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // If login is successful, reset the brute force counter
    await rateLimiter.delete(email);

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.jwtSecret,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.logout = async (req, res) => {
    try {
        const token = req.header('x-auth-token');
        const decoded = jwt.decode(token);

        if (!decoded) {
            return res.status(400).json({ msg: 'Invalid token' });
        }

        const blacklistedToken = new TokenBlacklist({
            token,
            expireAt: new Date(decoded.exp * 1000) // 'exp' is in seconds, Date needs milliseconds
        });

        await blacklistedToken.save();
        res.json({ msg: 'Logged out successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}; 