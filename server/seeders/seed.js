const db = require("../config/connection");
const { User, Matchup } = require("../models");
const userSeeds = require("./userSeeds.json");
const matchupSeeds = require("./matchupSeeds.json");

db.once("open", async () => {
  try {
    await Matchup.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < matchupSeeds.length; i++) {
      const { _id, createdBy } = await Matchup.create(matchupSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: createdBy },
        {
          $addToSet: {
            matchups: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
