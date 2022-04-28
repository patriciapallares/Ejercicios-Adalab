// los componentes, lo suyo es que sean lo más pequeños posible
// coponente del card preview
// hacer el fetch cuanto antes

// crear carpeta que se llame services
// dentro fichero.js con la función que nos ejecute el fetch
// esto no es un componente de React

// encargada de recibir los datos que hemos guardado y hacer la petición al servidor de la forma que corresponda

// el servidor necesita el objeto con todos los campos que ha rellenado la user

const dataApi = () => {
  // la función retorna un fetch
  return fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

export default dataApi;

// import de dataApi from proyecto.js

// hay que crear una variable de estado para guardar la respuesta del servidor (la url generada o un error de que faltan datos o algo??)
// la respuesta que nos da el servidor es un objeto
const [apiData, setApiData] = useState({})

// vamos al botón de crear tarjeta y le añadimos un evento click handleClickCreateCard
// función encargada de hacer el fetch y pintar la URL

const handleClickCreateCard = (ev) => {
  ev.preventDefault()
  // no sé que es nuestro dataCard
  // habrá que poner una URL en la img
  dataApi(dataCard).then((info) => {
    setApiData(info)
  })
}

// buscamos la etiqueta <a> donde iría la URL {apiData.success || URL}


///


// componentes:

// creamos cardpreview.js
function cardPreview(props) {
  return (
    "Pegar HTML"
    // pasarle los datos por props
    // podemos pasar los datos uno a uno o como objeto
    // {props.data.name || 'Nombre Apellidos'}
  )
}

export default cardPreview;

// import del componente from ruta relativa

// añadir a app.js <Componente/>
// podemos hacer tantas categorías tengamos:
//<Componente name={dataCard.name}/>

// o podemos hacer:
// <Componente data={dataCard}/>