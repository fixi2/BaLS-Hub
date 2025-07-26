const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postController = require('../controllers/postController');

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/', postController.getPosts);

// @route   GET api/posts/:slug
// @desc    Get post by slug
// @access  Public
router.get('/:slug', postController.getPostBySlug);

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post('/', auth, postController.createPost);

// @route   PUT api/posts/:id
// @desc    Update a post
// @access  Private
router.put('/:id', auth, postController.updatePost);

// @route   DELETE api/posts/:id
// @desc    Delete a post
// @access  Private
router.delete('/:id', auth, postController.deletePost);

module.exports = router; 