//default se puede importar con cualquier nombre
import HacerSaludo, {
  queFechaEsHoy, obtenerNumeroAleatorio
} from "./04-1-operaciones.js";

console.log(`La fecha de hoy es: ${queFechaEsHoy()}`);


console.log(`Número aleatorio entre 1 y 100: ${obtenerNumeroAleatorio(1, 100)}`);

console.log(HacerSaludo("Juan"));
