import "dotenv/config";

import mongoose from "mongoose";
import Result from "../models/result.js";

mongoose.connect(process.env.MONGO_URL, {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

const game_create_post = async (req, res) => {
  try {
    if (
      (req.body.winnername &&
        req.body.winnerid &&
        req.body.losername &&
        req.body.loserid !== undefined) ||
      0
    ) {
      await Result.create({
        winnername: req.body.winnername,
        winnerid: req.body.winnerid,
        losername: req.body.losername,
        loserid: req.body.loserid,
      });
      res.send("Added to Scoreboard");
    }
  } catch (error) {
    res.send(`Fehler: ${error}`);
  }

  res.json(newResult);
};

const get_scorboard = async (req, res) => {
  try {
    const all_entries = await Result.find({});
    res.send(all_entries);
  } catch (error) {
    res.send(error);
  }
};
export { game_create_post, get_scorboard };
