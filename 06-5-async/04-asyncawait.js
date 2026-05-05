// const tramite = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Trámite exitoso");
//     // reject("Trámite fallido")
//   })
// }

// const tramite = async () => {
//   // return "Trámite exitoso";

//   throw "trámite fallido";

//   console.log("holaaaa")
// }

async function tramite () {
  const resultado = Math.random();
  console.log({ resultado })
  if(resultado >= 0.5) {
    return "Trámite exitoso"; //resolve
  }else {
    throw "trámite fallido"; //reject
  }
}

tramite()
.then((resultado) => {
  console.log(resultado);
})
.catch((error) => {
  console.log(error)
})
