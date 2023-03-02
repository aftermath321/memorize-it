const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  author: { type: String, required: true },
  date: {type: Date, required: true, default: Date.now},
  tags: { type: Array, required: true },
});


module.exports  = mongoose.model('Card', cardSchema);