import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';

const PokemonCard = ({ pokemon }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(pokemon.id);

  const handleToggleFavorite = useCallback(() => {
    toggleFavorite(pokemon.id);
  }, [pokemon.id, toggleFavorite]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <Link to={`/pokemon/${pokemon.id}`}>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-32 h-32 mx-auto"
        />
        <h3 className="text-lg font-semibold capitalize text-center">
          {pokemon.name}
        </h3>
        <p className="text-gray-600 text-center">#{pokemon.id}</p>
        <div className="flex justify-center gap-2 mt-2">
          {pokemon.types.map(type => (
            <span
              key={type.type.name}
              className="px-2 py-1 bg-gray-200 rounded-full text-sm capitalize"
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </Link>
      <button
        onClick={handleToggleFavorite}
        className={`mt-2 w-full py-1 rounded-md ${
          isFavorite ? 'bg-red-500 text-white' : 'bg-gray-300'
        }`}
      >
        {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
      </button>
    </div>
  );
};

export default PokemonCard;