import axios from "axios";

console.log("NODE!!!")

const obtenerDatos = async () => {
  try {
    const respuestaCompleta = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(respuestaCompleta); //mezclar headers y data en un mismo objeto.
  } catch (error) {
    console.log(error)
  }
}
obtenerDatos();
