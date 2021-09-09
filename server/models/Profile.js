const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

const Profile = model("Profile", profileSchema);

module.exports = Profile;

// const { Schema, model } = require("mongoose");

// const scoreSchema = new Schema({
//   user: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   score: {
//     type: Number,
//     default: 0,
//   },
// });

// const Score = model("Score", scoreSchema);

// module.exports = Score;
