//La sintaxis que estamos utilizando se llama ES6 Modules, que es una forma de organizar el código en archivos separados y luego importarlos cuando los necesitemos. (import, export )

//hay otros más como CommonJS (require, module.exports) que se utiliza principalmente en Node.js

//default se puede importar con cualquier nombre
import HacerSaludo, {
  queFechaEsHoy, obtenerNumeroAleatorio
} from "./04-1-operaciones.js";

console.log(`La fecha de hoy es: ${queFechaEsHoy()}`);


console.log(`Número aleatorio entre 1 y 100: ${obtenerNumeroAleatorio(1, 100)}`);

console.log(HacerSaludo("Juan"));
