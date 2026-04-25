//window representa la pestaña del navegador y es un objeto, pero no es necesario referenciarlo.
window.console.log(window);

window.navigator.geolocation.getCurrentPosition((resultado) => {
  console.log(resultado);
})

//document representa todo el document HTML
console.log(document);

const colorAleatorio = () => {
  //rgba
  //random da un valor entre 0 y 1
  color1 = Math.floor(Math.random() * 254) + 1
  color2 = Math.floor(Math.random() * 254) + 1
  color3 = Math.floor(Math.random() * 254) + 1

  const colorRGB = `rgb(${color1}, ${color2}, ${color3})`
  return colorRGB;
}

const Body = document.querySelector('body');

// console.log(Body);
//querySelector que funciona de forma idéntica a un selector de css
//si es una etiqueta se llama tal cual, si es una clase se usa . y si es una id #
const header = document.querySelector("header");
console.log(header);
//JS si es una propiedad de css con - conviertele a camelCase
//background-color -> backgroundColor
//los valores que indicamos son strings
header.style.backgroundColor = colorAleatorio();

const h1 = document.querySelector("h1");
h1.style.color = "white"
h1.style.fontSize = "48px";

const htmlStringHeader = header.innerHTML;

const contenidoH1 = h1.innerText;

console.log({ htmlStringHeader });

console.log({ contenidoH1 });

header.innerHTML = `
  <h1>Desde el Javascript</h1>
  <hr>
  <h2>Contenido dinámico</h2>
`;

const section1 = document.querySelector(".importante");

section1.style.border = "2px solid green";
section1.style.fontSize = "24px";
section1.style.fontFamily = "Arial";

//getElementsByClassName, te da un HTMLCollection que no es iterable por si solo
const articlesClassName = document.getElementsByClassName("noticia");

console.log({ articlesClassName });

// articlesClassName.forEach(() => {}); //Array.from() //convierte en Array

//querySelectorAll, te da un nodeList que es iterable con forEach
const articlesSelector = document.querySelectorAll(".noticia");

console.log({ articlesSelector });

articlesSelector.forEach((article, index) => {
  console.log(index, article);
  article.style.border = "4px solid purple";
})

//getElementById,
const inputCorreo = document.getElementById("correo");
// const btnSuscripcion = document.querySelector("#btn-suscripcion");
const btnSuscripcion = document.getElementById("btn-suscripcion");

const sectionVacio = document.querySelector("#vacio");

let correos = [];

console.log({ inputCorreo });
console.log({ btnSuscripcion });

btnSuscripcion.addEventListener("click", () => {
  const nuevoEmail = inputCorreo.value; //user1@gmail.com
  correos.push(nuevoEmail);
  alert("Te has suscrito!");
  console.table(correos);
  inputCorreo.value = "";

 const correosParagraphs = correos.map((correo) => `<p>${correo}</p>`);
 console.log({ correosParagraphs });
 const htmlCorreosParagraphs = correosParagraphs.join("");
 console.log({ htmlCorreosParagraphs });
 sectionVacio.innerHTML = htmlCorreosParagraphs;
})

inputCorreo.addEventListener("change", (evento) => {
  console.log("Se esta escribiendo")
  //A partir del objeto del evento, podemos encontrar el target, el target (objetivo) es la referencia de donde se ha disparado el evento
  console.log({ evento: evento.target.value })
})

const sectionSuscripcion = document.querySelector(".suscripcion");

sectionSuscripcion.classList.add("borde-rojo");

sectionSuscripcion.classList.add("fondo-oro");

// sectionSuscripcion.classList.remove("borde-rojo");
//setInterval, ejecuta algo cada X milisegundos
setInterval(() => {
  //toggle si existe la clase la remueve, si no esta la agrega
  sectionSuscripcion.classList.toggle("borde-rojo");
}, 1000)


