function Saludar(){
    alert('Hola');
}

function Validar(){
    return true;
}

function aCelcius(fahrenheit){
    return (5/9) * (fahrenheit-32)
}

let tCelcius = aCelcius(50);
console.log("La temperatura actual es : " + tCelcius);

const Person = {
    firstName : "Joe",
    lastName : "Amstrong",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(Person.fullName());


//Crear Funcion que recibe 2 numeros y 
//retorna su Producto
function Producto(a, b){
    return a*b;
}

console.log(Producto(30,50));

/* Crear una funcion que reciba un string y lo retorne formateado 
con su primera letra en mayuscula y las demas en minuscula
Ejemplo: auto => Auto  
alexis => Alexis*/

