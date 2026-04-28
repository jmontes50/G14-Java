const form = document.getElementById("form-suscripcion");
const inputEmail = document.getElementById("input-email");

form.addEventListener("submit", (evento) => {
  //previene el evento por defecto de un elemento ej submit recargandose, hipervnculo abriendo una dirección
  evento.preventDefault();
  console.log("Submit!!!!")
})
