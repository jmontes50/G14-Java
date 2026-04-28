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
