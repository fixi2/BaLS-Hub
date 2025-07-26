const Doc = require('../models/Doc');

// Get all docs
exports.getDocs = async (req, res) => {
  try {
    const docs = await Doc.find().sort({ order: 1 });
    res.json(docs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get doc by slug
exports.getDocBySlug = async (req, res) => {
  try {
    const doc = await Doc.findOne({ slug: req.params.slug });
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
  const { title, content, slug, parent, order } = req.body;
  try {
    const newDoc = new Doc({
      title,
      content,
      slug,
      parent,
      order
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
  const { title, content, slug, parent, order } = req.body;

  try {
    let doc = await Doc.findById(req.params.id);
    if (!doc) {
      return res.status(404).json({ msg: 'Doc not found' });
    }

    doc.title = title;
    doc.content = content;
    doc.slug = slug;
    doc.parent = parent;
    doc.order = order;

    doc = await doc.save();
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
    if (!doc) {
      return res.status(404).json({ msg: 'Doc not found' });
    }

    await doc.remove();
    res.json({ msg: 'Doc removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}; 