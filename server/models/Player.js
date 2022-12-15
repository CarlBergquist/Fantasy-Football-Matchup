const { Schema, model } = require("mongoose");

const playerSchema = new Schema({
  player_id: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
  },
  position: {
    type: String,
  },
  team: {
    type: String,
  },
});

const Player = model("Player", playerSchema);

module.exports = Player;
