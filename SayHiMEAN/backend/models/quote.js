
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  quote: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Quote', quoteSchema);