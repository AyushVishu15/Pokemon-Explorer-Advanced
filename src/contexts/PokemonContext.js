
import React, { createContext, useContext } from 'react';
import { usePokemon } from '../hooks/usePokemon';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const pokemonData = usePokemon();

  return (
    <PokemonContext.Provider value={pokemonData}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);