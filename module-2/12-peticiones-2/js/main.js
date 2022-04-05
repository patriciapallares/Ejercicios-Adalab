'use strict';

console.log('desayuno');

// api.js

const user = {
  name: 'Maria',
  lastname: 'Ruiz',
};

const user2 = {
  palette: 'tal',
  name: 'tal',
  job: 'tal',
  phone: 'tal',
  email: 'tal',
  linkedin: 'tal',
  github: 'tal',
  photo: 'tal',
};

// fetch tiene dos parámentros, url y objeto
// validar que todo está bien y relleno antes de hacer el fetch


fetch('https://awesome-profile-cards.herokuapp.com/card/',{
  method:'POST',
  body:JSON.stringify(user),
  headers: {
    'content-type': 'application/json',
  }
})
  .then((response) => response.JSON())
  .then((cardData) => console.log(cardData));



// fetch con parámetros. buscador según lo que escribe la user
// dayana interpola el valor del input que está escribiendo la user en la url a la que hacemos la petición

const input = document.querySelector('.character');

function handleKey(params) {
  const character = input.value;
  let listChar = [];
  fetch(`url${character}`)
  .then((response) => response.json())
  //.then((data) => console.log(data.results)); /*ojo con lo de results o elegir bien lo que nos interesa*/

  // me he perdido entre paréntesis y llaves
  .then((data) => {{listChar = data.map((char) => 
  const newCha = {
    hair_color: char.hair_color,
    name: char.name,
  };
  return newCha
  )};
  console.log();
  });

};

input.addEventListener('keyup', handleKey)
