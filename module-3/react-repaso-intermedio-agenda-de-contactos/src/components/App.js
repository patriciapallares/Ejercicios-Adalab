import '../styles/App.scss';

// hemos guardado los datos en un fichero tipo json. para acceder a ellos:

import contactList from '../data/contacts.json';
import { useState } from 'react';
// cuando dependiendo del valor debemos renderizar la página, significa que necesitamos una variable de estado
// vamos a necesitar:
// para el input buscador
// para el listado de contactos
// para el resultado de la búsqueda

function App() {
  // variables de estado para el listado de contactos
  const [data, setData] = useState(contactList);
  // variable de estado para la búsqueda
  const [search, setSearch] = useState('');
  // variable de estado para el nuevo contacto
  const [newContact, setNewContact] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
  });

  const handleClick = (ev) => {
    // aquí sí sería un push. vorem...
    // al tratarse de un array, no hace falta las llaves de objeto/elemento
    ev.preventDefault();
    setData([...data, newContact]);
    setNewContact({
      name: '',
      lastname: '',
      phone: '',
      email: '',
    });
  };

  // modificar la propiedad del valor del objeto que corresponda
  const handleNewContact = (ev) => {
    setNewContact({
      // algo de que los id y los nombres son iguales para ponerlo en corchetes y guardarlo donde corresponde
      ...newContact,
      [ev.target.id]: ev.target.value,
    });
  };

  // funcion encargada de modificar la variable de estado de search
  const handleSearch = (ev) => {
    // para este caso da igual si es target o currenttarget
    setSearch(ev.target.value);
  };

  // quiero pintar el listado en el html
  // cada vez que queremos pintar elementos de una lista: map
  // por cada contacto vamos a crear un li

  // vamos a hacer filter antes que map
  // en el filter añadimos or || para que busque también por lastname

  const htmlData = data
    .filter(
      (oneContact) =>
        oneContact.name.toLowerCase().includes(search) ||
        oneContact.lastname.toLowerCase().includes(search)
    )
    .map((contact, i) => {
      return (
        <li key={i} className='contact__item'>
          <p className='contact__name'>
            <label className='contact__label'>Nombre:</label>
            {contact.name} {contact.lastname}
          </p>
          <p className='contact__phone'>
            <label className='contact__label'>Teléfono:</label>
            <a
              href={`tel:${contact.phone}`}
              title='Pulsa aquí para llamar a Lola'
            >
              {contact.phone}
            </a>
          </p>
          <p className='contact__mail'>
            <label className='contact__label'>Email:</label>
            <a
              href={`mailto: ${contact.email}`}
              title='Pulsa aquí para escribir a Lola'
            >
              {contact.email}
            </a>
          </p>
        </li>
      );
    });

  console.log(contactList);
  return (
    <div className='page'>
      {/* header */}
      <header className='header'>
        <h1 className='header__title'>Mi agenda de contactos</h1>
        <form>
          <input
            className='header__search'
            autoComplete='off'
            type='search'
            name='search'
            value={search}
            placeholder='Filtrar contactos por nombre'
            onChange={handleSearch}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className='contact__list'>{htmlData}</ul>

        {/* new contact */}
        <form className='new-contact__form'>
          <h2 className='new-contact__title'>Añade un nuevo contacto</h2>
          <input
            className='new-contact__input'
            type='text'
            name='name'
            id='name'
            placeholder='Nombre'
            onChange={handleNewContact}
            value={newContact.name}
          />
          <input
            className='new-contact__input'
            type='text'
            name='lastname'
            id='lastname'
            placeholder='Apellidos'
            onChange={handleNewContact}
            value={newContact.lastname}
          />
          <input
            className='new-contact__input'
            type='phone'
            name='phone'
            id='phone'
            placeholder='Teléfono'
            onChange={handleNewContact}
            value={newContact.phone}
          />
          <input
            className='new-contact__input'
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            onChange={handleNewContact}
            value={newContact.email}
          />
          <input
            onClick={handleClick}
            className='new-contact__btn'
            type='submit'
            value='Añadir'
          />
        </form>
      </main>
    </div>
  );
}

export default App;
