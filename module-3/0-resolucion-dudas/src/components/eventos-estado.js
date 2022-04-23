import '../styles/App.scss';
import { useState } from 'react';
// revisar código sesión

function App() {
  const handleInput = (ev) => {
    console.log(ev.currentTarget.value);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const [classDark, setClassDark] = useState('invert-color');

  const handleDarkButton = (ev) => {
    ev.preventDefault();

    if (classDark === 'invert-color') {
      setClassDark('ligth');
    } else {
      setClassDark('invert-color');
    }
  };

  const renderDarkModeText = () => {
    if (classDark === 'invert-color') {
      return `Tienes activado el dark mode`;
    }
  };

  const [hidden, setHidden] = useState('hidden')
  
  const [btnHidden, setBtnHidden] = useState('')
  const handleDivButton = () => {
    console.log('soy un click');
    if (hidden === 'hidden'){
      setHidden('');
    } else {
      setHidden('hidden')
    };

    if (hidden === 'hidden'){
      setBtnHidden('hidden')
    } else {
      setBtnHidden('')
    }
  };



  return (
    <div className={`juan ${classDark}`}>
      <button className={btnHidden} onClick={handleDivButton}>Abrir</button>
      <div className={hidden}><p>SOY UN DIV OCULTO</p>
      <button onClick={handleDivButton}>Cerrar</button>
      </div>
      <form action='' onSubmit={handleForm}>
        <input onChange={handleInput} type='text' />
      </form>

      <div className=''>
        <button onClick={handleDarkButton}>Des/activar el dark mode</button>
        <p>{renderDarkModeText()}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          facilis et eum ipsa non. Libero, error pariatur tempora dignissimos,
          laborum quae eius, inventore repudiandae incidunt atque sequi ipsam
          consectetur in!
        </p>
      </div>
    </div>
  );
}

export default App;
