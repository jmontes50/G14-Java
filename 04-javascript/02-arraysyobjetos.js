let numeros = [1, 2, 3, 4, 5]; //esto es un array, un array es una estructura de datos que puede contener varios valores, en este caso el array numeros contiene los valores 1, 2, 3, 4 y 5

console.log(numeros);

let frutas = ["manzana", "banana", "naranja"];

console.log(frutas);

console.log(frutas[2]); //para acceder a un elemento del array se usa el índice, el índice empieza en 0, en este caso el resultado es "naranja"

console.table(frutas); //console.table() es una función que muestra los datos en forma de tabla, en este caso muestra el array frutas en forma de tabla

let arrMultiple = [1, "hola", true, null, undefined, [1, 2, 3]]; //un array puede contener cualquier tipo de dato, incluso otros arrays o objetos
console.table(arrMultiple);

//objetos
let persona = {
    //key: value
    //propiedad: valor,
    nombre: "Juan",
    edad: 30,
    esEstudiante: true,
    hobbies: ["leer", "programar", "correr"],
    //los nombres de las propiedades pueden contener símbolos
    "correo-corporativo": "juan@empresa.com"
}
console.table(persona);

//como acceder a las propiedades de un objeto
//dot notation
console.log(persona.nombre);
console.log(persona.edad);
// console.log(persona.correo-corporativo); //error*

//bracket notation
console.log(persona["esEstudiante"]);
console.log(persona["hobbies"]);
console.log(persona["correo-corporativo"]); //esto si funciona*

let nombrepropiedad = "nombre";
console.log(persona[nombrepropiedad]);
