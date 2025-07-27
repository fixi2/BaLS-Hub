const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const docController = require('../controllers/docController');
const { docValidationRules, validateRequest } = require('../middleware/validation');

// @route   GET api/docs
// @desc    Get all docs
// @access  Public
router.get('/', docController.getDocs);

// @route   GET api/docs/:slug
// @desc    Get doc by slug
// @access  Public
router.get('/:slug', docController.getDocBySlug);

// @route   POST api/docs
// @desc    Create a doc
// @access  Private
router.post('/', auth, docValidationRules(), validateRequest, docController.createDoc);

// @route   PUT api/docs/:id
// @desc    Update a doc
// @access  Private
router.put('/:id', auth, docValidationRules(), validateRequest, docController.updateDoc);

// @route   DELETE api/docs/:id
// @desc    Delete a doc
// @access  Private
router.delete('/:id', auth, docController.deleteDoc);

module.exports = router; 