'use strict';
/*
//traer el elemento a modificar
const elemento = document.querySelector('.js-p'); // primer elemento
const elementoList = document.querySelectorAll('.js-p'); // lista de elementos

//Modificar html
elemento.innerHTML = 'texto'; //
input.value = 'valor';

//Modificar css
elemento.classList. --> add(), remove(), toggle(), contains()

//Modificar imágenes
img.src="https://ruta";
img.alt="texto";

//Modificar enlaces
a.innerHTML = "Haga click aquí"
a.href ="https://ruta"

// para la evaluación, podemos usar lo aprendido o el DOM avanzado 
*/

// creamos elementos en JS cuando son elementos variables

const p = document.querySelector('.js-p');
const section = document.querySelector('.js-section');
const img = document.querySelector('.js-img');
const ul = document.querySelector('.js-list');

const listAdalabers = ['sara', 'rocío', 'lucía', 'elena'];

// creamos el nodo pero todavía no se visualiza. Está como en el limbo
const textP = document.createTextNode('Bienvenidas a JS');

// ahora asignamos textP a un elemento parent
// p.appendChild(textP);

//queremos crear un article hija de section
// seleccionamos section
// creamos el article
// le decimos a js de quien es hija
// creamos nodo de texto
// le decimos a js de quien es hija

const article = document.createElement('article');
section.appendChild(article);

const textArticle = document.createTextNode('Texto del artículo');
article.appendChild(textArticle);

// añadir clase
article.classList.add('color');
// añadir atributos (string con el atributo que quiero añadir, qué le quiero añadir)
article.setAttribute('id','articleProduct');

// las imágenes y etiquetas de enlace se pueden escribir de dos formas
// img.setAttribute('src','rutaURL');
// img.src = 'rutaURL'

for (const item of listAdalabers) {
  const li = document.createElement('li');
  ul.appendChild(li);

  const textLi = document.createTextNode(item);
  li.appendChild(textLi);

  li.dataset.dni = item; 
  li.dataset.age = 22;

  li.addEventListener('click', handleClick);
}

function handleClick() {
  console.log(event.currentTarget.dataset.dni);
}
