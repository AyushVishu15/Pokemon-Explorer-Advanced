
import React, { useState, useMemo, useCallback } from 'react';
import PokemonCard from '../components/PokemonCard';
import SearchFilter from '../components/SearchFilter';
import Pagination from '../components/Pagination';
import CompareTool from '../components/CompareTool';
import RandomPokemonButton from '../components/RandomPokemonButton';
import { usePokemonContext } from '../contexts/PokemonContext';

const Home = () => {
  const { pokemonList, types, loading, error } = usePokemonContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortBy, setSortBy] = useState('id-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredPokemon = useMemo(() => {
    let result = [...pokemonList];

    // Search filter
    if (searchTerm) {
      result = result.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Multi-type filter
    if (selectedTypes.length > 0) {
      result = result.filter(pokemon =>
        selectedTypes.every(type =>
          pokemon.types.some(t => t.type.name === type)
        )
      );
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'id-asc') return a.id - b.id;
      if (sortBy === 'id-desc') return b.id - a.id;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return 0;
    });

    return result;
  }, [pokemonList, searchTerm, selectedTypes, sortBy]);

  const paginatedPokemon = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredPokemon.slice(start, end);
  }, [filteredPokemon, currentPage, itemsPerPage]);

  const handlePageChange = useCallback(page => {
    setCurrentPage(page);
  }, []);

  const handleItemsPerPageChange = useCallback(count => {
    setItemsPerPage(count);
    setCurrentPage(1);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Pokémon List</h2>
        <RandomPokemonButton />
      </div>
      <CompareTool />
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        types={types}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {paginatedPokemon.length === 0 ? (
        <p className="text-center text-gray-600">No Pokémon found matching your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedPokemon.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredPokemon.length}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default Home;