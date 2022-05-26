// Tipos de datos son Dinamicos
//string - number - boolean
let nombre = "Joe";
console.log(typeof(nombre));
nombre = 10;
console.log(typeof(nombre));

let estado = true;
console.log(typeof(estado));

let PI = 3.1416
console.log(typeof(PI));

//array
let autos = ["Volvo", "Kia", true];
console.log(typeof(autos));



//object
let persona = {
    Name: "Joe",
    LastName: "Amstrong",
    Age: 20,
    City: "New York"
}
console.log(persona.Age)
console.log(autos[0])

nombre.length

let persona2 = {
    "Name": "Joe",
    "LastName": "Amstrong",
    "Age": 20,
    "City": "New York"
}
console.log(persona);
console.log(persona.City);


const titulo = document.getElementById("main-tittle");
console.log(typeof(titulo))
titulo.innerHTML
titulo.parentElement
titulo.className
titulo.classList

const newImg = document.createElement("img")
const newP = document.createElement("p")
const newDiv = document.createElement("div")

newImg.alt = "imagenTest"
newP.innerHTML = "<strong>lorem.</strong> ipsun..."
newDiv.style.border = "1px solid black"

newImg.width = "100px"
newImg.height = "100px"

newDiv.appendChild(newP)
newDiv.appendChild(newImg)

const body = document.getElementsByTagName("body")
body[0].appendChild(newDiv)