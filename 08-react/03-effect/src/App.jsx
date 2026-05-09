import { useState, useEffect } from "react"

const App = () => {
  const [logged, setLogged] = useState(false);
  const [counter, setCounter] = useState(1000);

  const manejarBoton = () => {
    console.log("!!!")
    setLogged(!logged);
  }

  useEffect(() => {
    console.log("LOGGED:", logged);
  }, [])

  return (
    <div>
      <button onClick={manejarBoton}>Cambiar Status</button>
      Estado: {JSON.stringify(logged)}
      <hr/>
      <p>Contador: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Incrementar!
      </button>
    </div>
  )
}

export default App
