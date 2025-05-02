
import React, { useState, useCallback } from 'react';
import { usePokemon } from '../hooks/usePokemon';

const CompareTool = () => {
  const { pokemonList } = usePokemon();
  const [pokemon1Id, setPokemon1Id] = useState('');
  const [pokemon2Id, setPokemon2Id] = useState('');

  const pokemon1 = pokemonList.find(p => p.id === Number(pokemon1Id));
  const pokemon2 = pokemonList.find(p => p.id === Number(pokemon2Id));

  const handleCompare = useCallback(() => {
    if (!pokemon1 || !pokemon2) return;
    // Comparison logic can be extended (e.g., highlight higher stats)
  }, [pokemon1, pokemon2]);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4">Compare Pokémon</h3>
      <div className="flex flex-col md:flex-row gap-4">
        <select
          value={pokemon1Id}
          onChange={e => setPokemon1Id(e.target.value)}
          className="p-2 border rounded-md flex-1"
        >
          <option value="">Select Pokémon 1</option>
          {pokemonList.map(pokemon => (
            <option key={pokemon.id} value={pokemon.id}>
              {pokemon.name} (#{pokemon.id})
            </option>
          ))}
        </select>
        <select
          value={pokemon2Id}
          onChange={e => setPokemon2Id(e.target.value)}
          className="p-2 border rounded-md flex-1"
        >
          <option value="">Select Pokémon 2</option>
          {pokemonList.map(pokemon => (
            <option key={pokemon.id} value={pokemon.id}>
              {pokemon.name} (#{pokemon.id})
            </option>
          ))}
        </select>
      </div>
      {pokemon1 && pokemon2 && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-lg font-semibold capitalize">{pokemon1.name}</h4>
            <ul className="list-disc pl-5">
              {pokemon1.stats.map(stat => (
                <li key={stat.stat.name} className="capitalize">
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold capitalize">{pokemon2.name}</h4>
            <ul className="list-disc pl-5">
              {pokemon2.stats.map(stat => (
                <li key={stat.stat.name} className="capitalize">
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareTool;