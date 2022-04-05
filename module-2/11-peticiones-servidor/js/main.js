'use strict';
// Notas lección:

// bajarme la carpeta de la lección de hoy :S


// La app cliente hace solicitudes al servidor. La petición se realiza con fetch y recibimos unos datos json. Tenemos que saber la url o el método, cabecera o body what
// Este proceso tarda un tiempo (impercetible para nosotas)
//asincronía: poder seguir ejecutando código de js sin dependder de que estemos esperando a un servidor o no.

//vamos a escribirlo lol lol lol 
// function paintHTML() {
//   const img = document.querySelector('.js-dog');
//   img.src = info.message;
// }

// instalamos la extensión de chrome de JSON Formatter
// fetch: herramienta que nos permite solicitar datos a un servidor y que el servidor nos devuelva una respuesta
// La url entre comillas

// fetch('https://dog.ceo/api/breeds/image/random')
// // la respuesta la vamos a recibir a través de la promesa (función then). Siempre función
// .then((Response)=>Response.json())
// // la función json también es otra promesa :S
// .then((info)=>console.log(info));
// info = info;

// Esto va a ser siempre así 1. solicito 2. recojo la respuesta 3. hago con la respuesta lo que queramos

/*
flujo cuando carga la página
-----
  1.- Pedir los datos al servidor
  2.- Pintar los datos en el html
  3.- Escuchar evento sobre checkbox

flujo cuando ocurren las acciones de la user
-----
  1.- Recoger info cuando la user haga click en el checkbox
  2.- Modificar los datos que interesen
  3.- Repintar el html 
  4.- Volver a escuchar eventos
*/

// variable global para guardar las tareas que me de el servidor
let tasks = [];
const listTasks = document.querySelector('.js-list');

function getData(){
  fetch('http://api.igarrido.es/tasks.json')
  .then((response)=> response.json())
  .then((data)=>{
    tasks = data;
    console.log(tasks);
    // llamamos a la función cuando hemos recibido la petición
    renderList();
  })
};
getData();

// recorrer el array y crear un li por cada task
function renderList() {
  let html = "";
  for( let i = 0; i < tasks.length; i++){
    html += `<li>`;
    html += `<input type="checkbox" class="js-complete" value="${i}">`;
    html += tasks[i].name;
    html += `</li>`
  };
  listTasks.innerHTML = html;
  // llamamos a esta función cuando ya hemos recogido la info del server
  listenCheckbox();
};

// no podemos escuchar un evento sobre un array. podemos escuchar cada elemento del array. necesitamos usar un bucle

function handleClick(event){
  console.log('click en el checkbox');
  const inputValue = parseInt(event.currentTarget.value);
  console.log(inputValue);
  // cambiar el valor de la propiedad complete de cada objeto del array antes de seguir
  // repintar renderList()
  // escuchar de nuevo listenCheckbox()

}

function listenCheckbox(){
  const checkboxList = document.querySelectorAll('.js-complete');
  for(const oneCheckbox of checkboxList){
    oneCheckbox.addEventListener('click', handleClick)
  };
};

