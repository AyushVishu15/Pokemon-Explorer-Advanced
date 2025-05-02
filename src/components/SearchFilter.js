
import React, { useCallback } from 'react';

const SearchFilter = ({
  searchTerm,
  setSearchTerm,
  selectedTypes,
  setSelectedTypes,
  types,
  sortBy,
  setSortBy,
}) => {
  const handleTypeChange = useCallback(
    (type) => {
      if (selectedTypes.includes(type)) {
        setSelectedTypes(selectedTypes.filter(t => t !== type));
      } else {
        setSelectedTypes([...selectedTypes, type]);
      }
    },
    [selectedTypes, setSelectedTypes]
  );

  return (
    <div className="flex flex-col gap-4 mb-6 max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="p-1.5 text-sm rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
      />
      <div className="flex flex-wrap gap-2">
        {types.map(type => (
          <button
            key={type}
            onClick={() => handleTypeChange(type)}
            className={`px-3 py-1 rounded-full text-sm capitalize ${
              selectedTypes.includes(type)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <select
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
        className="p-1.5 text-sm rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
      >
        <option value="id-asc">Sort by ID (Ascending)</option>
        <option value="id-desc">Sort by ID (Descending)</option>
        <option value="name-asc">Sort by Name (A-Z)</option>
        <option value="name-desc">Sort by Name (Z-A)</option>
      </select>
    </div>
  );
};

export default SearchFilter;