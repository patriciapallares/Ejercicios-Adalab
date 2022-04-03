'use strict';
console.log('morning!');

const btn = document.querySelector('.js-btn');
const msj = document.querySelector('.js-msj');

btn.addEventListener('click', () => {
  msj.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
});

///

const input2 = document.querySelector('.js-input2');
const btn2 = document.querySelector('.js-btn2');

btn2.addEventListener('click', () => {
  const inputValue = input2.value;
  console.log('Hola ' + inputValue);});


///

const btn3 = document.querySelector('.js-btn3');

btn3.addEventListener('click', () => {
  console.log('check?');
  btn3.classList.toggle('green');
})

///

const here = document.querySelector('.js-here');
const thas = document.querySelector('.js-thas');
const thus = document.querySelector('.js-thus');

thas.addEventListener('mouseovero', () => {
  console.log('hello?');
  thus.innerHTML += `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam vero id animi impedit fugit illo nam ducimus, sint voluptatibus facere consequuntur? Repellat dolores commodi earum provident obcaecati quibusdam assumenda!`;
});

///

const strawberry = document.querySelector(".fruit-strawberry");
const banana = document.querySelector(".fruit-banana");
const kiwi = document.querySelector(".fruit-kiwi");

strawberry.addEventListener("click", ()=>{
  // Asignamos a una constante el elemento
  // sobre el que pusimos el `listener`
  // para trabajar cómodamente con él
  const selectedFruit = event.currentTarget;
  selectedFruit.classList.toggle("fruit--selected");
});
banana.addEventListener("click", ()=>{
  const selectedFruit = event.currentTarget;
  selectedFruit.classList.toggle("fruit--selected");
});
kiwi.addEventListener("click", ()=>{
  const selectedFruit = event.currentTarget;
  selectedFruit.classList.toggle("fruit--selected");
});

/// 

const subTitle = document.querySelector('.js-subTitle');
const writeHere = document.querySelector('.js-writeHere');

writeHere.addEventListener('keyup',()=>{
  document.querySelector(".js-subTitle").innerHTML = writeHere.value;
});

///
// no sé hacerlo

const btnFlm = document.querySelector('.js-btn-flm');
const list = document.querySelector('.js-list');


const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";


btnFlm.addEventListener("click", ()=>{
list.innerHTML = `<li> ${ inception } </li>
<li> ${ theButterFlyEffect } </li>
<li> ${ eternalSunshineOfTheSM } </li>
<li> ${ blueVelvet } </li>
<li> ${ split } </li>`
});

// inception.addEventListener("click", ()=>{
//   const selectedFilm = event.currentTarget;
//   selectedFilm.classList.toggle("fruit--selected");
// });
