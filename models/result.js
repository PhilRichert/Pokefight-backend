import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  winner: { name: String, id: Number },
  loser: { name: String, id: Number },
});

const Result = mongoose.model("Result", resultSchema);

export default Result;
