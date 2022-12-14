const { Schema, model } = require("mongoose");

const matchupSchema = new Schema({
  createdBy: {
    type: String,
    required: true,
  },
  player1: {
    type: String,
    required: true,
  },
  player2: {
    type: String,
    required: true,
  },
  player1_votes: {
    type: Number,
    default: 0,
  },
  player2_votes: {
    type: Number,
    default: 0,
  },
});

const Matchup = model("Matchup", matchupSchema);

module.exports = Matchup;
