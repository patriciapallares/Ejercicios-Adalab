// variable de estado para todos los usuarios
// quiero que dataUsers se cargue una vez al abrir la página
// necesito usar useEffect
// la api devuelve una promesa

import { useState, useEffect } from 'react';
import getApiData from '../services/contactsApi';
import UserList from './UserList';
import Filters from './Filters';

function App() {
  const [dataUsers, setDataUsers] = useState([]);
  const [filterCountry, setFilterCountry] = useState('');

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataUsers(dataFromApi);
    });
  }, []);

  const handleFilterCountry = (value) => {
    setFilterCountry(value);
  };

  const userFilters = dataUsers.filter((user) => {
    return user.country === filterCountry;
  });
  return (
    <>
      <h1 className="title--big">Directorio de personas</h1>
      <div className="col2">
        <Filters handleFilterCountry={handleFilterCountry} />
        <UserList users={userFilters} />
      </div>
    </>
  );
}

export default App;
