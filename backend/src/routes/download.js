const express = require('express');
const router = express.Router();
const downloadController = require('../controllers/downloadController');
const auth = require('../middleware/auth');
const { downloadValidationRules, validateRequest } = require('../middleware/validation');

// @route   POST api/download
// @desc    Get a download link for a specific platform and version
// @access  Private
router.post('/', auth, downloadValidationRules(), validateRequest, downloadController.getDownloadLink);

module.exports = router; 