//Tipos de datos son Dinamicos
//string - number - boolean
let name = "Joe";
console.log(typeof(name));
name = 10;
console.log(typeof(name));

let estado = true;
console.log(typeof(estado));

let PI = 3.1416
console.log(typeof(PI));

//array
let autos = ["Volvo", "Kia", "Mercedez"];
console.log(typeof(autos));
const valor1 = autos[0];//GET obtener
autos[0] = "Nuevo Valor" //SET dar valor


//object
let persona = {
    Name: "Joe",
    LastName: "Amstrong",
    Age: 20,
    City: "New York"
}
console.log(persona.Name); //GET
console.log(persona["Name"]); //GET
persona.Name = "Nuevo Nombre"; //SET

for (let prop in persona){
    console.log(prop)
}

let persona2 = {
    "Name": "Joe",
    "LastName": "Amstrong",
    "Age": 20,
    "City": "New York"
}
console.log(persona);
console.log(persona.City);