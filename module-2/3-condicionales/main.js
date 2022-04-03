'use strict';
console.log('we good');

const text = document.querySelector('.text');
const name = 'Patricia';

if (name === 'Patricia') {
  console.log('Bienvenida Patricia');
} else {
  console.log('Lo siento pero el usuario que has introducido no está registrado');
};

///

// no se cumple vaya...

let number = 3;

if (number < 1) {
  console.log('El número es 0')
} else if (number < 0) {
  console.log('El número es negativo')
} else if (number > 0) {
  console.log('El número es positivo')
} else if (13 < (number + 2) <= 20) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
} else if (20 < number < 50) {
  console.log('El número es mayor que 20 pero menor que 50')
} else {
  console.log('el número no es 123123125')
}

///

// conversor edad humano a perro 

const year1 = 15;
const year2 = 9;
const year3 = 5;
const age = 3;


if (age < 1) {
  console.log('Tu perro es un bebé');
} else if (age === 1) {
  console.log(year1);
} else if (age === 2) {
  console.log(year1+year2);
} else if (age === 3) {
  console.log(year1+year2+year3);
} else if (age >= 4) {
  console.log(year1+year2+year3*(age-2))
}

///

const div = document.querySelector('.div');
const not = document.querySelector('.not');
const texto = document.querySelector('.text');

div.classList.add('error');

if (div.classList.contains('success')) {
  not.innerHTML = 'CORRECTO';
  texto.innerHTML = 'Los datos son correctos'
} else if (div.classList.contains('warning')) {
  not.innerHTML = 'AVISO';
  texto.innerHTML = 'Ande con cuidado'
} else if (div.classList.contains('error')) {
  not.innerHTML = 'ERROR';
  texto.innerHTML = 'Ha surgido un error'
}