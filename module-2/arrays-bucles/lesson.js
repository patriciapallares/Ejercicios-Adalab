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

///


// crear un array de objetos
// pintar en el HTML los elementos del array
// funcionalidad

const persons = [
  {
    name: 'Noelia',
    age: 21,
    city: 'Madrid',
  },
  {
    name: 'Prado',
    age: 23,
    city: 'Barcelona',
  },
  {
    name: 'Sandra',
    age: 25,
    city: 'Murcia',
  },
  {
    name: 'Satory',
    age: 24,
    city: 'Barcelona',
  },
];

// quiero añadir a cada persona en un <p> en la sección js-result

const sectionList = document.querySelector('.js-result');

for(let index = 0; index < persons.length; index++) {
  sectionList.innerHTML += `<p> El nombre es ${persons[index].name}, vive en ${persons[index].city} y tiene ${persons[index].age} años.</p>`
}

for(let personElement of persons){
  sectionList.innerHTML += `<p> Nombre: ${personElement.name} Ciudad: ${personElement.city} </p>`
}

// función que calcule el promedio de edad de persons
// recorrer el array
// recoger en un contenedor los valores
// list es el parámetro. Luego al hacer console.log ponemos el nombre de la función y entre paréntesis el nombre de nuestro array
function avgAgePerson(list) {
  // creamos la variable como contenedor. El valor tiene que ser 0 para que no nos de indefinido y sepa que es un number
    let acumAge = 0;
    for(let i = 0; i < list.length; i++) {
      acumAge += list[i].age;
    }
    const media = acumAge / list.length;
    return media;
}

console.log(avgAgePerson(persons));


// los gatitos se pueden meter en un array con los tres gatitos 
// luego tendremos que hacer una función para insertar la info en HTML
// usar la función render tal

