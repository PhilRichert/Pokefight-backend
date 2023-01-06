import "dotenv/config";
import express from "express";
import cors from "cors";
import pokemonRoutes from "./routes/pokemonRoutes.js";
// import gameRoutes from "./routes/gameRoutes.js";

const server = express();
const port = 8080;

// use cors
server.use(cors());

server.use(express.json());

// use Router for /pokemon
server.use("/pokemon", pokemonRoutes);

//  use Router for /game
server.use("/game", gameRoutes);

// alternativ 404
server.all("*", (req, res) => {
  res.send("Moin hier gibt es nichts zu sehen");
});

server.listen(process.env.PORT ?? port, () => {
  console.log(`Server läuft auf ${port}`);
});
