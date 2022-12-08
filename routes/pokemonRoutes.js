import express from "express";
import {
  pokemon_all as pokedex,
  pokemon_id,
  pokemon_id_info,
} from "../controllers/pokemonController.js";

const router = express.Router();

router.get("/:id/:info", pokemon_id_info);
router.get("/:id", pokemon_id);
router.get("/", pokedex);

export default router;
