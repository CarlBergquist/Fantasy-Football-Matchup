const { Schema, model } = require("mongoose");

const playerSchema = new Schema(
  {
    player_id: {
      type: String,
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
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
playerSchema.virtual("imageUrl").get(function () {
  return `https://sleepercdn.com/content/nfl/players/thumb/${this.player_id}.jpg`;
});


//do I need a .set as well?

const Player = model("Player", playerSchema);

module.exports = Player;
