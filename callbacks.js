//Funciones de JavaScript son ejecutadas a medida que son llamadas, no cuando son declaradas

function myFirst() {
    console.log("Hello");
  }
  
function mySecond() {
console.log("Goodbye");
}
  
myFirst();
mySecond();

//Supongamos que queremos realizar un calculo y despues mostrar el resultado:

//Podemos llamar a la funcion calculadora (myCalculator), guardar el resultado, y luego llamar a la otra funcion (myDisplayer) para mostrar el resultado:

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some
    console.log(some)
}

function myCalculator(num1, num2) {
let sum = num1 + num2;
return sum;
}
  
let result = myCalculator(5, 5);
myDisplayer(result); 

//O podemos llamar a la funcion (myCalculator), y dejar que esta funcion haga la llamada a la funcion que muestra el resultado (myDisplayer):

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
    console.log(some)
}
  
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
}
  
myCalculator(5, 5);

//El problema con el primer ejemplo es que tienes que llamar a las dos funciones para mostrar el resultado.
//El problema con el segundo ejemplo es que no podemos prevenir que myCalculator se quien muestra el resultado

//Solucion: Callback ! Usando un Callback podemos llamar a la funcion calculadora con un callback, y dejar que la funcion calculadora
//ejecute el codigo despues que el calculo sea ejecutado

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
    console.log(some)
  }
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
  
myCalculator(5, 5, myDisplayer);

//En el ejemplo anterior pasamos como parametro una funcion. Eso es llamado un Callback!

//Cuando pasamos una funcion como callback, No se utilizan los parentesis!
//Correcto: myCalculator(5, 5, myDisplayer);
//Malo: myCalculator(5, 5, myDisplayer());


