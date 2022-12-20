const db = require("../config/connection");
const { User, Matchup, Player } = require("../models");
const userSeeds = require("./userSeeds.json");
const matchupSeeds = require("./matchupSeeds.json");
const axios = require("axios");

db.once("open", async () => {
  try {
    await Matchup.deleteMany({});
    await User.deleteMany({});
    await Player.deleteMany({});
    await User.create(userSeeds);

    await axios
      .get("https://api.sleeper.app/v1/players/nfl")
      .then((data) => Player.insertMany(Object.values(data.data)));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  await Matchup.create(matchupSeeds);
  console.log("all done!");
  process.exit(0);
});
