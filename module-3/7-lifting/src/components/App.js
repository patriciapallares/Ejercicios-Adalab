import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getMovies from '../services/fetchMovies';
import localStorage from '../services/localStorage';
import Header from './Header';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

function App() {
  const [movies, setMovies] = useState(localStorage.get('movies', []));

  const [newMovie, setNewMovie] = useState({
    id: '',
    name: '',
    synopsis: '',
  });

  useEffect(() => {
    if (movies.length === 0) {
      getMovies().then((data) => {
        localStorage.set('movies', data);
        setMovies(data);
      });
    }
  }, []);

  const addMovie = () => {
    // construir el objeto movie para añadirlo

    setMovies([...movies, newMovie]);
  };

  const changeData = (nombreInput, valueInput) => {
    // primer parámetro: cuál es el input que está cambiando
    // segundo parámetro: cuál es el valor del input

    setNewMovie({
      ...newMovie,
      [nombreInput]: valueInput,
    });
  };

  return (
    <div className='App'>
      <Header title='Movies' pepino='Las movies' />
      <MovieList moviesList={movies} />

      {/* pasamos por prop la función para añadir new movie*/}
      <MovieForm
        // name={newMovie.name}
        newMovie={newMovie}
        addMovie={addMovie}
        changeData={changeData}
      />
    </div>
  );
}

export default App;
