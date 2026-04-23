//podemos cambiar el valor de una propiedad directamente
const desayuno = {
  platoPrincipal: "Huevos revueltos",
  bebida: "Café",
  postre: "Tostadas",
}

desayuno.platoPrincipal = "Tortilla de patatas";
desayuno.acompanamiento = "Jamon serrano";

console.table(desayuno); // Tortilla de patatas

//Copia de un objeto.
const planDeGobierno1 = {
  propuesta1: "Aumentar el salario mínimo",
  gastoEducacion: 0.05,
  gastoSalud: 0.1,
  gastoSeguridad: 0.15,
};

//copia por referencia, no es una copia real, sino que ambas variables apuntan a la misma dirección en memoria
//Todo lo que no sea primitivo va a ser copiado por referencia
const planDeGobierno2 = planDeGobierno1;

planDeGobierno2.gastoSeguridad = 0.2;

console.table(planDeGobierno2);

console.table(planDeGobierno1);

//copia por valor, esto sucede en primitivos
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

//Otros ejemplos

const pokemon1 = {
  nombre:"Pikachu",
  ataque: 100,
  salud: 50
}

const pokemon2 = pokemon1;

pokemon2.salud = 20;

console.log({ pokemon2 });

console.log({ pokemon1 });

//number, string, boolean, undefined, null, symbog, bigInt

const compra1 = ["Pollo", "Carne", "Agua"];

const compra2 = compra1;

compra2.push("Gaseosa");

console.log(compra1);

let sueldo = 2000;

let sueldo2 = sueldo;

sueldo2 += 1000;

console.log(sueldo)
