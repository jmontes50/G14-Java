const Formulario = ({ textoInput, titulo  }) => {
  // console.log("Formulario:", props);
  return (
    <>
      <h3>{titulo}</h3>
      <label htmlFor="input-suscribete" >Email</label>
      <input
      id="input-suscribete"
      placeholder={textoInput}
      type="email"
      />
    </>
  )
}

export default Formulario;
