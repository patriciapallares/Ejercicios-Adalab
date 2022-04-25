import '../styles/App.scss';
// verificar que se ha importado correctamente
import { useEffect, useState } from 'react';
import getMovies from '../services/fetchMovies';
import localStorage from '../services/localStorage';

// en qué momento quiero guardar los datos en LS: al hacer el fetch



// para que el fetch se haga cuando yo quiero, lo encapsulamos en un useEffect

// caso típico useEffect: fetch y guardar en LS

function App() {
  const [name, setName] = useState('');

  // función: lo que quiero que hagas, array: opcional.
  // si no pongo [] significa ejecuta cada vez que se renderice el componente
  // si lo pongo vacío [] solo se ejecuta la primera vez
  // si le pongo un valor [variable de estado], se ejecuta cada vez que cambia esa variable

  // variable de estado para las pelis
  // en este array, resultado de get de LS
  const [movies, setMovies] = useState([localStorage.get('movies', [])])

  useEffect(() => {
    // si se cumple el if (significa que no hay nada en el LS) arrancamos el fetch del servicio
    if(movies.length===0) {
      getMovies().then(data =>{
        localStorage.set('movies', data)
        setMovies(data);
      })
    }
  }, []);

  const handleName = (ev) => {
    setName(ev.currentTarget.value);
  };

  const htmlMovies = movies.map(movieItem => {
    return <li key={movieItem.id}> {movieItem.name} </li>
  }
  )

  return (
    <div className='App'>
      <input onChange={handleName} type='text' value={name} />
      <ul>
        {htmlMovies}
      </ul>
    </div>
  );
}

export default App;
