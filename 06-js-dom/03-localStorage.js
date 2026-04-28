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

  console.log("------------------");

  const correosLeidos = localStorage.getItem("correos");

  console.log({ correosLeidos });

  const objCorreosLeidos = JSON.parse(correosLeidos);

  console.log({ objCorreosLeidos });

  //ejecuta una función en un tiempo X (ms)
  setTimeout(() => {
    //removeItem remueve un item de localStorage
    // localStorage.removeItem("correos");

    const info = localStorage.getItem("correos"); //string "[email, email]""
    const arr = JSON.parse(info); //Array [email, email]
    console.log({ arr })
    arr.splice("coyote@acme.com", 1) //remover 01 item de un array
    console.log("despues de eliminars", arr)
    const arrAsString = JSON.stringify([...arr, "correcaminos@acme.com"]);
    console.log({ arrAsString })
    localStorage.setItem("correos",arrAsString); //guardar de nuevo
  }, 6000)
})

