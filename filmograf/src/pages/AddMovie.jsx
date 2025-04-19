import { useState } from 'react';

export default function AddMovie({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({ title, year: Number(year) });
    setTitle('');
    setYear('');
  };

  return (
    <div className="page">
      <h2>Добавить фильм</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название"
          required
        />
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Год"
          required
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}