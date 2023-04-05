import express from "express";
import {
  game_create_post,
  get_scorboard,
  delete_scorboard,
} from "../controllers/gameController.js";

const router = express.Router();

router.get("/leaderboard", get_scorboard);
router.post("/save", game_create_post);
router.delete("/leaderboard/:id", delete_scorboard);

export default router;
