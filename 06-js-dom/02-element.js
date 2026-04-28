import Card from "./02-1-componente.js";

const h1 = document.querySelector("h1");

const link = document.querySelector("a");

const main = document.getElementById("raiz");

//Por diferente que sean las etiquetas dentro del html todas van a ser del prototipo Element
console.log(h1);

console.log(link);

console.log(main.innerHTML);

console.log(main.innerText);

const frutas = ["Kiwi", "Pera", "Fresa"];

console.log(frutas);


// const btnSection1 = document.getElementById("btn-section1");

// console.log({ btnSection1 })

const nuevoHTML = main.innerHTML + `
<h2>Contenido del main</h2>
<section>
  <h3 id="titulo_section1">Investigadora crea filtro para reducir microplasticos</h3>
  <p>lorem lorem</p>
  <button id="btn-section1">Ver más</button>
</section>
`;

console.log("tipo nuevoHTML", typeof nuevoHTML);

main.innerHTML = nuevoHTML;

const btnSection1 = document.getElementById("btn-section1");

console.log({ btnSection1 });

//---------- CREATE ELEMENT ------------

const subSeccion = document.createElement("div");

console.log("subSeccion:", subSeccion);

subSeccion.innerText = "Yo soy un div creado con createElement";

//appendChild agrega como ultimo hijo a otro elemento de HTML
main.appendChild(subSeccion);

const imagen = document.createElement("img");

console.log("imagen:", imagen);

//setAttribute nos permite agregar o cambiar un atributo del elemento
imagen.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTss3hiuUvRFTAfjaT-B8M6K7hvfgrwARsFIA&s");

imagen.setAttribute("alt", "botella de agua");

main.appendChild(imagen);

console.log(main)

/*
const span = new Element("span");

console.log("span:", span);

span.innerText = "Soy un span creado con new Element()";

main.appendChild(span);
*/

console.log(Card());

const nuevoCard = Card();

main.appendChild(nuevoCard);
