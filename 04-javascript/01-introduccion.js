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

//Expresiones -> una expresión es cualquier fragmento de código que se evalúa y produce un valor, por ejemplo:
texto
10 + 20
isNaN("25")

//Sentencia - Ordenes
texto = "Moin";
console.log("Hola mundo!"); //esto es una sentencia, es una instrucción que el programa ejecuta, una sentencia puede contener una o varias expresiones, en este caso la expresión es "Hola mundo!" y la sentencia es console.log("Hola mundo!");

//Para concatenar, template literals ó template strings, se usan las comillas invertidas ``, dentro de las cuales se pueden insertar expresiones usando ${}, por ejemplo:
let nombre = "Juan";
console.log(`Hola ${nombre}!`);
console.log(`esto es
  un
  poema
  con
  saltos de
  línea ${nombre}
  otro texto
  ${10 + 20}
  `);

const PI = 3.1416; //constante, no se puede reasignar, se recomienda usar const para variables que no van a cambiar su valor, y let para variables que si van a cambiar su valor

// PI = 42; //esto da error

console.log(PI);

//operacion aritmeticas
let a = 10;
let b = 3;

//El console.log puede recibir varios argumentos
console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Módulo/Residuo:", a % b); //el módulo es el resto de la división, en este caso el resultado es 1 porque 10 dividido entre 3 da 3 con un resto de 1

//operadores aritmeticos de asignación
let c = 5;
c++; //esto es lo mismo que c = c + 1, el resultado es 6
console.log("c después de c++:", c);
c += 2; //esto es lo mismo que c = c + 2, el resultado es 7
console.log("c después de c += 2:", c);
c -= 3; //esto es lo mismo que c = c - 3, el resultado es 4
console.log("c después de c -= 3:", c);
c *= 4; //esto es lo mismo que c = c * 4, el resultado es 16
console.log("c después de c *= 4:", c);
c /= 2; //esto es lo mismo que c = c / 2, el resultado es 8
console.log("c después de c /= 2:", c);
c %= 3;
