console.log("desayuno");

// estos datos suelen ser externos y extensos. Probablemente nosotras tendremos que hacer filtros, estadísticas, etc.

// estos métodos reciben como parámetro una función. Por eso lo de métodos funcionales.

const adalabers = [
  {
    name: "julia",
    city: "barcelona",
    address: {
      country: "España",
      zp: 2080,
    },
  },
  {
    name: "marina",
    city: "murcia",
    address: {
      country: "EEUU",
      zp: 1000,
    },
  },
  {
    name: "marcela",
    city: "barcelona",
    address: {
      country: "Italia",
      zp: 4500,
    },
  },
];

// los métodos que más vamos a utilizar son filter y findIndex

// map recibe como parámetro una función (de tipo arrow)

// ada --> cada uno de los objetos del array

const newAdalabers = adalabers.map((ada) /*nombre que yo quiera */ => {
  const newAda = {
    name: ada.name,
    city: ada.city,
    // queremos incluir el pais
    country: ada.address.country,
  };
  return newAda;
  /* lo que queremos que nos pinte, para que funcione necesitamos const en un return */
});

console.log(newAdalabers);

// ejemplo rapidito (iva a todos los elementos). n es la representación de los elementos

const number = [1, 2, 3, 4, 5, 6];
const newNumber = number.map((n) => n * 1.21);

console.log(newNumber);

// Pregunta de Prado. Poner la función fuera y la llamamos. callback: función ejecutada por otra función

// si tiene llaves hace falta return.

const numbre = [1, 2, 3, 4, 5, 6];
function xyz(n) {
  return n * 1.21;
}
const newNumbre = numbre.map(xyz);
console.log(newNumbre);

// filter: devuelve los elementos del array que cumplen con la condición que yo les diga. Nos crea un nuevo array

// devuelve solo las adalabers que viven en barcelona:

// qué pasa si el valor nos lo da la usuaria a través de un input y ha escrito Barcelona

// tenemos que empezar a implementar .toLowerCase() tanto en nuestro valor como en el de la usuaria

// queremos añadir un filtro por nombre

const cityInput = "Barcelona";
const nameInput = "marcela";

const dataFiltered = adalabers
  .filter(
    (person) =>
      person.city.toLowerCase() === cityInput.toLowerCase() /*'barcelona'*/
  )
  .filter((person) => person.name === nameInput);

console.log(dataFiltered);

// cómo funciona el filter por detrás: recorre el array de adalabers con un for, verifica primero si la ciudad es barcelona y si sí es, lo añade a un nuevo array.

/*
const dataFilteredFor = [];

for( const ada of adalabers){
  if ( ada.city.toLowerCase() === cityInput.toLowerCase()){
    dataFilteredFor.push(ada);
  };
};

console.log(dataFilteredFor); */

// indexOf solo nos sirve para strings, numeros y booleanos, no objetos o funciones

// findIndex. devuelve la posición del elemento recibe como parámetro una función de tipo callback o arrow. si lo encuentra i >= 0, si no está, i = -1

const indexPerson = adalabers.findIndex(
  /*cada uno de los elementos de mi array*/ (pepino) => pepino.name === "julia"
);

console.log(indexPerson);

// find devuelve todo el contenido del primer elemento que cumple una condición

const findPerson = adalabers.find((adalaber) => adalaber.address.zip === 1000);

console.log(findPerson); //undefined??

///

// que cada vez que la usuaria pulse una tecla se verifique que el valor que ha escrito en el input coincide con alguna letra de alguna de las adalabers según se vayan escribiendo. Tareas pequeñitas
// 1. X seleccionar el input del html
// 2. X escuchar cuando la usuaria teclea - keyup
// 3. X recoger los datos que me da la usuaria a través del input
// 4.  comparar con la lista - filter
// 5.  pintar en html la respuesta

const inputElement = document.querySelector(".js-name");
const ulElement = document.querySelector(".js-list");


// pinta en el HTML la lista filtrada
function paintList(list){
  // para que se borre el resto de búsquedas previas y no se acumulen
  ulElement.innerHTML = '';
  for( const li of list){
    ulElement.innerHTML += `<li> ${li.name} </li>`;
  }
}

function handleInput() {
  const inputValue = inputElement.value;
  const listFiltered = adalabers.filter((persona) =>
    persona.name.toLowerCase().includes(inputValue)
  );
  // tenemos variables locales, vorem.
  paintList(listFiltered);
}

inputElement.addEventListener(
  "keyup",
  /* función que ejecuta el navegador cuando se ejecuta la acción*/ handleInput
);
