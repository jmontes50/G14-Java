
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
      // console.log("comprar bebidas");
      resolve("El pastel se horneo"); //como un return, esto es positivo
      // reject("El pastel se quemo");
    }, 2000)
  })
}

const comprarBebidas = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("se consiguieron las bebidas")
  }, 1000)
})

hacerPastel()
.then(((rpta) => { //resolve
  console.log(rpta)
  // comprarBebidas()
  // .then(() => {})
  //encadenamieto de promesas
  return comprarBebidas(); //retornamos una nueva promesa
}))
.then((rpta) => {
  console.log(rpta);
  //return otrafuncionquemedaunapromesa()
})
.catch((err) => { //reject
  console.log(err);
})

//------------------ try/catch

const registro = (nombre) => {
  try {
    console.log("estoy en un registro.")
  } catch (error) {
    console.log(error);
  }
}

registro("Jorge");
