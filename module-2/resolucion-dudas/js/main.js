'use strict';

// console.log('desayuno');

// // array:
// const list = [4,5,6,9,7];


// // primero pienso qué es lo que tengo que hacer
// // queremos recorrer el array elemento a elemento

// // for (let index = 0; index < list.length; index++) {
//   //   // opción 1
//   //   /* suma = suma + list[index]; */
//   //   // opción 2
//   //   suma += list[index];
//   // };
  
//   // const media = suma/list.length;
  
//   const list2 = [3,4,9,7,8,9,7];
  
//   function average(list){
//   let suma = 0;
//   for (let index = 0; index < list.length; index++) {
//     suma += list[index];
//   };
//   const media = suma/list.length;
//   return media
// };

// const mediaList = average(list2);

// console.log(mediaList);

// /// 

// // 1. traer los elementos 2. listener del evento 3. función manejadora de ese evento

// const button = document.querySelector('.js-button');
// // selectorAll nos trae todos los elementos con la misma clase
// const inputList = document.querySelectorAll('js-input');
// const msg = document.querySelector('.js-msg');


// function handleClick(event) {
//   event.preventDefault();
//   console.log('leclick?');

//   for (let index = 0; index < list.length; index++) {
//     suma += list[index];
//   }; // (Probar a plantear)


//   for (const itemInput of inputList) {
//     console.log('hola?');
//     msg.innerHTML += `A mí también me gustó ${itemInput.value}`;
//   };

// }

// button.addEventListener('click', handleClick);


const items = [
  "Ada",
  1815,
  ['informática', 'matemática', 'escritora'],
  {
    mother: 'Anna',
    father: 'Byron'
  },
];

for (let i = 0; i < items.length; i++) {
  const valor = items[i];
  const tipo = typeof items[i];
  
 console.log(`el dato ${valor} está en la posición ${i} y es de tipo ${tipo}`);
}


///


const userData = {
  email: "info@email.com",
  password: "mi-contraseña-super-secreta",
};


const email = document.querySelector('.js-email');
const password = document.querySelector('.js-password');


// esto nos funciona independientemente de la cantidad de valores que tenga un objeto
for (let item in userData) {
  const inputElement = document.querySelector(`.js-${item}`);
  inputElement.value = userData[item];
}


///

// fetch

const list = document.querySelector('.js-list');

function paintHTML(data){
  for (const item of data) {
    const li = `Nombre: ${data.name}`;
    list.innerHTML += li;
  }
  
}

fetch("url")
.then(response => response.json());
,then(data=>{
  console.log(data.results);
  paintHTML(data.results)

})
