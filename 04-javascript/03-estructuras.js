//estructuras condicionales y repetitivas
//condicionales: if, else if, else, switch
//repetitivas: for, while, do while

let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

let total = 75;

if (total < 50) {
    console.log("El total es menor a 50");
} else if (total >= 50 && total < 100) {
    console.log("El total está entre 50 y 100");
} else {
    console.log("El total es mayor o igual a 100");
}

//estrictamente igual
//prompt obtiene una entrada del usuario, prompt siempre da un string
/*
let ticketLoteria = prompt("Ingresa el número de tu ticket de lotería");

console.log("El número de tu ticket es:", ticketLoteria);
console.log("El tipo de dato de tu ticket es:", typeof ticketLoteria);

let numberTicket = Number(ticketLoteria); //Number() convierte un string a un número, si el string no es un número válido, devuelve NaN

//es mejor hacer una comparación estrictamente igual ===
if (numberTicket === 12345) {
    console.log("¡Felicidades! Has ganado el premio mayor");
} else {
    console.log("Lo siento, tu ticket no ha ganado");
}
    */

//falsy values: false, 0, "", null, undefined, NaN
//truthy values: todos los demás valores que no son falsy
/*

let nulo = null;

if (nulo) {
    console.log("Esto no se ejecuta porque nulo es un valor falsy");
} else {
    console.log("Esto se ejecuta porque nulo es un valor falsy");
}

let gato = {
    nombre: "Michi",
    edad: 3
}

console.log(gato.registro);

if (gato.registro) { //falsy porque gato.registro no existe, es undefined
    console.log("El gato tiene registro");
} else {
    console.log("El gato no tiene registro");
}

*/

//operadores ternarios, es una expresion corta de una estructura condicional if-else, se escribe en una sola línea.

let usuario = "supervisor";

//condición ? si es true : si es false

let mensaje = (usuario === "admin") ? "Bienvenido, admin" : "Bienvenido, usuario";

console.log(mensaje);

//Switch

let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    case "miércoles":
        console.log("Hoy es miércoles");
        break;
    default:
        console.log("No es un día válido");
}

let dias = {
    lunes: "Hoy es lunes!!",
    martes: "Hoy es martes!!",
    miércoles: "Hoy es miércoles!!"
}

//usando bracket notation
console.log(dias[dia] || "No es un día válido"); //esto es una forma de simular un switch usando un objeto, si dias[dia] no existe, devuelve "No es un día válido"
