import '../styles/App.scss';
import { useState } from 'react';

/* Objeto data con toda la info que necesitamos
{
  title:
  synopsis;
  language:
}
*/

function App() {
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [age, setAge] = useState("all");
  

  const [data, setData] = useState({
    title: '',
    synopsis: '',
    language: '',
    age: '',
  });


  // queremos una función que pase lo que pase actualice el valor
  const handleInput = (ev) => {
    const newValue = ev.Target.value;
    // con la propiedad name sabemos de qué input estamos hablando
    const prop = ev.currentTarget.name;

    setData({
      // accedemos a la propiedad del objeto con corchetes
      ...data,
      [prop]: newValue,
    });
  };

  const handleChangeRadio = (ev) => {

    setAge(ev.currentTarget.value);

  }




  const handleInputTitle = (ev) => {
    const newValue = ev.currentTarget.value;
    // setData({
    //   title: newValue,
    //   synopsis: data.synopsis,
    //   language: data.language,
    //   age: data.age
    //   });

    // cambiame solamente lo nuevo
    setData({
      ...data,
      title: newValue,
    });
    console.log(newValue);
  };

  const handleInputSynopsis = (ev) => {
    const newValue = ev.currentTarget.value;
    setSynopsis(newValue);
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    setTitle('');
  };

  return (
    <div className='App page'>
      <header className='header'>
        <h1>Añadir películas</h1>
      </header>
      <main>
        <form action='' className='form'>
          <div className='col2 mb-1'>
            <label className='form__label' htmlFor='title'>
              Título:
            </label>
            <input
              type='text'
              placeholder='Ej: Die hard'
              className='form__input-text'
              name='title'
              id='title'
              value={data.title}
              onChange={handleInput}
            />
          </div>
          <div className='col2 mb-1'>
            <label htmlFor='synopsis'>Sinopsis:</label>
            <textarea
              placeholder='Érase una vez...'
              name='synopsis'
              id='synopsis'
              value={data.synopsis}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className='col2 mb-1'>
            <label htmlFor='language'>Idioma:</label>
            <select name='language' id='language'>
              <option disabled value=''>
                Escoge una opción
              </option>
              <option value='es'>Español</option>
              <option value='cat'>Catalán</option>
              <option value='gal'>Gallego</option>
              <option value='eus'>Euskera</option>
            </select>
          </div>
          <div className='col2'>
            <p>Clasificación por edad</p>
            <div>
              <label htmlFor='age-all'>
                <input type='radio' name='age' id='age-all' value="all" onChange={handleChangeRadio} checked={age === "all"} />
                Todas las edades
              </label>
              <label htmlFor='age-7'>
                <input type='radio' name='age' id='age-7' value="7" onChange={handleChangeRadio} checked={age === "7"}/>
                +7 años
              </label>
            </div>
          </div>
          <button onClick={handleReset}>Enviar</button>
          <button>Borrar</button>
        </form>
      </main>
    </div>
  );
}

export default App;

///

// necesitamos un objeto
// borramos lo de ayer

// creamos una variable de estado donde vamos a guardar la info en un objeto. Necesita la estructura del objeto que nos da el serividor
// verificar que lo de las compis y lo del server está relacionado

const [dataCard, setDataCard] = useState({
  palette: "1",
  name: "",
  job: "",
});

// en los inputs, pondremos el listener común
onChange={handleInput}

// creamos la función que va a ser la encargada de gestionar los datos y modificar el estado
// usamls ev para recoger cuál es el valor del input y cuál es el valor que cambió

const handleInput = (ev) => {
  // valor de la user:
  const inputValue = ev.target.value;
  // cómo saber qué input se modificó
  const inputChanged = ev.target.name;

  // FORMA LARGA:
  /*if (inputChanged === "name"){
    setDataCard(
      // deja dataCard igual, solo cambia name
      ...dataCard,
      name: inputValue,
    )
  } else if {//otros inputs}*/

  // FORMA MÁS CORTA Y PRO:
  setDataCard({
    // modifica la variable pero modifica [esta propiedad] añadiéndole: este valor
    ...dataCard,[inputChanged]: inputValue,
  })
};

//  Donde estaba "Nombre Completo" en HTML
// No recomienda que en la variable de estado, en el objeto, rellenemos "Nombre Completo" porq querremos verificar si está vacío o no más tarde
 {dataCard.name || "Nombre Completo"}

 // checked

 // en HTML: poner el listener en todos los radiobuttons, verificar que tengan value "1, 2 o 3"
onChange={handleInput}
// para controlar: tenemos que escribir una condición comparando el valor de la propiedad de palette (objeto) y el valor del input seleccionado? Si coinciden, será true y se seleccionará
// habrá que hacer esto 3 veces, cambiando el número según el valor del input
checked = {dataCard.palette === "1"}


// BOTÓN DE RESET

// lo ha dicho Gloria, no lo he pillado