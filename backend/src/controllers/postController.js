const Post = require('../models/Post');

// Get all posts
// @desc    Get all posts
// @access  Public
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({ status: 'published' }).sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get post by slug
// @desc    Get post by slug
// @access  Public
exports.getPostBySlug = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug, status: 'published' });
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Create a post
// @desc    Create a post
// @access  Private
exports.createPost = async (req, res) => {
  const { title, slug, content } = req.body;
  try {
    const newPost = new Post({
      title,
      slug,
      content,
      author: req.user.id
    });
    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a post
// @desc    Update a post
// @access  Private
exports.updatePost = async (req, res) => {
  const { title, slug, content } = req.body;

  // Build post object
  const postFields = {};
  if (title) postFields.title = title;
  if (slug) postFields.slug = slug;
  if (content) postFields.content = content;

  try {
    let post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ msg: 'Post not found' });

    // Make sure user owns the post
    if (post.author.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    post = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: postFields },
      { new: true }
    );
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a post
// @desc    Delete a post
// @access  Private
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Make sure user owns the post
    if (post.author.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
    }

    await post.deleteOne();

    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}; 