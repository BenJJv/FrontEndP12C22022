const newImg = document.createElement("img")
const newP = document.createElement("p")
const newDiv = document.createElement("div")

newImg.alt = "imagenTest"
newP.innerHTML = "<strong>lorem.</strong> ipsun..."
newDiv.style.border = "1px solid black"

newDiv.className = "col-6"

newImg.width = "100px"
newImg.height = "100px"

newDiv.appendChild(newP)
newDiv.appendChild(newImg)

/*
const body = document.getElementsByTagName("body")
body[0].appendChild(newDiv) */

const main = document.getElementById("root");
main.classList.add("row");
main.classList.add("justify-content-center");
main.appendChild(newDiv);