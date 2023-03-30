import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  winnername: { String },
  winnerid: { Number },
  losername: { String },
  loserid: { Number },
});

// const Result = mongoose.model("Result", resultSchema);

// export default Result;
module.exports = mongoose.model("Result", resultSchema);
