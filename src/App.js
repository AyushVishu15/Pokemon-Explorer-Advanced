import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PokemonDetailPage from './pages/PokemonDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import ErrorBoundary from './components/ErrorBoundary';
import { PokemonProvider } from './contexts/PokemonContext';
import { FavoritesProvider } from './contexts/FavoritesContext';

const App = () => {
  return (
    <PokemonProvider>
      <FavoritesProvider>
        <Router>
          <ErrorBoundary>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </ErrorBoundary>
        </Router>
      </FavoritesProvider>
    </PokemonProvider>
  );
};

export default App; // Ensure default export
