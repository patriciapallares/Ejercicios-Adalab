import { useEffect, useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import getDataApi from '../services/api';
import RepoList from './RepoList';

function App() {
  const [data, setData] = useState([]);

  // corchetes vacíos: ejecutar la funcion una sola vez, cuando carga la página

  // si segundo parámetro, se ejecuta cada vez que se renderiza la página

  // [estado] --> cuando cambia una variable de estado

  const deleteRepo = (id) => {
    const findIndex = data.findIndex((repo) => repo.id === parseInt(id));
    data.splice(findIndex, 1);
    setData([...data])

  };

  useEffect(() => {
    getDataApi().then((apiData) => {
      setData(apiData);
    });
  }, []);

  return (
    <div className='App'>
      <Header subtitle='Clase resolución dudas' lesson='modulo 3' number='8' />
      <main>
        <section className='results'>
          <RepoList listData={data} />
        </section>
      </main>
    </div>
  );
}

export default App;
