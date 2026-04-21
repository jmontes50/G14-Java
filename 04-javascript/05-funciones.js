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

