//Funciones corriendo en paralelo con otras son llamadas Asincronas

//Esperamos que se cumpla un plazo

setTimeout(myFunction, 3000);

function myFunction() {
    document.getElementById("demo").innerHTML = "Front End";
}

//En el ejemplo anterior myFunction es pasada como Callback


//Tambien se puede pasar la funcion completa:

setTimeout(function() { myFunction("Front End"); }, 3000);

function myFunction(value) {
    document.getElementById("demo").innerHTML = value;
}


//Intervalos:

// Utilizando Callbacks podemos ejecutar una funcion cada vez que se produsca un intervalo
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}


//Esperar por Data:

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "index.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
  getFile(myDisplayer);
