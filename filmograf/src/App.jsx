import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AddMovie from './pages/AddMovie';

export default function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Крестный отец', year: 1972, isFavorite: false },
    { id: 2, title: 'Побег из Шоушенка', year: 1994, isFavorite: false }
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now(), isFavorite: false }]);
  };

  const toggleFavorite = (id) => {
    setMovies(movies.map(movie => 
      movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
    ));
  };

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home movies={movies} onToggleFavorite={toggleFavorite} />} />
        <Route path="/favorites" element={<Favorites movies={movies.filter(m => m.isFavorite)} />} />
        <Route path="/add-movie" element={<AddMovie onAddMovie={addMovie} />} />
      </Routes>
    </div>
  );
}