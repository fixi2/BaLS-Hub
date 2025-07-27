const Doc = require('../models/Doc');

// Get all docs
exports.getDocs = async (req, res) => {
  try {
    const docs = await Doc.find({ status: 'published' }).sort({ order: 1 });
    res.json(docs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get doc by slug
exports.getDocBySlug = async (req, res) => {
  try {
    const doc = await Doc.findOne({ slug: req.params.slug, status: 'published' });
    if (!doc) {
      return res.status(404).json({ msg: 'Doc not found' });
    }
    res.json(doc);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Create a doc
exports.createDoc = async (req, res) => {
  const { title, slug, content, parent, order } = req.body;
  try {
    const newDoc = new Doc({
      title,
      slug,
      content,
      parent,
      order,
      author: req.user.id
    });
    const doc = await newDoc.save();
    res.json(doc);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a doc
exports.updateDoc = async (req, res) => {
  const { title, slug, content, parent, order } = req.body;

  // Build doc object
  const docFields = {};
  if (title) docFields.title = title;
  if (slug) docFields.slug = slug;
  if (content) docFields.content = content;
  if (parent) docFields.parent = parent;
  if (order) docFields.order = order;

  try {
    let doc = await Doc.findById(req.params.id);

    if (!doc) return res.status(404).json({ msg: 'Doc not found' });

    // Make sure user owns the doc
    if (doc.author.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
    }

    doc = await Doc.findByIdAndUpdate(
      req.params.id,
      { $set: docFields },
      { new: true }
    );
    res.json(doc);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a doc
exports.deleteDoc = async (req, res) => {
  try {
    const doc = await Doc.findById(req.params.id);

    if (!doc) return res.status(404).json({ msg: 'Doc not found' });

    // Make sure user owns the doc
    if (doc.author.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
    }

    await doc.deleteOne();

    res.json({ msg: 'Doc removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}; 