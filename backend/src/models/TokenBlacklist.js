const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenBlacklistSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    // The token will be automatically removed from the collection after it expires
    expireAt: {
        type: Date,
        required: true,
        // This creates a TTL index that automatically removes documents
        expires: 0, 
    }
});

module.exports = mongoose.model('TokenBlacklist', TokenBlacklistSchema); 