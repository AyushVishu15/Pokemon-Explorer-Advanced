
import React from 'react';
import FavoritesList from '../components/FavoritesList';
import { usePokemonContext } from '../contexts/PokemonContext';
import { useFavoritesContext } from '../contexts/FavoritesContext';

const FavoritesPage = () => {
  const { pokemonList } = usePokemonContext();
  const { favorites } = useFavoritesContext();

  return <FavoritesList favorites={favorites} pokemonList={pokemonList} />;
};

export default FavoritesPage;