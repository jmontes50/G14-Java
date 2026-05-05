const tramite = () => {
  return new Promise((resolve, reject) => {
    resolve("Trámite exitoso");
    // reject("Trámite fallido")
  })
}

// const tramite = async () => {
//   // return "Trámite exitoso";

//   throw "trámite fallido";

//   console.log("holaaaa")
// }

// async function tramite () {
//   const resultado = Math.random();
//   console.log({ resultado })
//   if(resultado >= 0.5) {
//     return "Trámite exitoso"; //resolve
//   }else {
//     throw "trámite fallido"; //reject
//   }
// }

// capturando el resultado de la promesa con then y catch
// tramite()
// .then((resultado) => {
//   console.log(resultado);
// })
// .catch((error) => {
//   console.log(error)
// })


const obtenerResultado = async () => {
  //trycatch capturar el resultado de promesas y capturar excepciones/errores
  try { //intenta esto
    const resultadoTramite = await tramite(); //then
    console.log({ resultadoTramite });
  } catch (error) { //en caso que falle, catch
    console.log({ error })
  }
}
obtenerResultado();
