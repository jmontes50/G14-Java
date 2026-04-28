const form = document.getElementById("form-suscripcion");
const inputEmail = document.getElementById("input-email");

const arrCorreos = [];

form.addEventListener("submit", (evento) => {
  //previene el evento por defecto de un elemento ej submit recargandose, hipervnculo abriendo una dirección
  evento.preventDefault();
  // console.log("Submit!!!!");
  // console.log("holaaaaa");

  const nuevoCorreo = inputEmail.value;
  console.log({ nuevoCorreo });

  arrCorreos.push(nuevoCorreo);

  console.log({ arrCorreos });

  const jsonCorreos = JSON.stringify(arrCorreos);

  console.log({ jsonCorreos });

  //setItem clave , valor . solamente se puede guardar strings.
  localStorage.setItem("correos", jsonCorreos);


})
