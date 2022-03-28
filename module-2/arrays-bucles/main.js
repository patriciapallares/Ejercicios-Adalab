'use strict';

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
