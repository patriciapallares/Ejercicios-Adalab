'use strict';

// part one

console.log('holis?');

const paragraph = document.querySelector('.paragraph');
const password = document.querySelector('.password');
const mainDiv = document.querySelector('.js-main-div');
const list = document.querySelector('.list');
const btn1 = document.querySelector('.js-btn1');
const btn2 = document.querySelector('.js-btn2');

password.innerHTML = '*******'
mainDiv.innerHTML += '<h2>Lorem Ipsum</h2>';
mainDiv.innerHTML += '<img src="http://via.placeholder.com/350x150" alt="fotillo" title="fotillo">';
mainDiv.innerHTML += '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, optio! Eveniet perferendis nostrum asperiores ullam fugit temporibus alias facere. Repellendus, nemo? Accusamus dolore corporis omnis accusantium in deserunt odio temporibus.</p>';
list.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';
btn1.classList.add('green');
btn2.classList.add('red');

// part two

const sumA = 2+2;
const sumB = 3+3;

console.log(sumA+sumB);

const name = "Paquita";
const surname = " Salas";
console.log(name + surname); // esto pinta en consola 'Paquita Salas'
const price = 10;
const shipping = 3;
console.log(price + shipping); // esto pinta en consola 13

const kiwis = 2;
const kiwis$ = 5;
const peras = 3;
const peras$ = 2;
const uvas = 0.5;
const uvas$ = 4;
console.log(kiwis*kiwis$+peras*peras$+uvas*uvas$);

const everyone = 'Everyone: '
const dinner = 128;
const sake = 2;
const people = 9
const ana = 'Ana: '
console.log(everyone);
console.log((dinner-sake)/people);
console.log(ana)
console.log(((dinner-sake)/people)+sake);

const years = 27;
const days = 365;
const hours = 24;
console.log(hours*days*years);

const myname = 'Aaron';
console.log(`Hola ${myname}, encantada de conocerte`);

// no funciona
const herName = 'Leticia Fernández Sánchez';
console.log(herName.length);

console.log(2 + 3 + "5");
console.log("2" + 3 + 5);
console.log(123);
console.log("123");
