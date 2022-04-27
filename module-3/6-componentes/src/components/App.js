import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getMovies from "../services/fetchMovies";
import localStorage from "../services/localStorage";

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

  const htmlMovies = movies.map(movieItem => {
    return <li key={movieItem.id} className="movies__item" >
      <h2 className="movies__title">{movieItem.name}</h2>
      <p>{movieItem.synopsis}</p>
    </li>
  });


  return (
    <div className="App">
      <header className="header">

        <img className="header__img" alt="movie" src="https://adalab.es/wp-content/uploads/2021/05/logo-adalab.svg" />
        <h1 className="header__title">Movies</h1>
      </header>

      <ul className="movies__list">
        {htmlMovies}
      </ul>

    </div>
  );
}

export default App;
