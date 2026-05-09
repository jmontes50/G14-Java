//1. importar useState
import { useState } from 'react';

const App = () => {

  //2. declarar el estado
  //const [getter, setter] = useState(valorInicial);
  //porque cada vez que se actualiza el estado, el componente se vuelve a renderizar, entonces el getter siempre va a tener el valor actualizado
  const [contador, setContador] = useState(0);
  const [busqueda, setBusqueda] = useState("project hail mary");
  const [gato, setGato] = useState({
    nombre:"Ramón",
    edad: 7,
    color: "negro"
  });

  const manejarClick = () => {
    //3. actualizar el estado
    setContador(contador + 1);
  }

  const manejarInput = (evento) => {
    console.log(evento.target.value);
    setBusqueda(evento.target.value);
  }

  console.log(contador + 10)

  return (
    <div>
      <h1>State</h1>
      <p>Contador: {contador}</p>
      <button onClick={manejarClick}>Click!</button>
      <hr />
      {/* componentes controlados */}
      <input
        type="text"
        value={busqueda}
        //onChange es un evento que detecta los cambios en un input
        onChange={manejarInput}
      />
      <hr />
      <button onClick={() => {
        setGato({ ...gato, likes: 1 })
      }}>
        Agregar Likes
      </button>
      <p>{JSON.stringify(gato)}</p>
    </div>
  )
}

export default App;
