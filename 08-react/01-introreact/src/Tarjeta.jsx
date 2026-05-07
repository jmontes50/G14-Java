//import React from "react"; no es necesario

//los props llegan como un objeto con todos los props
const Tarjeta = (props) => {
  console.log(props)


  return (
    <div>
      <h3>{props.titulo}</h3>
      <p>{props.texto}</p>
      <button>Click Tarjeta!</button>
    </div>
  )
}

export default Tarjeta;
