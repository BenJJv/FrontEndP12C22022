/* Crear un listado de Productos con las propiedades : Id, Descripcion, Stock, Precio, UrlImagen
Representarlo mediantes tarjetas en el HTML con un Boton para Agregar al Carro
Mostrar mas abajo una Tabla (Carro de Compra) en donde aparezcan los productos agregados, sus cantidades, 
precio unitario, precio total.
Se debe poder eliminar productos del Carro */


const P1 = {
    "Id" : "1",
    "Descripcion" : "Logitech TKL G915",
    "Stock" : 23,
    "Precio" : "189990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/82384/picture/?width=375&height=375"
}
const P2 = {
    "Id" : "2",
    "Descripcion" : "Logitech G513 Carbon Español GX",
    "Stock" : 10,
    "Precio" : "89990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/86059/picture/?width=375&height=375"
}
const P3 = {
    "Id" : "3",
    "Descripcion" : "Mouse Logitech G403",
    "Stock" : 15,
    "Precio" : "26990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/67699/picture/?width=375&height=375"
}
const P4 = {
    "Id" : "4",
    "Descripcion" : "Mouse Logitech G502 Hero",
    "Stock" : 12,
    "Precio" : "32990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/51795/picture/?width=375&height=375"
}
const P5 = {
    "Id" : "5",
    "Descripcion" : "Mouse Logitech G502 Lightspeed",
    "Stock" : 5,
    "Precio" : "69990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/51795/picture/?width=375&height=375"
}
const P6 = {
    "Id" : "6",
    "Descripcion" : "Parlantes Logitech G560",
    "Stock" : 30,
    "Precio" : "279990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/51810/picture/?width=375&height=375"
}
const P7 = {
    "Id" : "7",
    "Descripcion" : "Audifonos Logitech G435 White",
    "Stock" : 20,
    "Precio" : "62990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/126338/picture/?width=375&height=375"
}
const P8 = {
    "Id" : "8",
    "Descripcion" : "Audifonos Logitech G533 Wireless 7.1 - Negro",
    "Stock" : 8,
    "Precio" : "80990",
    "UrlImagen" : "https://publicapi.solotodo.com/products/72794/picture/?width=375&height=375"
}

Productos = [P1,P2,P3,P4,P5,P6,P7,P8]


const root = document.getElementById("root")
var Total = 0

Productos.forEach(P => {

    const card = document.createElement("div");
        card.classList.add("card")
        card.classList.add("col-md-3")
        card.classList.add("p-2")
        card.classList.add("m-1")
        card.classList.add("justify-content-center")

        const desc = document.createElement("h2")
        desc.innerHTML = P.Descripcion;
        desc.classList.add("text-center")
        desc.style.height = "77px"
        card.appendChild(desc);

        const img = document.createElement("img")
        img.className = "img-fluid"
        img.style.display = "block"
        img.style.marginRight ="auto"
        img.style.marginLeft ="auto"
        img.src = P.UrlImagen
        img.style.width = "250px"
        img.style.height = "250px"
        card.appendChild(img)

        const stock = document.createElement("p")
        stock.classList.add("text-center")
        stock.innerHTML = P.Stock
        card.appendChild(stock)
    
        const precio = document.createElement("p")
        precio.className = "fst-italic"
        precio.classList.add("text-center")
        precio.innerHTML = "$" + P.Precio
        card.appendChild(precio) 
    
        const btn = document.createElement("button")
        btn.innerHTML = "Add to Cart"
        btn.className = "btn"
        btn.classList.add("btn-outline-success")
        btn.classList.add("m-2")

        btn.addEventListener("click", function(){
            addToCart(P)
        })



        card.appendChild(btn)


        root.appendChild(card)   
});


function addToCart(P){

    Total += parseInt(P.Precio)

    const divTotal = document.getElementById("total")
    divTotal.innerHTML = "Total: $" + String(Total)

    const DivProductoAgregado = document.getElementById(P.Id)

    if(DivProductoAgregado == null){
        //Agregar El Producto
        const carro = document.getElementById("carroContainer") 
        // En este div dejare cada uno de los Productos agregados al carro
    
        const row = document.createElement("div")
        row.className = "row"
        //row.classList.add("card")
        row.classList.add("m-1")
        row.classList.add("p-1")
        row.id = P.Id
    
        const col3 = document.createElement("div");
        col3.className = "col-4"
        const col9 = document.createElement("div");
        col9.className = "col-8"
        col9.style.position = "relative"
        
        //Imagen Producto en el Carro
        const img = document.createElement("img")
        img.style.width = "80px"
        img.style.height = "80px"
        img.src = P.UrlImagen
        img.className = "img-thumbnail"
        img.style.padding = "5px"
        img.classList.add("d-inline")
    
        //Descripcion Producto en el Carro
        const desc = document.createElement("p")
        desc.innerHTML = P.Descripcion
        desc.style.fontSize = "12px"
        desc.style.lineHeight = 0.8
    
        //Cantidad Producto en el Carro
        const cant = document.createElement("p")
        cant.innerHTML = "Cantidad: " + 1
        cant.style.fontSize = "12px"
        cant.id = "Cantidad"
        cant.style.lineHeight = 0.8
    
        //Subtotal Producto en el Carro
        const subtotal = document.createElement("p")
        subtotal.innerHTML = "$" + P.Precio
        subtotal.style.fontSize = "12px"
        subtotal.style.lineHeight = 0.8
    
    
        const btnBorrar = document.createElement("a")
        btnBorrar.innerHTML = '<i class="fa-solid fa-trash"></i>'
        btnBorrar.style.position = "absolute"
        btnBorrar.style.top = "25px"
        btnBorrar.style.right = "5px"
    
        btnBorrar.addEventListener("click", function(){
            carro.removeChild(row)
            removeFromCart(P)
        })
    
        col3.appendChild(img)
        col9.appendChild(desc)
        col9.appendChild(cant)
        col9.appendChild(subtotal)
        col9.appendChild(btnBorrar)
    
        row.appendChild(col3)
        row.appendChild(col9)
    
        carro.appendChild(row)
    }else{
        //Agregar 1 a la Cantidad

        const ParrafoCantidad = DivProductoAgregado.getElementsByTagName("p")[1]
        // Cantidad: 1
        let cantidadActual = parseInt(ParrafoCantidad.innerHTML.substr(ParrafoCantidad.innerHTML.length - 2))
        //console.log(cantidadActual)
        cantidadActual += 1
        ParrafoCantidad.innerHTML = "Cantidad: " + cantidadActual
        let subTotal = cantidadActual * parseInt(P.Precio)
        const ParrafoSubtotal = DivProductoAgregado.getElementsByTagName("p")[2]
        console.log(ParrafoSubtotal.innerHTML)
        console.log(subTotal)
        ParrafoSubtotal.innerHTML = "$" + String(subTotal)

    }

}

function removeFromCart(P){
    //Actualizar el Total
    Total -= parseInt(P.Precio)

    const divTotal = document.getElementById("total")
    divTotal.innerHTML = "Total: $" + String(Total)
}