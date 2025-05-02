
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RandomPokemonButton = () => {
  const navigate = useNavigate();

  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 150) + 1; // 1 to 150
    navigate(`/pokemon/${randomId}`);
  };

  return (
    <button
      onClick={handleRandom}
      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mb-4"
    >
      Random Pokémon
    </button>
  );
};

export default RandomPokemonButton;