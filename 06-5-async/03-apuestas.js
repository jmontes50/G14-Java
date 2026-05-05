const UTCvsUNIVERSITARIO = (equipo) => {
  //resolve, bueno
  //reject, malo
  return new Promise((resolve, reject) => {
    //codigo asíncrono
    setTimeout(() => {
      const resultado = Math.random(); //entre 0 y 1, 0.4 0.2 0.78
      console.log({ resultado })
      const ganador = resultado < 0.5 ? "UTC" : "UNIVERSITARIO";
      if(ganador === equipo) {
        resolve("Ganaste la apuesta 1!");
      }else {
        reject("Perdiste la apuesta 1");
      }
    }, 2000);
  })
}

const SCvsALIANZA = (equipo) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const resultado = Math.random(); //entre 0 y 1, 0.4 0.2 0.78
      console.log({ resultado })
      const ganador = resultado < 0.5 ? "SC" : "ALIANZA";
      if(ganador === equipo) {
        resolve("Ganaste la apuesta 2!");
      }else {
        reject("Perdiste la apuesta 2");
      }
  }, 3000)
})

console.log("APOSTANDO")

UTCvsUNIVERSITARIO("UNIVERSITARIO")
.then((resPositivo) => { //resolve UTCvsUNIVERSITARIO
  console.log({ resPositivo })
  return SCvsALIANZA("SC");
})
.then((resPositivo2) => { //resolve SCvsALIANZA
  console.log({ resPositivo2 });
  //return nuevaPromesa
})
.catch((resNegativo) => { //reject, de las promesas que tengamos arriba
  console.error({ resNegativo })
})

console.log("ESTOY DEBAJO DE LAS PROMESAS ESPERANDO EL RESULTADO")

console.log("FIN DEL SCRIPT")
