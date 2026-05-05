import axios from "axios";

const obtenerDatos = async () => {
  try {
    const respuestaCompleta = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(respuestaCompleta)
  } catch (error) {
    console.log(error)
  }
}
obtenerDatos();
