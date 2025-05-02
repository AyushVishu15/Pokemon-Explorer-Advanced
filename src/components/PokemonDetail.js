
import React from 'react';
import { Link } from 'react-router-dom';

const PokemonDetail = ({ pokemon, evolutionChain }) => {
  if (!pokemon) return <div className="text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to List
      </Link>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-48 h-48 mx-auto md:mx-0"
        />
        <div>
          <h2 className="text-3xl font-bold capitalize">{pokemon.name} #{pokemon.id}</h2>
          <div className="flex gap-2 mt-2">
            {pokemon.types.map(type => (
              <span
                key={type.type.name}
                className="px-2 py-1 bg-gray-200 rounded-full text-sm capitalize"
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mt-4">Stats</h3>
          <ul className="grid grid-cols-2 gap-2">
            {pokemon.stats.map(stat => (
              <li key={stat.stat.name} className="capitalize">
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-4">Abilities</h3>
          <ul className="list-disc pl-5">
            {pokemon.abilities.map(ability => (
              <li key={ability.ability.name} className="capitalize">
                {ability.ability.name}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-4">Moves</h3>
          <div className="flex flex-wrap gap-2">
            {pokemon.moves.slice(0, 10).map(move => (
              <span
                key={move.move.name}
                className="px-2 py-1 bg-gray-100 rounded-md text-sm capitalize"
              >
                {move.move.name}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mt-4">Evolution Chain</h3>
          <div className="flex flex-wrap gap-2">
            {evolutionChain.map(evo => (
              <Link
                key={evo.name}
                to={`/pokemon/${evo.id}`}
                className="px-2 py-1 bg-blue-100 rounded-md text-sm capitalize hover:bg-blue-200"
              >
                {evo.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;