const items = ["One", "Two", "Three"];

const items2 = [
    "A",
    "B",
    "C"
];

const items3 = [];
items3[0]= 1;
items3[1]= 2;
items3[2]= 3;

/*

Note: Array indexes start with 0.
[0] is the first element. [1] is the second element.

*/

items[0] = "A"; //SET => Cambiar Valor
let a = items[0]; //GET => Obtener Valor para Utilizarlo


let length = items.length; //Obtenemos el largo de un Array

//Iterar Array

for (let index = 0; index < items.length; index++) {
    const element = items[index];
}

for (const key in items) {
    console.log(key)
}

items.forEach(unaFuncion);
items.forEach(obj => console.log(obj));

function unaFuncion(value){
    console.log(value)
}

/* Agregar Elementos a un Array */

items.push("D");

items[items.length] = "D";

/* NOTE: 
In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes. */

/* Quitar Elemento de un Array */
items.pop();

items.shift()
let itemRemoved = items.shift();


/* Ordenar Elementos Alfabeticamente */
items.sort();

/* Invertir Elementos */
items.reverse();

/* Array Find */
let buscado = items.find(e => e == 1);

/* Filtrar Elementos de un Array */
const numeros = [1,2,3,4,5,6,7,8,9]
const over18 = items.filter(funcion);

function funcion(value, index, array) {
  return value > 18;
}

/* Map */
const numeros2 = numeros1.map(funcion2);
function funcion2(value) {
  return value * 2;
}