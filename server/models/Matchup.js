const { Schema, model } = require("mongoose");

const matchupSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  player1: {
    type: Schema.Types.ObjectId,
    ref: "Player",
  },
  player2: {
    type: Schema.Types.ObjectId,
    ref: "Player",
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
