console.log("Utilizando un archivo JS!");

// Es Interpretado
// ECMAScript
// Java y JavaScript SON MUUUY DIFERENTES!
// No es debilmente typado
// DOM Document Object Model => Todo el HTML
// edad = 20; Asignacion
// Es Sensible a Mayuscula y Minuscula

//Object    Funcion      Param  Atributo          Valor
document.getElementById("text").innerHTML = "Texto de Ejemplo";

function crearTitulo(textoTitulo){
    //alert('x');
    const h1 = document.createElement("h1");
    h1.innerHTML = textoTitulo
    //h1.innerText = "InnerText"
    document.getElementsByTagName("body")[0].appendChild(h1);
}

function diffInnerTextHtml(){
    const parrafo = document.getElementById("text");
    console.log("InnerHtml => " + parrafo.innerHTML);
    console.log("InnerText => " + parrafo.innerText);
}
diffInnerTextHtml();

