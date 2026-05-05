//fetch(uri<endpoint>, config<objeto>)
fetch("https://jsonplaceholder.typicode.com/posts")
.then((respuesta) => {
  console.log({ respuesta }); //guía de remisión
  return respuesta.json()
})
.then((datos) => {
  console.table(datos);
})
.catch((error) => {
  console.log({ error })
})
