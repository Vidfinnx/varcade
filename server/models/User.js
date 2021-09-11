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
  scorePacman: {
    type: Number,
    default: 0,
  },
  scoreRpg: {
    type: Number,
    default: 0,
  },
});

const Score = model('Score', scoreSchema);

module.exports = Score;
