'use strict';

//obtener los datos HTML-DOM (ul, input)
const listPalettes = document.querySelector(".js-list-palettes"); 
const urlServer = "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palette.json"; 

// info array palettes
let palettes = [
    {
    "id": "1-93-po",
    "name": "Tardis Blue",
    "from": "Doctor Who",
    "colors": [
      "003A6E",
      "9B9A99",
      "000000",
      "FFFFFF",
      "6F4500"
    ]
  },
  {
    "id": "2-54-ha",
    "name": "Millenium Falcon",
    "from": "Star Wars",
    "colors": [
      "B6B6BE",
      "D8D7D4",
      "413A31",
      "746C66",
      "A32D2C"
    ]
  },
  {
    "id": "3-02-ma",
    "name": "Battlestar Galactica",
    "from": "Battlestar Galactica",
    "colors": [
      "080F19",
      "1B2E3F",
      "364269",
      "3D6973",
      "E5635F"
    ]
  },
  {
    "id": "4-87-mm",
    "name": "Serenity",
    "from": "Firefly",
    "colors": [
      "3C5375",
      "7285A6",
      "96AABF",
      "F1DB7E",
      "0C0C0C"
    ]
  },
  {
    "id": "5-44-sw",
    "name": "Nostromo",
    "from": "Alien",
    "colors": [
      "08070C",
      "F4F3F5",
      "121828",
      "464F75",
      "9ABEF2"
    ]
  }]; 

function handleClicPalette(event){
    console.log("paletas")
    console.log(event.currentTarget.id); 
}

function listenersPalletes(){
 //listener de las paletas
 const liPalettes= document.querySelectorAll(".js-palette"); 
 for (const item of liPalettes) {
     item.addEventListener("click", handleClicPalette); 
 }
}

function paintPalettes(){
    //Paint/renderizar HTML
    let html = ''; 

    for (const paletteItem of palettes) {
        html+= `<li class ="palettes js-palette" id=${paletteItem.id}>`;
        html+=`<h2>${paletteItem.name}</h2>`; 
        html+=`<div class="palette__colors">`;
         for (const palleteColor of paletteItem.colors) {
             html+=`<div class="palette__color" style="background-color:#${palleteColor}"></div>`;
         }
         html+=`</div>`;
         html+=`</li>`;
    }
    listPalettes.innerHTML = html;
    listenersPalletes(); 
}


paintPalettes();

//fetch palettes form server
/*fetch(urlServer)
.then(response => response.json())
.then(data => {
    //console.log(data.palettes); 
    //Save palettes info
    palettes = data.palettes; 
    //Paint/renderizar HTML
    paintPalettes(); 
}); */




