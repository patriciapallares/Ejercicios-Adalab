'use strict';

// 1.1 Inflar las notas - V

const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map((mark) => mark + 1);

console.log(inflatedMarks);

// 1.2 Saludar es de buena educación  -

const nombres = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const bienvenidaNombres = nombres.map((nombre) => 'Bienvenida ' + nombre);

//  console.log(bienvenidaNombres);

// 1.3 Gracias por confiar en nosotras - X

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

// for (const user of users) {
//   if (user.isPremium === true) {
//     const superWelcomeUsers = users.map(
//       (user) => 'Bienvenida. ' + user.name + '. Gracias por confiar en nosotros. '
//     );
//     console.log(superWelcomeUsers);
//   } else {
//     const welcomeUsers = users.map((user) => 'Bienvenida ' + user.name);
//     console.log(welcomeUsers);
//   }
// };

// 2.1 Solo los premium - V

const premiumUsers = users.filter((user) => user.isPremium === true);

console.log(premiumUsers);

// 2.2 Los pares pueden entrar - V

const pins = [2389, 2384, 2837, 5232, 8998];

const wantedPins = pins.filter((pin) => pin % 2 === 0);

console.log(wantedPins);

// 2.3 Los usuarios que pueden entrar - X

const users1 = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const users1Access = users1.filter((user) => user.pin % 2 === 0);

console.log(users1Access);

// 3.1 Encuentra con find, luego findIndex y usa splice - 

const pinError = users1.find((usersPin) => usersPin.pin === 5232);
console.log(pinError);

const deleteUser = users1.findIndex((usersPin) => usersPin.pin === 5232);
console.log(deleteUser); //devuelve posición 3

users1.splice(3, 1);
console.log(users1); 

// 4.1 La media de la carrera - V

const times = [56, 9, 45, 28, 35];

const result = times.reduce((acc, number) => acc + number, 0) / times.length;

console.log(result);

// 4.2 El ganador de la carrera 

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

