/**
 * 1. la función que representa un componente de react debe iniciar con mayuscula
 * 2. debe retornar un elemento jsx/html
 * 3. debe ser exportado para ser utilizado en otros archivos
 * 4. debe ser importado en el archivo donde se va a utilizar
 */

const App = () => {
  const titulo = "Hola Mundo pero soy una variable";

  // jsx es javascript extension, le da la posibilidad de escribir una sintaxis similar a html dentro de javascript, pero no es html
  /**
   * 1. no se pueden retornar varios elementos, deben estar envueltos en un contenedor padre
   * 2. todos los elementos deben cerrarse, incluso los elementos vacíos como <hr /> o <img />
   * 3. podemos usar llaves {} para insertar expresiones de javascript dentro del jsx, como variables, operaciones matemáticas, funciones, etc.
   * 4. uso de atributos class o for, en jsx se usan className y htmlFor respectivamente para evitar conflictos con las palabras reservadas de javascript
   */
  return (
    <div>
      <h1 className="titulo">{titulo}</h1>
      <p>Bienvenidos a React</p>
      <p>Multiplicación: {5 * 10 * 27}</p>
      <hr />
      <img src="https://picsum.photos/id/237/200/300" alt="animal" />
      <hr />
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />
      </div>
    </div>

  )
}

export default App;
