// crear card preview component

// cuántas páginas tenemos? 2. 1 para la landing y otra para la tarjeta. Mañana veremos rutas:
// Se puede sub-dividir tanto como queramos.
//App
//Landing
//Card
//Design
//Complete
//Share
//Card preview

// creamos los componentes

//Card.js / Design.js / Complete.js / Share.js

function Card(props) {
  return (
    <>
      {/* se trae todo el HTML de la página de la tarjeta a este componente, importa en App Card y en Card el resto de componentes*/}

    {/* De esta manera: ya tienen las nietas la info de la abu */}
      
    <Design dataCard={props.dataCard} handleInput={props.handleInput}/>
    <Fill dataCard={props.datacard} handleInput={props.handleInput}/>
    <Share dataCard={props.datacard} handleInput={props.handleInput} 
    // función especial para share
    handleClickCreateCard={props.handleClickCreateCard}/>

    </>
  );
}
export default Card;

// Desing.js
// que no se nos olvide importar Design a Card.js y añadir el componente
function Design() {

  // funcion propia de este componente
  const handleChangeInput = (ev) => {
    //función que recibe por props
    props.handleInput({
      value:ev.target.value,
      name:ev.target.name,
    })
  }

  return <fieldset>

    {/* para coger el valor de la paleta: */}
    <input 
    checked={props.dataCard.palette === tal}

    />
  </fieldset>;
}
export default Design;


// Fill.js
// que no se nos olvide importar Fill a Card.js y añadir el componente

function Fill(props){

  // copia y pega la función particular de Design
  return <fieldset>
    <input 
    value={props.dataCard.name(/job/phone...)}
    onclick={lo D:}
    />



  </fieldset>
}
export default Fill;


// Share.js
// que no se nos olvide importar Share a Card.js y añadir el componente

function Share(props){

  const handleClick=(ev)=>{
    ev.preventDefault();
    props.handleClickCreateCard();
  };

  return <fieldset>

  </fieldset>
}
export default Share;



//app.js:
return (
  // para pasarle a Card el objeto de dataCard
  // le pasamos por props la función sin () para que sea el componente el que la ejecute cuando quiera
  <Card 
  dataCard={dataCard} 
  handleInput={handleInput} 
  // esta función para el share
  handleClickCreateCard={handleClickCreateCard}

  />
);

// hay que hacer un pequeño ajuste en handleInput
const handleInput = (data) =>{
  const inputValue = data.value;
  const inputChanged = data.name;
  setDataCard...
}


// para el LINK

<a>

{props.apiData.cardUrl}

</a>