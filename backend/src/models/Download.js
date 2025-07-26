const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DownloadSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  platform: {
    type: String,
    enum: ['Windows', 'Mac', 'Linux'],
    required: true
  },
  version: {
    type: String,
    required: true
  },
  downloadDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Download', DownloadSchema); 