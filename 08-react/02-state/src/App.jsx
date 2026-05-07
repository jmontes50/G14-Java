//1. importar useState
import { useState } from 'react';

const App = () => {

  //2. declarar el estado
  //const [getter, setter] = useState(valorInicial);
  //porque cada vez que se actualiza el estado, el componente se vuelve a renderizar, entonces el getter siempre va a tener el valor actualizado
  const [contador, setContador] = useState(0);

  const manejarClick = () => {
    //3. actualizar el estado
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>State</h1>
      <p>Contador: {contador}</p>
      <button onClick={manejarClick}>Click!</button>
    </div>
  )
}

export default App;
