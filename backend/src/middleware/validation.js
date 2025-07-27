const { body, validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

const registerValidationRules = () => {
    return [
        body('name', 'Name is required').not().isEmpty().trim().escape(),
        body('email', 'Please include a valid email').isEmail().normalizeEmail(),
        body('password', 'Password must be 6 or more characters').isLength({ min: 6 })
    ];
};

const loginValidationRules = () => {
    return [
        body('email', 'Please include a valid email').isEmail().normalizeEmail(),
        body('password', 'Password is required').exists()
    ];
};

const postValidationRules = () => {
    return [
        body('title', 'Title is required').not().isEmpty().trim().escape(),
        body('slug', 'Slug is required').not().isEmpty().trim().escape(),
        body('content', 'Content is required').not().isEmpty().trim().escape()
    ];
};

const docValidationRules = () => {
    return [
        body('title', 'Title is required').not().isEmpty().trim().escape(),
        body('slug', 'Slug is required').not().isEmpty().trim().escape(),
        body('content', 'Content is required').not().isEmpty().trim().escape(),
        body('parent').optional().isMongoId(),
        body('order').optional().isNumeric(),
        body('status').optional().isIn(['published', 'draft'])
    ];
};

const planValidationRules = () => {
    return [
        body('name', 'Name is required').not().isEmpty().trim().escape(),
        body('price', 'Price is required and must be a number').isNumeric(),
        body('features', 'Features must be an array').isArray(),
        body('isPro').optional().isBoolean(),
        body('stripePlanId', 'Stripe Plan ID is required').not().isEmpty().trim().escape()
    ];
};

const downloadValidationRules = () => {
    return [
        body('platform', 'Platform is required').isIn(['Windows', 'Mac', 'Linux']),
        body('version', 'Version is required').not().isEmpty().trim().escape()
    ];
};

const newsletterValidationRules = () => {
    return [
        body('email', 'A valid email is required').isEmail().normalizeEmail()
    ];
};

const supportFormValidationRules = () => {
    return [
        body('name', 'Name is required').not().isEmpty().trim().escape(),
        body('email', 'A valid email is required').isEmail().normalizeEmail(),
        body('message', 'Message is required').not().isEmpty().trim().escape()
    ];
};


module.exports = {
    registerValidationRules,
    loginValidationRules,
    postValidationRules,
    docValidationRules,
    planValidationRules,
    downloadValidationRules,
    newsletterValidationRules,
    supportFormValidationRules,
    validateRequest
}; 