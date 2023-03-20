import pokedex from "../src/pokedex.json" assert { type: "json" };

const pokemonById = (req) => {
  try {
    return pokedex.find((pokemon) => pokemon.id === parseInt(req.params.id));
  } catch (error) {
    return false;
  }
};

const pokemon_all = (req, res) => {
  res.send(pokedex);
};

const pokemon_id = (req, res) => {
  res.send(
    pokemonById(req) ??
      `Its not a correct id take between 1 and ${pokedex.length}`
  );
};

const pokemon_id_info = (req, res) => {
  const pokemon = pokemonById(req);
  res.send(pokemon[req.params.info] ?? "use base, name or type");
};

export { pokemon_all, pokemon_id, pokemon_id_info };
