// Dayana – 2.6 Objetos –

// Objeto: contenedor más complejo que una constante.

'use strict';

// objeto literal
// si una función está dentro de un objeto, esa función se llama método. En el siguiente ejemplo tenemos un objeto con valores texto, números, booleano.

const coche = {
  marca: 'Audi',
  modelos: 'Q8',
  year: 2022,
  color: 'negro',
  vendido: false,
  // función anónima:
  vender: function () {
    console.log('vendido');
  },
  plate: '5050abc'
};

// para acceder a cada una de las propiedades del objeto
console.log(coche.marca);
// console es un objeto de JS porque al hacer . me permite utilizar funciones de un objeto: métodos... 
// para acceder a un método:
console.log(coche.vender());

//cambiar un valor:
coche.year = 2021;
console.log(coche.year); // y console nos mostrará el último valor

// objeto sin propiedades
const coche2 = {}

// añadimos propiedades:
coche2.marca = 'mazda';
coche2.modelo = 'cx5'
// otra forma
coche2['year'] = 2020;

// cuál es la diferencia: que muchas veces no sabemos el nombre de la propiedad guardada en una variable. A ver, no sé

const propiedad = 'color';
coche2[propiedad] = 'rojo';

console.log(coche2);

// Ejercicio de Dayana

// tareas que tendríamos que hacer: (la X quiere decir hecho)
// X 1 Obtener los elementos del HTML (campo de entrada -> input, campos de salida -> tabla, el botón)
// 2 Escuchar el evento sobre el botón (crear cliente)
// 3 Crear la funcionalidad para pintar en la tabla

// los botones de tipo submit que tiene una acción natural de enviar la info al servidor por lo que no nos permite verlo en la página mucho tiempo. Usaríamos default nosequé.

// somos programadoras limpias, organizadas y glamurosas

//variables globales

const inputId = document.querySelector('.js_id');
const inputName = document.querySelector('.js_name');
const inputBusiness = document.querySelector('.js_business');
const inputContact = document.querySelector('.js_contact');
const inputButton = document.querySelector('.js_button');
const table = document.querySelector('.js_table');

//funciones
// para sacar los datos de una función y usarlos en otra: hacemos un return pero tenemos un problema, solo podemos devolver una línea de return. Crearemos un objeto que los "agrupe"
// esta es la versión "menos buena"
/*function getClientData()) {
    // comprobar que funciona:
    console.log(holis);
    // variables locales
    const name = inputName.value;
    const id = inputId.value;
    const business = inputBusiness.value;
    const contact = inputContact.value;
};*/

//pasaría a ser:
// función 1
function getClientData() {
  const clientData = {} //creamos el objeto vacío
    clietnData.name = inputName.value;
    clietnData.id = inputId.value;
    clietnData.business = inputBusiness.value;
    clietnData.contact = inputContact.value;
    return clientData;
};

// si declaramos las variables dentro de una funcion pasan a ser variables locales, por lo que solo existen en su entorno concreto

// función 2
function paintHTML(client){
  //paint está recibiendo el objeto de client o clientData
  table.innerHTML += `<tr>
  <td>${client.id}</td>
  <td>${client.name}</td>
  <td>${client.business}</td>
  <td>${client.contact}</td>
</tr>`
};

// lo que hacemos para ahorrarnos escribir mucho. Función handle (manejadora) con más funciones dentro:

// función 3, función manejadora del evento
function handleClick(event){
    // para evitar la acción natural del navegador:
    event.preventDefault();
    const client = getClientData(); // AQUÍ pasa de ser ClientData a solo client, y es el que le enviamos a paintHTML
    paintHTML(client);
};

//evento
// inputButton.addEventListener('click', getClientData); //para la versión "menos buena"
inputButton.addEventListener('click', handleClick);

// una función debería hacer solo una cosa y cuantas menos líneas mejor


