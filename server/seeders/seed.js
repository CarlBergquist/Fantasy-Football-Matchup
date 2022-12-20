const db = require("../config/connection");
const {  Player } = require("../models");
const axios = require("axios");

db.once("open", async () => {
  try {
    
    await Player.deleteMany({});
    

    await axios
      .get("https://api.sleeper.app/v1/players/nfl")
      .then((data) => Player.insertMany(Object.values(data.data)));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
