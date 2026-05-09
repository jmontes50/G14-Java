import { useState, useEffect } from "react"

const App = () => {
  const [logged, setLogged] = useState(false);

  const manejarBoton = () => {
    console.log("!!!")
    setLogged(!logged);
  }

  useEffect(() => {
    console.log("LOGGED:", logged);
  })

  return (
    <div>
      <button onClick={manejarBoton}>Cambiar Status</button>
      Estado: {JSON.stringify(logged)}
    </div>
  )
}

export default App
