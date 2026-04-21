let frutas = ["manzana", "banana", "naranja", "pera"];

//inicialización; condición; actualización
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i], "está en la posición", i);
}

let peliculas = ["El Padrino", "El Señor de los Anillos", "Pulp Fiction"];

for (let peli of peliculas) { //for...of es una estructura repetitiva que recorre los elementos de un iterable.
    console.log(peli);
}

let producto = {
    nombre: "Laptop",
    precio: 1000,
    marca: "Dell",
    stock: 50,
}

for (let clave in producto) { //for...in es una estructura repetitiva que recorre las propiedades enumerables de un objeto.
    console.log(clave, ":", producto[clave]);
}

let propiedades = Object.keys(producto); //Object.keys() es un método que devuelve un array con las propiedades enumerables de un objeto.

console.log("Propiedades: ",propiedades);

let valores = Object.values(producto); //Object.values() es un método que devuelve un array con los valores de las propiedades enumerables de un objeto.

console.log("Valores: ",valores);

let entradas = Object.entries(producto); //Object.entries() es un método que devuelve un array con las propiedades enumerables de un objeto en forma de pares [clave, valor].

console.log("Entradas: ",entradas);
