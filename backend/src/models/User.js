const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  stripeCustomerId: {
    type: String,
    unique: true,
    sparse: true // Allows multiple documents to have a null value for this field
  },
  subscription: {
    plan: { type: Schema.Types.ObjectId, ref: 'Plan' },
    status: { type: String, enum: ['active', 'inactive', 'trialing'], default: 'inactive' },
    stripeSubscriptionId: { type: String, unique: true, sparse: true },
    currentPeriodEnds: { type: Date }
  },
  downloads: [{
    fileId: { type: String }, // Could be a version number or a specific file identifier
    downloadDate: { type: Date, default: Date.now }
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema); 