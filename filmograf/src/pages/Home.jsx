import MovieCard from '../components/MovieCard';

export default function Home({ movies, onToggleFavorite }) {
  return (
    <div className="page">
      <h2>Список фильмов</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard 
            key={movie.id}
            movie={movie}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}