
const list = ['Ana', 'Patricia', 'Celia', 'Rosa', 'Carmen'];
const list2 = ['Lucía', 'Lorena'];

// length no es una función. Es una propiedad del array.

console.log(list.length);

// Push !! - añadir un elemento al final del array. Sirve para cadena de valores, números y objetos.

list.push('Paula');
console.log(list);

// Unshift - añadir un elemento al inicio del array

list.unshift('Alejandra');
console.log(list);

// IndexOf !! (negativo = no existe). índice de un elemento. Sirve para comprobar si un elemento ya está en la lista y así evitar volver a añadirlo. Solo sirve para números, cadena de valores o booleanos.

const index = list.indexOf('Celia');
console.log(index);

const index1 = list.indexOf('Gloria');
console.log(index1);


// buscador dentro del array
/* for(let i = 0; 1 < list.length; i++) {
  if (list[i] === 'Celia') {
    console.log(i);
  }
} */

// Reverse - invertir el orden
list.reverse();
console.log(list);

// concatenación (añadir). crea un nuevo array concatenado, así que tenemos que asignarlo a una nueva variable

const newList = list.concat(list2);
console.log(newList);

// Slice - extraer un conjunto de elementos del array ¡¡ sin modificar el array original !!. Lo guardamos en una variable. Si no no podremos utilizarlo Recibe dos parámetros. Primer parámetro, desde qué posición empieza. Segundo parámetro, hasta qué posición (-1 / sin incluirla).

const slice = newList.slice(2, 5);
console.log(slice);
console.log(newList);

// Splice !! - elimina elementos de un array modificando el original. Primer parámetro: desde donde quiero eliminar (inclusive). Segundo parámetro: cuántos valores quiero eliminar.

newList.splice(3, 4);
console.log(newList);

///

