let nombre = "Joe"
console.log(string.length);



const nombres = "";
if (nombres.length > 0){
    console.log("Nombre Valido!")
}
//slice(start, end) 
//substring(start, end)
//substr(start, length)
let string2 = "lorem ipsum lorem ipsun.";
let resultado = string2.slice(6,10);
console.log(resultado);//ipsu
let resultado2 = string2.slice(-10,-6);
console.log(resultado2); // rem 

//Extraer las ultimas 3 letras de un String
const word = "C:/ProgramFiles/nodejs/node.exe";
const start = word.length - 3
const resultado3 = word.slice(start)
console.log(resultado3)

//substring
let texto = "C:/ProgramFiles/nodejs/node.exe"
let resultado4 = texto.substring(0,1);
console.log("Test Substring:" + resultado4) //C

//substr
let texto2 = "C:/ProgramFiles/nodejs/node.exe"
let resultado5 = texto.substr(7,6);
console.log("Test Substr:" + resultado5) //

//replace 
let texto3 = "C:/ProgramFiles/nodejs/node.exe"
//let resultado6 = texto3.replace("NODE","NODE")
//let resultado6 = texto3.replace(/NODE/i,"NODE")//Expresion Regular
let resultado6 = texto3.replace(/node/g,"javascript")//Expresion Regular
console.log("Test Replace: " + resultado6)

//toUpperCase toLowerCase
let texto4 = "C:/ProgramFiles/nodejs/node.exe"
console.log("Test toUpperCase:" + texto4.toUpperCase())
console.log("Test toLowerCase:" + texto4.toLowerCase())

//charAt retorna el caracter en el indice especificado
let texto5 = "C:/ProgramFiles/nodejs/node.exe"
let primeraLetra = texto5.charAt(0);
console.log("Test charAt: " + primeraLetra)

//Obtener la ultima letra de un String
let ultimaLetra = texto5.charAt(texto5.length - 1)
console.log("Ultima Letra: " + ultimaLetra)

console.log("Primera Letra:" + texto5[0])
texto5[0] = "A"
console.log(texto5)

const palabras = ["Uno","Dos", "Tres"]
palabras[0] = "Cuatro"
console.log(palabras[0])

let texto6 = "C:/ProgramFiles/nodejs/node.exe"
let array = texto6.split("/")
console.log(array) // ['C:', 'ProgramFiles', 'nodejs', 'node.exe']


/* Crear una funcion que reciba un string y lo retorne formateado 
con su primera letra en mayuscula de cada plabra del string 
Ejemplo: el auto de alexis => El Auto De Alexis 
*/
function FixString(string){
    if(!string.length > 0){ console.log("Error!")}
    else{
        const arr = string.split(" ")
        var resultado = ""
        for (let i = 0; i < arr.length; i++) {
            let fixedPart = arr[i].charAt(0).toUpperCase() + arr[i].substr(1)
            resultado += fixedPart + " "
        }
    }
    return resultado;
}

console.log(FixString("hola mundo"))
