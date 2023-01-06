import express from "express";
import {
  game_create_post,
  get_scorboard,
} from "../controllers/gameController.js";

const router = express.Router();

router.post("/save", game_create_post);
router.get("/leaderboard", get_scorboard);

export default router;
