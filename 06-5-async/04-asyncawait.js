// const tramite = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Trámite exitoso");
//     // reject("Trámite fallido")
//   })
// }

// const tramite = async () => {
//   return "Trámite exitoso";
// }

async function tramite () {
  return "Trámite exitoso"; //resolve
  // throw "trámite fallido"; //reject
}

tramite()
.then((resultado) => {
  console.log(resultado);
})
.catch((error) => {
  console.log(error)
})
