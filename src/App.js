import  { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieForm from './MovieForm';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleFilter = filterParams => {
    const filteredMovies = movies.filter(movie => {
      const { title, rating } = filterParams;
      return (
        (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
        (rating ? movie.rating >= Number(rating) : true)
      );
    });
    setMovies(filteredMovies);
  };

  const handleAddMovie = newMovie => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  return (
    <div className="app">
      <h1>Movies</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={movies} />
      <MovieForm onAddMovie={handleAddMovie} />
    </div>
  );
};

export default App;
