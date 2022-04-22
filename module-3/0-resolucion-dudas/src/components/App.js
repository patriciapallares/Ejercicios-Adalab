import '../styles/App.scss';
import { useState } from "react";

function App() {

  // revisar código sesión

  const [numberA, setNumberA] = useState(0)
  const [numberB, setNumberB] = useState(0)


  const handleChangeNumberA = (ev) => {
    const nuevoValorA = ev.currentTarget.value

    setNumberA(nuevoValorA);
  }

  const handleChangeNumberB = (ev) => {
    const nuevoValorB = ev.currentTarget.value

    setNumberB(nuevoValorB);
  }

  return (
    <div className="App">
      <form action="">
        <input onChange={handleChangeNumberA} value={numberA} type="number" name="numberA" id="numberA"/>
        <input onChange={handleChangeNumberB} value={numberB} type="number" name="numberB" id="numberB"/>
        <button>Calcular</button>
        <p></p>
      </form>
    </div>
  );
}

export default App;