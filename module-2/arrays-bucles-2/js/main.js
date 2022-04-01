'use strict';

// Array anidados. Vendrán de API, base de datos. 

const listPersons = [
  ['Pedro', 'Pérez'],
  ['Maricarmen', 'Ruiz'],
  ['Almudena', 'Sánchez']
]

// para recorrer un array anidado necesitaremos un for anidado. Primer for: para recorrer el array general. Segundo for: para recorrer cada array específico.

for(const person of listPersons) {
  // console.log(person);
  /* for(const name of person) {
    console.log(name);
  } */

  // queremos que pinte solo los nombres: hemos tenido que elegir el for classic y no el for of porque estamos buscando la posición 0 y sin embargo, el for of nos recogía todo el array, sin poder especificar la posición.
  for(let i = 0; i < person.length; i++){
    if (i === 0) {
      console.log(person[i]);
    }
  }
}

// misma cosa pero corto
for (let index = 0; index < listPersons.length; index++) {
  console.log(listPersons[index][0]);
}