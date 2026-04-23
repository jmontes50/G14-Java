const frutas = ["manzana", "banana", "naranja", "pera", "uva"];

const fruta1 = frutas[0];
const fruta2 = frutas[1];
const fruta3 = frutas[2];

console.log(fruta1); // manzana

// Desestructuración de arreglos, si nosotros conocemos lo datos a acceder, podemos usar la desestructuración para asignar los valores a variables de manera más sencilla. funciona por la posición/índice
const [frutaA, frutaB, frutaC] = frutas;

console.log(frutaA); // manzana
console.log(frutaB); // banana
console.log(frutaC); // naranja

const platillo = {
  nombre: "Ceviche",
  ingredientes: ["pescado", "limón", "cebolla", "cilantro"],
  precio: 40,
  esPicante: false,
  variedad: "mariscos",
};

const nombrePlatillo = platillo.nombre;
const precioPlatillo = platillo.precio;

console.log(nombrePlatillo); // Ceviche

// Desestructuración de objetos, funciona por el nombre de las propiedades
const { precio, variedad, nombre, esPicante } = platillo;

console.log(precio); // 40
console.log(variedad); // mariscos
console.log(nombre); // Ceviche
console.log(esPicante); // false

function crearEstudianteAsignacion( nombre, edad, carrera, universidad, promedio ) {
  console.log({ nombre, edad, carrera, universidad, promedio })
}

//funcion constructor
function crearEstudiante({ nombre, edad, carrera, universidad, promedio }) {
  return {
    // nombre:nombre,
    nombre,
    edad,
    carrera,
    universidad,
    promedio,
  };
}

//error en asignación
const estudianteAsig = crearEstudianteAsignacion("Juan", 17, "Ingeniería", "Tecsup", 25);

const dataEstudiante = {
  edad: 25,
  universidad: "Tecsup",
  promedio: 17,
  carrera: "Ingeniería",
  nombre: "Juan",
  apellido: "Perez",
  ciudad: "Lima",
}
const estudiante1 = crearEstudiante(dataEstudiante);

console.table(estudiante1);

let isLoggedIn = false;

// console.log("isLoggedIn:", isLoggedIn); // false
console.log({ isLoggedIn }); // { isLoggedIn: isLoggedIn }

let user = {
  nombresYApellidos: "John Doe",
}

let { nombresYApellidos: nombres } = user;

console.log(nombres); // John Doe
