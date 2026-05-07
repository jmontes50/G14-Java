//en react .js o .jsx no necesitan extension en los import, otras extensiones si, ej .css
import Tarjeta from "./Tarjeta";
import Formulario from "./Formulario";

/**
 * 1. la función que representa un componente de react debe iniciar con mayuscula
 * 2. debe retornar un elemento jsx/html
 * 3. debe ser exportado para ser utilizado en otros archivos
 * 4. debe ser importado en el archivo donde se va a utilizar
 */

const App = () => {
  const titulo = "Hola Mundo pero soy una variable";

  /*
  jsx es javascript extension,
  le da la posibilidad de escribir
  una sintaxis similar a
  html dentro de javascript, pero no es html*/
  /**
   * 1. no se pueden retornar varios elementos, deben estar envueltos en un contenedor padre
   * 1.1 en todo caso tenemos los fragmentos de react <></> para evitar agregar nodos innecesarios al DOM
   * 2. todos los elementos deben cerrarse, incluso los elementos vacíos como <hr /> o <img />
   * 3. podemos usar llaves {} para insertar expresiones de javascript dentro del jsx, como variables, operaciones matemáticas, funciones, etc.
   * 4. uso de atributos class o for, en jsx se usan className y htmlFor respectivamente para evitar conflictos con las palabras reservadas de javascript
   * 5. para eventos ya no usa addEventListener, sino que se usan atributos de eventos en camelCase, como onClick, onChange, etc. y se les asigna una función como valor
   *
   */
  const manejarClick = () => {
    alert("Hola, has hecho click!");
  }

  return (
    <>
      <h1 className="titulo">{titulo}</h1>
      <p>Bienvenidos a React</p>
      <p>Multiplicación: {5 * 10 * 27}</p>
      <hr />
      <img src="https://picsum.photos/id/237/200/300" alt="animal" />
      <hr />
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />
        <button onClick={manejarClick}>Click!</button>
      </div>
      <Formulario titulo="Suscribete" />
      <hr />
      <section>
        {/* podemos usar las <Nombre> como una forma alternativa de llamar a las funciones que son componentes  */}
        {/* Tarjeta({ titulo:"Producto 1", texto="Producto 1" }) */}
        <Tarjeta titulo={"Producto 1"} texto="lorem1" />
        <Tarjeta titulo={"Producto 2"} texto="lorem2" />
        <Tarjeta titulo={"Producto 3"} texto={100000*2} />
      </section>
    </>

  )
}

export default App;
