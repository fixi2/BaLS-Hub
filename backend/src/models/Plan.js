const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  features: {
    type: [String],
    required: true
  },
  isPro: {
    type: Boolean,
    default: false
  },
  stripePlanId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Plan', PlanSchema); 