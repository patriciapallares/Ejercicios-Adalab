'use strict';

console.log('hello :D');

// he tenido que plantear el ejercicio con objetos para la primera parte y con objetos vacíos para la segunda parte porq no sabía hacerlo funcionar

// Objetos I

const text = document.querySelector('.js-text');

const adalaber = {}
adalaber.name = 'Susana';
adalaber.age = 34;
adalaber.role = 'periodista';
adalaber.run = () => `Estoy corriendo`;
adalaber.runAMarathon = (distance) => `Estoy corriendo un maratón de ${distance} kilómetros`;


console.log(adalaber.run());
console.log(adalaber.runAMarathon(50));


console.log('Mi nombre es ' + adalaber.name + ', tengo ' + adalaber.age + ' años y soy ' + adalaber.role + '.');
text.innerHTML = `Mi nombre es ${adalaber.name}, tengo ${adalaber.age} años y soy ${adalaber.role}.`


const adalaber2 = {
  name: 'Rocío',
  age: 25,
  role: 'actriz',
  }; 

console.log('Mi nombre es ' + adalaber2.name + ', tengo ' + adalaber2.age + ' años y soy ' + adalaber2.role + '.');

text.innerHTML += `<br><br> Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.role}.`
  

// Objetos II 

// Ejem Nota: esta mini lección tiene una importancia media y no es urgente. Si no la estudias ahora puedes hacerlo más adelante.
