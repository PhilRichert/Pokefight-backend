import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    winnername: { type: String, required: true },
    winnerid: { type: Number, required: true },
    losername: { type: String, required: true },
    loserid: { type: Number, required: true },
  },
  { typeKey: "$type" }
);

const Result = mongoose.model("Result", resultSchema);

export default Result;
