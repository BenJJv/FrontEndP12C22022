const Joe = {
    "Nombre" : "Joe",
    "Apellidos" : "Amstrong Luxer",
    "Age" : 25,
    "Ciudad" : "Curico",
    "PreferenciasMusicales" : ["Pop", "Reggae", "Rock"],
    "ProfileImg" : "Url"
}
const Ann = {
    "Nombre" : "Ann",
    "Apellidos" : "Jackson Smith",
    "Age" : 17,
    "Ciudad" : "Teno",
    "PreferenciasMusicales" : ["Pop", "Metal", "Jazz"]
}
const Neil = {
    "Nombre" : "Neil",
    "Apellidos" : "Matt Smith",
    "Age" : 23,
    "Ciudad" : "Romeral",
    "PreferenciasMusicales" : ["Rock", "Funk"]
}

const Personas = [Joe,Ann,Neil];


const root = document.getElementById("root");

for (let i = 0; i < Personas.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card")
    card.classList.add("col-3")
    card.style.height = "300px"

    const tituloName = document.createElement("h2")
    tituloName.innerHTML = Personas[i].Nombre;
    tituloName.classList.add("text-center")
    card.appendChild(tituloName);
    root.appendChild(card)
}