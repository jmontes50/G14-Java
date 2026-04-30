
// const hacerPastel = (cb) => {
//   setTimeout(() => {
//     console.log("Cancha Lista!");
//     cb();
//   }, 3000)
// }

// hacerPastel(() => {
//   console.log("Compramos bebidas");
// })

const hacerPastel = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("comprar bebidas");
      // resolve("El pastel se horneo"); //como un return, esto es positivo
      reject("El pastel se quemo");
    }, 2000)
  })
}
hacerPastel()
.then(((rpta) => { //resolve
  console.log(rpta)
}))
.catch((err) => { //reject
  console.log(err);
})

