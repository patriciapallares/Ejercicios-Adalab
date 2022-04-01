'use strict';

console.log('working');

// Arrays
// 1. Películas
// no sé mostrar en console log la función
function workWithMovies() {
  const favFilms = [
    'Spirit',
    'Nemo',
    'Mulan',
  ];
  favFilms [3] = 'Brave';
  favFilms [1] = 'Titanic';
  favFilms [2] = 'Sleeping Beauty';
}
console.log(workWithMovies());

// Bucles

// 1. Voy por la vuelta X

for (let i = 1; i < 11; i++) {
  console.log("Voy por la vuelta " + i);
}

// 2. Contando de dos en dos
// no sé mostrar en console log el valor final acumulado?

for (let acc = 0; acc < 10;) {
  acc = acc + 2;

  console.log("El valor es " + acc);
}


// 3. Previsión para ver la Luna del cazador
// acciones: 1. declarar el año en que se vio la luna 2. realizar una iteración donde i será 2017, se cumplirá mientras i sea menor a 2062 (2017+15*3) y añadiremos 3 a i en cada bucle. Vamos a ver:
// me ha salido pero creo que no es muy así

for (let moonYear = 2020; moonYear < 2065; moonYear = moonYear+3) {
  console.log('Habrá Luna del cazador el año' + moonYear);
};

// 4. La media

const numbers = []

// 1. A story of adalabers

const adalaber = [
  {
    name: 'María',
    age: 31,
    role: 'diseñadora',
  },
  {
    name: 'Lucía',
    age: 31,
    role: 'ingeniera química',
  },
  {
    name: 'Susana',
    age: 34,
    role: 'periodista'
  },
  {
    name: 'Rocío',
    age: 25,
    role: 'actriz',
  },
  {
    name: 'Inmaculada',
    age: 21,
    role: 'diseñadora',
  },
]

// función que devuelve el número de adalabers en el listado

function countAdalabers(params) {
  console.log('Número de adalabers: ' + params.length);
}

countAdalabers(adalaber);

// función que devuelve la media de edad del listado

function averageAge(params) {
  let avgAge=0;
  for(let i = 0; i < params.length; i++) {
    avgAge += params[i].age;
  }
  const media = avgAge / params.length;
  return console.log( 'Edad media: ' + media);
}

averageAge(adalaber)

// función que devuelve el nombre de la adalaber más joven

 function theYoungest() {
   params.age.sort(function(a, b) {
    retun a.age - b.age;
}

// función que devuelve el núero de adalabers que son diseñadoras

function countDesigners() {
  
}
