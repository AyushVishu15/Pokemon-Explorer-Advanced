
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img
            src="/pokeball-logo.png" // Update to match exact filename
            alt="Pokéball Logo"
            className="h-10 w-10"
            onError={() => console.error('Failed to load Pokéball logo')}
          />
          <h1 className="text-4xl font-bold">Pokémon Explorer</h1>
        </div>
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/favorites" className="hover:underline">Favorites</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;