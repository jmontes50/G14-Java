function saludar() {
    console.log("Hola, mundo!");
}

saludar(); //para ejecutar una función se escribe su nombre seguido de paréntesis, en este caso el resultado es "Hola, mundo!"

/**
 * JSDoc, para alimentar el intelissense
 * @param {number} a
 * @param {number} b
 * @returns {number} la suma de a y b
 */
function sumar(a, b) {
    return a + b; //return es una palabra reservada que se usa para devolver un valor desde una función
}

let resultado = sumar(5, 3); //para ejecutar una función con argumentos se escribe su nombre seguido de paréntesis y dentro de los paréntesis se escriben los argumentos separados por comas

console.log(resultado);

//Ciudadano de primera clase
//Una función se puede asignar a uuna variable, se puede pasar como argumento a otra función, se puede devolver desde otra función, etc.

let restar = function (a, b) { //esto es una función anónima, no tiene un nombre, se asigna a la variable restar
    return a - b;
}

console.log(restar(10, 4)); //para ejecutar la función restar se escribe su nombre seguido de paréntesis y dentro de los paréntesis se escriben los argumentos separados por comas

//funciones flecha

//function multiplicar(a, b) {
//    return a * b;
//}
let multiplicar = (a, b) => {
    return a * b;
}

console.log(multiplicar(6, 7));



