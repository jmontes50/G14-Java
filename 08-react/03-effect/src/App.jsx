import { useState, useEffect } from "react"

const App = () => {
  const [logged, setLogged] = useState(false);
  const [counter, setCounter] = useState(1000);

  console.log("1. después de estados!!!!")

  const manejarBoton = () => {
    console.log("!!!")
    setLogged(!logged);
  }

  useEffect(() => {
    console.log("2. useEffect!!!!")
    // console.log("LOGGED:", logged);

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if(response.status === 200){
        return response.json();
      }else{
        throw new Error("Error en peticion")
      }
    })
    .then((data) => {
      console.table(data)
    })
    .catch((err) => {
      console.log(err)
    })

  }, [])

  return (
    <div>
      {console.log("3. estoy dentro del return")}
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
