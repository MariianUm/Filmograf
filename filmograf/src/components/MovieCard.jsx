import { jsxDEV } from "react/jsx-dev-runtime";

export default function MovieCard({ movie, onToggleFavorite }) {
  return (
    <div className="movie-card" style={{
      border: '1px solid #ddd',
      padding: '15px',
      margin: '10px',
      borderRadius: '5px'
    }}>
      <h3>{movie.title}</h3>
      <p>Год: {movie.year}</p>
      {onToggleFavorite && (
        <button 
          onClick={() => onToggleFavorite(movie.id)}
          style={{ 
            color: movie.isFavorite ? 'red' : 'gray',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '24px'
          }}
        >
          {movie.isFavorite ? '★' : '☆'}
        </button>
      )}
    </div>
  );
}