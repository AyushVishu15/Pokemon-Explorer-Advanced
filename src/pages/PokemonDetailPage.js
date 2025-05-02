
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetail from '../components/PokemonDetail';
import { usePokemonContext } from '../contexts/PokemonContext';

const PokemonDetailPage = () => {
  const { id } = useParams();
  const { getPokemonDetails, getEvolutionChain } = usePokemonContext();
  const [pokemon, setPokemon] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        setLoading(true);
        const details = await getPokemonDetails(id);
        const chain = await getEvolutionChain(details.species.url);
        setPokemon(details);
        setEvolutionChain(chain);
      } catch (err) {
        setError('Failed to load Pokémon details');
      } finally {
        setLoading(false);
      }
    };
    loadDetails();
  }, [id, getPokemonDetails, getEvolutionChain]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return <PokemonDetail pokemon={pokemon} evolutionChain={evolutionChain} />;
};

export default PokemonDetailPage;