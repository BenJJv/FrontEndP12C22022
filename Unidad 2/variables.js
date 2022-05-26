// Variables JS
/* 
    var
    let
    const
*/

var name;
name = "Joe";
console.log(name);

var name = "July";
console.log(name);

let lastname = "Amstrong";
console.log(lastname);

/*let lastname = "Musk"
console.log(lastname);*/

//Diferencias
// var puede ser RE-DECLARADO mientras que let NO
// Alcance (SCOPE) => var funcion/global
// Alcance (SCOPE) => let bloque

var x = 10;
{
    let y = 10;
    console.log(y);
}

console.log(x)
//console.log(y) // y is not defined

const PI = 3.1416;
console.log(PI);
//PI = 3.1417;

const medida = 10;

// usamos const cuando estamos seguros de 
// que su valor no cambiara en el tiempo

const autos = ["Volvo", "Mazda", "Nissan"];
//autos = ["Kia", "Mercedez", "Subaru"]; // Error

autos[0] = "Toyota";

autos.push("Audi")

console.log(autos);

