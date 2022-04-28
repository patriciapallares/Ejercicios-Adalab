import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getMovies from "../services/fetchMovies";
import localStorage from "../services/localStorage";
// importamos aquí el componente:
import Header from './Header';
import MovieList from './MovieList';


function App() {

  const [movies, setMovies] = useState(localStorage.get("movies", []));

  useEffect(() => {
    if (movies.length === 0) {
      getMovies().then(data => {
        localStorage.set("movies", data);
        setMovies(data);
      })
    }
  }, []);



  return (
    <div className="App">
      <Header title="Las Movies"/>

      <MovieList moviesList={movies}/>

    </div>
  );
}

export default App;
