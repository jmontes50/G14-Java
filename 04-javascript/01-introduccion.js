/* Comentarios
de
bloque */
//Comentarios de linea

console.log("Hola mundo desde JS!");

//en JS no es necesario declarar el tipo de variable, se infiere automaticamente
let edad = 30;

console.log(typeof edad);

edad = "treinta"; //esto es posible pero no recomendable, estamos cambiando el tipo de dato de la variable

console.log(typeof edad);

let hacefrio = true;

console.log(typeof hacefrio);

let noDefinido;

console.log(typeof noDefinido);
//En JS existen 6 tipos de datos primitivos: string, number, boolean,, undefined, symbol y bigint

let esNulo = null;

console.log(esNulo);
console.log(typeof esNulo); //esto es un error en JS, el tipo de dato de null es object, pero en realidad no es un objeto, es un valor primitivo que representa la ausencia de valor

//es el problema de concatenar
let nota = 20; //para crear una variable se usa la palabra reservada let, var o const, se recomienda usar let o const, var es una forma antigua de declarar variables y tiene un comportamiento diferente al de let y const, se recomienda no usar var
let nota2 = "10";

console.log(nota + nota2); //esto no es una suma, es una concatenacion, el resultado es "2010", se usa el símbolo + para concatenar

//para convertir tenemos que parsear el string a number, Number() parse

//Number lo pueden ver como un método estático
console.log(nota + Number(nota2)); //esto si es una suma, el resultado es 30

console.log(parseFloat(nota2)); //esto también es una forma de parsear, el resultado es 10, parseInt() parsea un string a un número entero, parseFloat() parsea un string a un número decimal

let texto = "Hola!";
console.log("isNotANumber resultado:",isNaN(texto)); //isNaN() es una función que devuelve true si el valor no es un número, en este caso devuelve true porque "Hola!" no es un número

//Expresiones
texto
10 + 20
isNaN("25")

//Sentencia
texto = "Moin";
console.log("Hola mundo!"); //esto es una sentencia, es una instrucción que el programa ejecuta, una sentencia puede contener una o varias expresiones, en este caso la expresión es "Hola mundo!" y la sentencia es console.log("Hola mundo!");
