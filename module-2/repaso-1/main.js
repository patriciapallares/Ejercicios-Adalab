'use strict';
console.log('bondia');

// no hay que usar el AWSK

// hacer repo
// leer bien el enunciado
// hacer boceto del esquema de la página
// entender bien qué tiene que hacer cada cosa
// no perder el tiempo en la maquetación
// el código tiene que quedar sin console.logs ojo 
// llama a las funciones cosas chorra si así hace click mejor
// para cada addeventlistener tiene que haber solo un 'click' y una función


// 1. Elementos que necesitamos del HTML

const btn = document.querySelector('.js-btn');
const caritaSelect = document.querySelector('.js-select');
const caritaDiv = document.querySelector('.js-smiley');
const mainElement = document.querySelector('.js-main');


// 2. Funciones y eventos

// le damos un nombre a la función de número aleatorio y le decimos qué queremos que nos muestre de retorno.
// Iván propone parametrizarla para poder copiarpegar la función y usarla en el futuro tal
function generarNumeroAleatorio(max) {
  const numAleatorio = parseInt(Math.random()*max);
  return numAleatorio; 
};

// funciones porq why not (para dejar la handle más limpia)
function actualizarCarita() {
  // coger el value del select
  const caritaSeleccionada = caritaSelect.value;
  // actualizar el elemento con la carita
  caritaDiv.innerHTML = caritaSeleccionada;
}

function cambiarElFondo() {
  // generar número aleatorio (función externa más arriba) y condición de par o impar
  const numAlt = generarNumeroAleatorio(100);

  // console.log para comprobar qué número sale
  console.log(numAlt);
  // por rollos de especificidad, herencia y css hay que quitar la clase del otro
  if (numAlt%2 ===0) {
    mainElement.classList.remove('naranja');
    mainElement.classList.add('amarillo');
  } else {
    mainElement.classList.remove('amarillo');
    mainElement.classList.add('naranja');
  };

}

// classic eventListener
/*btn.addEventListener('click',(event) => {
  event.preventDefault();
  // hacemos esto siempre que tengamos un botón dentro de un formulario, para evitar que nos "envíe" la información
  console.log('click');
}); */

// Iván eventListener las funciones de los eventos empezarán por handle. Para eventos, el parámentro siempre será event
function handleClickBtn (event) {
  event.preventDefault();
  actualizarCarita();
  cambiarElFondo();
};

// 3. Código que se ejecuta cuando carga la página

// listener que ejecuta la función handler
btn.addEventListener ('click', handleClickBtn);
