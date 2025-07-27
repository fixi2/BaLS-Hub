const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['published', 'draft'],
    default: 'draft'
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Doc',
    default: null
  },
  order: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Doc', DocSchema); 