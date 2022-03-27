'use strict';

console.log('morning?');

function mul(a, b) {
  const result = a * b;
  return result;
}

const mulResult = mul(6, 2);
console.log(mulResult);

///

function mean(a, b, c, d) {
  const result2 = (a+b+c+d)/4;
  return result2;
}

const meanResult = mean(5,10,5,10);
console.log(meanResult);

////

const price = 30;
const iva = 0.21;
// const total = price + ivaValue;

function tax(a, b) {
  const resultTax = (a*b);
  return resultTax;
}
const taxValue = tax(price, iva);

function addTax(a, b) {
  const resultTotal = (a+b);
  return resultTotal;
}
const TotalValue = addTax(price, taxValue);

console.log('Precio sin IVA: '+price);
console.log('IVA: '+taxValue);
console.log('Total: '+TotalValue);

///

const value = 4;
    
    if(value%2==0){
        
        console.log('El número ' + value + ' es par');
    
    }else{
        
      console.log('El número ' + value + ' es impar');
        
    }


///

// Calculador de modelo de caja (copypaste de Prado + *2 en las funciones para añadir border y padding por ambos lados)

const size = (confg, width, border, padding) => {
  if(confg===0) {
      console.log("content-box");
      const total =  width + border*2 + padding*2;
      return `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${total}px`; 
  
  }
  else if(confg===1){
      console.log("border-box");
      const box =  width - (border*2 + padding*2);
      return `El ancho del contenido es: ${box}px y el ancho total de la caja es: ${width}px`; 
  }
  };
  
  console.log(size(0, 30, 1, 3))

