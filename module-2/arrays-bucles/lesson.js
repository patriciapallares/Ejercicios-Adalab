'use strict';
// arrays: listado de elementos en el que los elementos están asociados a un índice numérico. Los elementos pueden ser string, número u objeto. Siempre empieza en la posición 0, por lo que una lista de 7 tiene 0-6 elementos.

// en esta estructura tenemos definido nuestro listado de valores
const nameList = ['lola','pepe','zeus','toby'];

console.log(nameList[0], nameList[3]);

// array vacío
const listPets = [];
// añadir valores:
listPets[0] = 'lola';
listPets[1] = 'pepe'
console.log(listPets[0], listPets[3]);

// casi siempre los arrays van a ir acompañados de bucles. Nos ahorran hacer cantidad de código multiple veces

const pets = document.querySelector('.js-pets');

//añadir mascotas al HTML

// paréntesis = valores
// 1. punto de partida sobre la que queremos salir. variable donde asignamos el punto de partida. i es el nombre que asignamos a la variable por costumbre
// 2. El bucle se ejecutará mientras se cumpla la condición que marquemos. Ejecuta mientras la posición sea menor que la longitud del array: namelist.length
// 3. i++ ---> i = i+1
// llaves = lo que quiero repetir


// for
for(let i = 0; i < nameList.length; i++ ){
  pets.innerHTML += `<li> ${nameList[i]} </li>`
}

// for of
// vamos a guardar cada elemento del array
for(let pet of nameList){
  pets.innerHTML += `<li>${pet}</li>`
}

