import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  pokemonIdNPC: Number,
  pokemonIdPlayer: Number,
  winner: Number,
  result: {
    resultNPC: Number,
    resultPlayer: Number,
  },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Result", resultSchema);
