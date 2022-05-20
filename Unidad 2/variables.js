/* 
var => forma nativa de declarar variables en JS
var => alcance (SCOPE) GLOBAL/FUNCION
var => se puede re-declarar
*/ 
var nombreVariable;
nombreVariable = "valorVariable";
var nombreVariable2 = "valorVariable";

var nombreVariable = 10;

/* 
let => forma nueva (2015) de declarar variables en JS
let => alcance (SCOPE) BLOQUE
let => NO se puede re-declarar
*/ 

//let nombreVariable;
nombreVariable = 10;

//let nombreVariable2 = 10;
//let nombreVariable2 = 10; //ERROR

for (let i = 0; i < 10; i++) {
    console.log(i);
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}





console.log(i); //Error: i no esta declarado


function test(){
    var variableTest = 10;
    for (let i = 0; i < 10; i++) {
        console.log(i)
        console.log(variableTest)
        var variableTest2 = "HOLA"
    }
    let i = 20;
    console.log(i); // Error: i no esta declarado
    console.log(variableTest)
    console.log(variableTest2)
}


/* 
const => forma nueva (2015) de declarar variables en JS
const => alcance (SCOPE) BLOQUE
const => NO se puede re-declarar
const => NO se puede re-asignar
const => NO puede cambiar su valor completamente
*/ 
const nombreConst = 10;
//nombreConst = 12; // Error
//const nombreConst = 20; // Error

const arrayNombres = ["Esto", "Es", "Un", "Array"]; // Array
arrayNombres = ["Otro", "Array"] // Error

arrayNombres[0] = "Otro Valor";
console.log(arrayNombres)

arrayNombres.push("Otro Nombre")