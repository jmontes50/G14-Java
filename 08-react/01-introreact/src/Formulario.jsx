const Formulario = (props) => {
  console.log("Formulario:", props);
  return (
    <>
      <h3>{props.titulo}</h3>
      <label for="input-suscribete" >Email</label>
      <input
      id="input-suscribete"
      placeholder=""
      type="email"
      />
    </>
  )
}

export default Formulario;
