"use strict";

//tenemos que hacer varibles como todos los elementos que intervienen
//cuando carga la página
const inputName = document.querySelector(".js_name");
const inputLastname = document.querySelector(".js_lastname");
const button = document.querySelector(".js_button");
const result = document.querySelector(".js_result");


//addEventListener para escuchar el botón, entre comillas ojo
//le añadimos el bloque código a ejecutar cuando ocurra el evento
//para comprobar que está yendo bien con console.log

button.addEventListener("click", () => {
  //Tenemos que crear variables donde recogemos el valor de lo que introduce la usuaria cuando sucede el evento (cuando ya tenemos el listener y la usuaria lo ejecuta)
  //Si usaremos las variables varias veces guay si no *alternativa*
  const name = inputName.value;
  const lastName = inputLastname.value;
  result.innerHTML = name + lastName;
  //*alternativa*
  //result.innerHTML = inputName.value + inputLastname.value;
});

//queremos que la segunda tarjeta se vaya rellenando según la usuaria escribe
//en este caso no hemos declarado .js_title y .js_last como variables

inputName.addEventListener("keyup", () => {
  document.querySelector(".js_title").innerHTML = inputName.value;
});

inputLastname.addEventListener("keyup", () => {
  document.querySelector(".js_last").innerHTML = inputLastname.value;
});

