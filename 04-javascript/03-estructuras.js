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
