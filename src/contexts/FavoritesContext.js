import React, { createContext, useContext } from 'react';
import { useFavorites } from '../hooks/useFavorites';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const favoritesData = useFavorites();

  return (
    <FavoritesContext.Provider value={favoritesData}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => useContext(FavoritesContext);