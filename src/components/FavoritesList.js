
import React from 'react';
import PokemonCard from './PokemonCard';

const FavoritesList = ({ favorites, pokemonList }) => {
  const favoritePokemon = pokemonList.filter(pokemon => favorites.includes(pokemon.id));

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Favorite Pokémon</h2>
      {favoritePokemon.length === 0 ? (
        <p className="text-center text-gray-600">No favorite Pokémon yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoritePokemon.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;