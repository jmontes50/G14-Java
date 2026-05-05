//fetch(uri<endpoint>, config<objeto>)
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((respuesta) => {
//   console.log({ respuesta }); //guía de remisión
//   return respuesta.json();
// })
// .then((datos) => {
//   console.table(datos);
// })
// .catch((error) => {
//   console.log({ error })
// });

const hacerPeticion = async () => {
  try {
    const configuracion = {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ userId: 1, title: "Ajax", body: "Que nostalgia" })
    }
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", configuracion);
    const datos = await respuesta.json();
    console.log(respuesta);
    console.table(datos);
  } catch (error) {
    console.log({ error })
  }
}
hacerPeticion();

//implementa la peticion con XMLHttpRequest, escuchando el status de la respuesta, y parseando el resultado a un objeto de JS, luego imprimiendo el resultado en consola. En caso de error, imprimir un mensaje de error en consola.
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.addEventListener("readystatechange", function() {
//   //ver estado de xhr 1,2,3,
//   console.log({ estado: xhr.readyState });

//   if(xhr.status === 200) {
//     console.log(xhr.responseText);
//     const datos = JSON.parse(xhr.responseText);
//     console.table(datos);
//   }else {
//     console.log("Error en la respuesta");
//   }
// })
// xhr.send();
