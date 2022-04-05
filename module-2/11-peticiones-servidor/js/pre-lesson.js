'use strict';
// Notas pre-lección:

// Pintar esto en el index.html para que arranque:

/*

      <button class="js-emoji">Emoji!!!</button>
      <p class="js-result"></p>


      <button class="js-num">Número!!!</button>
      <p class="js-result-num"></p>

      <button class="js-dog">Perretes!!!</button>
      <img />

      <br>
      <br>
      <button class="js-btn">Breeds</button>
      
      <img class="dog1" src="" alt="Dog" />
      <img class="dog2" src="" alt="Dog" />

*/


// Las peticiones AJAX nos permiten acceder y manipular datos en el servidor, pero iniciando el proceso en el frontend.

// Fetch:  una nueva API del navegador que funciona gracias a una forma moderna de manejar la asincronía de JavaScript llamada Promesas.

/*
fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.body.innerHTML = data.result;
  });
*/

// lo mismo pero con arrow: 

/*
fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
  .then((response) => response.json())
  .then((data) => (document.body.innerHTML = data.result)); 
*/

// Una promesa se llama así porque mientras se ejecuta el fetch (se hace la petición al servidor, responde y nos llega la respuesta) podemos trabajar con la respuesta en otra variable response donde 'nos prometen' que estará la respuesta del servidor cuando llegue

// NOTA: es MUY IMPORTANTE no olvidar hacer un return al final de la función que pasamos a then para encadenar con el siguiente then. En el último no hace falta porque ya no hay más then a quien tener que pasarlo.

// Ejemplo

function getEmoji() {
  fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result').innerHTML = data.result;
    });
    console.log('saco un emoji al pulsar el botón');
}
document.querySelector('.js-emoji').addEventListener('click', getEmoji);

// 1.1 Ejercicio:

function getNum() {
  fetch('https://api.rand.fun/number/integer')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result-num').innerHTML = data.result;
    });
    console.log('saco un número al pulsar el botón');
}
document.querySelector('.js-num').addEventListener('click', getNum);

// Formato JSON: -Las claves siempre van entre comillas {"userName": "Paco"} -Los valores permitidos son: string, number, boolean, array, null y json object

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
    console.log('saco un perrete al pulsar el botón');
}
const perretes = document.querySelector('.js-dog');
perretes.addEventListener('click', getDogImage);

// Pendiente 2.1 2.2 Ejercicio:

// Peticiones en paralelo

// Peticiones que se ejecutan a la vez para poder realizar alguna acción cuando todas se han completado.

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

function getBreedImages() {
  const promises = [createPromise(), createPromise()];
  Promise.all(promises).then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      const img = document.querySelector('.dog' + (i + 1));
      img.src = responses[i].message;
    }
  });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedImages);

// Pendiente 3.1 Ejercicio:

// Gestión de errores

// No me ha dado leer la lección 