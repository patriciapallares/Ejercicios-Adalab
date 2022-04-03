// Operadores

/* === igual estrictamente

!== diferente estrictamente

>= mayor o igual

<= menor o igual

// ojo con las mayúsculas

// Operadores lógicos

&& (and)
//se tienen que cumplir los dos para ejecutar

|| (or)
// se tiene que cumplir al menos uno de los dos para ejecutar
*/

// Condicionales
const name = 'yanelis';
// const name = 'dayana';


if (name === 'dayana') {
    console.log('bienvenida Dayana');
} else {
    console.log('bienvenida Yanelis');
}

// Condicionales + operadores lógicos
const profession = 'profe';

// si es profe y si se llama dayana O yanelis:
if (profession === 'profe') {

    if (name === 'dayana' || name === 'yanelis') {
        console.log ('bienvenida ' + name)
    }
} else {
    console.log('Eres una estudiante');
}

// de otra manera: dayana Y profe:
if (name === 'dayana' && profession === 'profe') {
    console.log ('bienvenida ' + name)
}

// Ejercicio Dayana

// Ejercicio Dayana. Agencia de viajes si se cumplen unas condiciones

//elemento (input) que nos dice desde donde
const whereFrom = document.querySelector('.js-whereFrom'); 

//elemento (input) que nos dice desde donde
const whereTo = document.querySelector('.js-whereTo'); 

//elemento (span) donde se pintará el resultado
const msj = document.querySelector('.js-result')

//el valor de ese input se consigue con clase.value¿?


    //primera condición
if (whereFrom.value === 'palma' && whereTo.value === 'barcelona') {
    msj.innerHTML = 'descuento 5%';

    //segunda condición
} else if (whereFrom.value === 'palma' && whereTo.value === 'madrid') {
    msj.innerHTML = 'descuento 10%';

    //tercera condición
} else if (whereFrom.value === 'palma' && whereTo.value === 'valencia') {
    msj.innerHTML = 'descuento 15%';
} else {
    msj.innerHTML = 'no hay descuento';
}

//otra manera, anidación
if (whereFrom.value === 'palma') {
    if (whereTo.value === 'barcelona') {
        msj.innerHTML = 'descuento 5%';
    }
    else if (whereTo.value === 'madrid') {
        msj.innerHTML = 'descuento 10%';
    }
    else if (whereTo.value === 'valencia') {
        msj.innerHTML = 'descuento 15%';
    }
    else {
  // en este caso porque whereTo es otro
    msj.innerHTML = 'no hay descuento';
    }
  } else {
  // en este caso porque whereFrom es otro
    msj.innerHTML = 'no hay descuento';
}
  
//switch es una opción pero no se ve tanto en JS
//operador ternario, lo veremos mucho en React
//en los ternarios no podemos anidar ifs o hacer if else

msj.innerHTML =
 whereFrom.value === 'palma' && whereTo.value === 'barcelona' 
    ? 'descuento 5%'
    : 'No hay descuento';

//añadir notificación cuando haya descuento
//tenemos un span con la clase .hidden que lo oculta
const notification = document.querySelector('.js-notification')

//añadiremos lo siguiente tras el mensaje de descuento (inner.HTML)
notification.classList.remove('hidden');

