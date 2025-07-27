const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const planController = require('../controllers/planController');
const { planValidationRules, validateRequest } = require('../middleware/validation');

// @route   GET api/plans
// @desc    Get all plans
// @access  Public
router.get('/', planController.getPlans);

// @route   POST api/plans
// @desc    Create a plan
// @access  Private
router.post('/', auth, planValidationRules(), validateRequest, planController.createPlan);

// @route   PUT api/plans/:id
// @desc    Update a plan
// @access  Private
router.put('/:id', auth, planValidationRules(), validateRequest, planController.updatePlan);

// @route   DELETE api/plans/:id
// @desc    Delete a plan
// @access  Private
router.delete('/:id', auth, planController.deletePlan);

module.exports = router; 