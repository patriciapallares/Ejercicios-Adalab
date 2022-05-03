import { useState, useEffect } from 'react';
import getApiData from '../services/contactsApi';
import Filters from './Filters';
import UserList from './UserList';

const App = () => {
  // variable de estado para todos los usuarios

  const [dataUsers, setDataUsers] = useState([]);
  // quiero que dataUsers se cargue una vez al abrir la página
  // necesito usar useEffect

  const [filterCountry, setFilterCountry] = useState('');

  useEffect(() => {
    // la api devuelve una promesa
    getApiData().then((dataClean) => {
      setDataUsers(dataClean);
    });
  }, []);

  const handleFilterCountry = (value) => {
    setFilterCountry(value);
  };

  return (
    <>
      <h1 className='title--big'> Directorio de personas</h1>

      <UserList users={dataUsers} />

      <Filters handleFilterCountry={handleFilterCountry}/>
    </>
  );
};

export default App;
