const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
});

const Score = model('Score', scoreSchema);

module.exports = Score;
