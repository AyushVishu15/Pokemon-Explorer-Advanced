
import { useState, useEffect, useMemo } from 'react';
import { fetchPokemon, fetchPokemonTypes, fetchPokemonDetails, fetchEvolutionChain } from '../utils/api';

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [pokemonData, typesData] = await Promise.all([
          fetchPokemon(150),
          fetchPokemonTypes(),
        ]);
        setPokemonList(pokemonData);
        setTypes(typesData);
      } catch (err) {
        setError('Failed to fetch Pokémon data');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const getPokemonDetails = async (id) => {
    try {
      const details = await fetchPokemonDetails(id);
      return details;
    } catch (err) {
      throw new Error('Failed to fetch Pokémon details');
    }
  };

  const getEvolutionChain = async (speciesUrl) => {
    try {
      const chain = await fetchEvolutionChain(speciesUrl);
      return chain;
    } catch (err) {
      throw new Error('Failed to fetch evolution chain');
    }
  };

  return useMemo(
    () => ({
      pokemonList,
      types,
      loading,
      error,
      getPokemonDetails,
      getEvolutionChain,
    }),
    [pokemonList, types, loading, error]
  );
};