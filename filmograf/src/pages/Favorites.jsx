import MovieCard from '../components/MovieCard';

export default function Favorites({ movies }) {
  return (
    <div className="page" style={{ padding: '20px' }}>
      <h2>Избранные фильмы</h2>
      {movies.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>Нет избранных фильмов</p>
      )}
    </div>
  );
}