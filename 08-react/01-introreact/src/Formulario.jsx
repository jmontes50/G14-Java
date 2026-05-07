const Formulario = (props) => {
  console.log("Formulario:", props);
  return (
    <>
      <h3>{props.titulo}</h3>
      <label htmlFor="input-suscribete" >Email</label>
      <input
      id="input-suscribete"
      placeholder={props.textoInput}
      type="email"
      />
    </>
  )
}

export default Formulario;
