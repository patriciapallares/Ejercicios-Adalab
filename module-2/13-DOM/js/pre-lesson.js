'use strict';

console.log('desayuno');

const item1 = document.querySelector(".item--1");
// Devuelve una representación del elemento como HTML
console.log(item1); 
// Devuelve una representación del elemento como objeto
console.dir(item1);

const mother = item1.parentElement;

// Devuelve "La madre de nuestro elemento es un <ul> y tiene la clase .items"
console.log(
  `La madre de nuestro elemento es un <${mother.nodeName.toLowerCase()}> y tiene la clase .${
    mother.className
  }`
);


// Creamos un elemento nuevo, un <li>
const newItem = document.createElement("li");
// Devuelve "<li></li>"
console.log(newItem);

// Ahora creamos algo de contenido
const newContent = document.createTextNode("Item nuevo");

// Y se lo añadimos a nuestro <li>
newItem.appendChild(newContent);
console.log(newItem); // Devuelve "<li>Item nuevo</li>"


const items = document.querySelector(".items");
items.appendChild(newItem);

// borra todos los lis de items
// items.remove();

const itemList = document.querySelector(".items");
const item2 = itemList.querySelector(".item--2");
itemList.removeChild(item2);
// Elimina el elemento con clase .item--2 que es descendiente de .items

// ejercicios 13.2 pendientes

// ni idea de qué dice atributos data ejercicios 13.3 pendiente