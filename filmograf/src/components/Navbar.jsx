import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '15px',
      marginBottom: '20px',
      textAlign: 'center'
    }}>
      <Link 
        to="/" 
        style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}
      >
        Главная
      </Link>
      <Link 
        to="/favorites" 
        style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}
      >
        Избранное
      </Link>
      <Link 
        to="/add-movie" 
        style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}
      >
        Добавить фильм
      </Link>
    </nav>
  );
}