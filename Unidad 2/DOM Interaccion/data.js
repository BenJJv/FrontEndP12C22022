const Joe = {
    "Nombre" : "Joe",
    "Apellidos" : "Amstrong Luxer",
    "Age" : 25,
    "Ciudad" : "Curico",
    "PreferenciasMusicales" : ["Pop", "Reggae", "Rock"],
    "ProfileImg" : "https://images.pexels.com/photos/3780030/pexels-photo-3780030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}
const Ann = {
    "Nombre" : "Ann",
    "Apellidos" : "Jackson Smith",
    "Age" : 17,
    "Ciudad" : "Teno",
    "PreferenciasMusicales" : ["Pop", "Metal", "Jazz"],
    "ProfileImg" : "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}
const Neil = {
    "Nombre" : "Neil",
    "Apellidos" : "Matt Smith",
    "Age" : 23,
    "Ciudad" : "Romeral",
    "PreferenciasMusicales" : ["Rock", "Funk"],
    "ProfileImg" : "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
}

const Personas = [Joe,Ann,Neil];


const root = document.getElementById("root");

for (let i = 0; i < Personas.length; i++) {
    
    const P = Personas[i];
    
    
    const card = document.createElement("div");
    card.classList.add("card")
    card.classList.add("col-md-3")
    //card.style.height = "300px"
    card.style.padding = "0px"
    card.classList.add("mt-3")


    //Nombre
    const tituloName = document.createElement("h2")
    tituloName.innerHTML = P.Nombre;
    tituloName.classList.add("text-center")
    tituloName.classList.add("m-3")
    tituloName.style.lineHeight = "0.5"
    
    
    //Apellido
    const ape = document.createElement("p")
    ape.innerHTML = P.Apellidos
    ape.className = "fst-italic"
    ape.style.fontSize = "1.2rem"
    ape.classList.add("text-center")
    ape.style.marginBottom = "0px"
    //ape.style.lineHeight = "0.5"

    //Edad
    const edad = document.createElement("p")
    edad.innerHTML = "<strong>Edad: </strong> " + P.Age
    edad.className = "fst-italic"
    edad.style.fontSize = "1.2rem"
    edad.classList.add("text-center");
    edad.style.lineHeight = "0"

    //Ciudad
    const city = document.createElement("h3")
    city.innerHTML = "<strong>Ciudad: </strong>" + P.Ciudad
    city.className = "card-title"
    city.classList.add("text-center")

    //Preferencias Musicales
    const prefM = document.createElement("ul");
    prefM.innerHTML = "Preferencias Musicales:"
    prefM.className = "text-center";
    P.PreferenciasMusicales.forEach(p =>{
        const item = document.createElement("li");
        item.innerHTML = p
        prefM.appendChild(item)
    })

    //Foto
    const imgProfile = document.createElement("img");
    imgProfile.src = P.ProfileImg;
    imgProfile.className = "img-fluid";
    imgProfile.style.height = "200px";


    const btnContainer = document.createElement("div");
    btnContainer.style.display = "grid"
    btnContainer.style.gridTemplateColumns = "1fr 1fr"
    btnContainer.style.gap = "10px"
    btnContainer.classList.add("m-2")
    btnContainer.classList.add("mb-3")

    const btnLinkedIn = document.createElement("button")
    btnLinkedIn.className = "btn"
    btnLinkedIn.classList.add("btn-success")
    btnLinkedIn.innerHTML = '<i class="fa-brands fa-linkedin"></i>   LinkedIn'
    btnLinkedIn.classList.add("m-2")

    const btnCorreo = document.createElement("button")
    btnCorreo.className = "btn"
    btnCorreo.classList.add("btn-primary")
    btnCorreo.innerHTML = '<i class="fa-solid fa-envelope"></i>   Email'
    btnCorreo.classList.add("m-2")


    //Event Listener
    btnLinkedIn.addEventListener("click", function(e){
        //Codigo que se produce cuando el Evento se desencadena
        alert("Click en el Btn LinkedIn")

    })

    card.addEventListener("mouseenter",function(e){
        card.classList.add("shadow")
        console.log(e.target)
    })

    card.addEventListener("mouseleave",function(e){
        card.classList.remove("shadow")
        console.log(e.target)
    })

    btnCorreo.addEventListener("click", function(e){
        root.removeChild(card);
        console.log(e.target)
    })




    btnContainer.appendChild(btnLinkedIn)
    btnContainer.appendChild(btnCorreo)

    card.appendChild(imgProfile)
    card.appendChild(tituloName);
    card.appendChild(ape);
    card.appendChild(btnContainer);

    card.appendChild(edad);
    card.appendChild(city)
    card.appendChild(prefM)

    root.appendChild(card)
}