let frutas = ["manzana", "banana", "naranja", "pera"];

//inicialización; condición; actualización
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i], "está en la posición", i);
}

let peliculas = ["El Padrino", "El Señor de los Anillos", "Pulp Fiction"];

for (let peli of peliculas) { //for...of es una estructura repetitiva que recorre los elementos de un iterable.
    console.log(peli);
}
