//import React from "react"; no es necesario

//los props llegan como un objeto con todos los props
const Tarjeta = (props) => {
  console.log(props)

  const estiloTarjeta = {
    border: "2px solid blue",
    padding: "10px",
    borderRadius: "10px"
  }


  return (
    //los estilos con style tienen que ser objetos
    <div style={estiloTarjeta}>
      <h3 style={{ color: "red" }}>
        {props.titulo}
      </h3>
      <p>{props.texto}</p>
      <button>Click Tarjeta!</button>
    </div>
  )
}

export default Tarjeta;
