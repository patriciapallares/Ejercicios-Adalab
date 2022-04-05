

// se tienen que enviar siempre como string stringify

// set guardar get descargar

// no puedo escuchar eventos sobre un array, tenemos que recorrerlo y asi escuchar el evento sobre cada imput

const listInput = document.querySelectorAll('.js-input');
const btn = document.querySelector('.js-btn');
// movemos la variable user fuera para poder usarla
// user tiene que ser let, no const
let user = {};


const handleInput = (event) => {
  // const user = {};
  const idInput = event.currentTarget.id;
  user[idInput] = event.currentTarget.value;
};

for (const input of listInput) {
  input.addEventListener('keyup', handleInput);
};

// traer el botón de enviar y hacer un evento click sobre él

function handleBtn(event){
  event.preventDefault();
  localStorage.setItem('datauser', json.stringify(user));
}

btn.addEventListener('click', handleBtn);

const dataLocal = localStorage.getItem('datauser');

// si es la primera vez que entramos o algo

if (dataLocal !== null){
  user = json.parse(dataLocal);
};

// cogemos lo que queremos guardar
// lo transfformo a string (stringify)
// en ese momento puedo h acer el set (solo quiere string)

// cuando saco los datos del storage he de validar comprobar que es diferente a null
// si se cumple, tengo que destransformar el string (json.parse())
// uso esos datos