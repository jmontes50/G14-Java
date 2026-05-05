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
        resolve("Ganaste la apuesta!");
      }else {
        reject("Perdiste la apuesta");
      }
    }, 2000);
  })
}

UTCvsUNIVERSITARIO("UNIVERSITARIO")
.then((resPositivo) => { //resolve
  console.log({ resPositivo })
})
.catch((resNegativo) => { //reject
  console.error({ resNegativo })
})
