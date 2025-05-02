
export const fetchPokemon = async (limit) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await response.json();
  const pokemonDetails = await Promise.all(
    data.results.map(async pokemon => {
      const res = await fetch(pokemon.url);
      return res.json();
    })
  );
  return pokemonDetails;
};

export const fetchPokemonTypes = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/type');
  const data = await response.json();
  return data.results.map(type => type.name).filter(type => type !== 'unknown' && type !== 'shadow');
};

export const fetchPokemonDetails = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.json();
};

export const fetchEvolutionChain = async (speciesUrl) => {
  const speciesResponse = await fetch(speciesUrl);
  const speciesData = await speciesResponse.json();
  const evolutionResponse = await fetch(speciesData.evolution_chain.url);
  const evolutionData = await evolutionResponse.json();

  const chain = [];
  let current = evolutionData.chain;

  while (current) {
    const pokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${current.species.name}`
    );
    const pokemonData = await pokemonResponse.json();
    chain.push({ name: current.species.name, id: pokemonData.id });
    current = current.evolves_to[0];
  }

  return chain;
};