const express = require('express');
const router = express.Router();
const downloadController = require('../controllers/downloadController');
const auth = require('../middleware/auth'); // Assuming downloads are for authenticated users

// @route   POST api/download
// @desc    Get a download link for a specific platform and version
// @access  Private
router.post('/', auth, downloadController.getDownloadLink);

module.exports = router; 