console.log("1.HOLA!")


const ejecucion = (cb) => {
  setTimeout(() => {
  console.log("2. Como están?");
  cb();
}, 1000);
}

// alert("Esto es una operación bloqueante");

ejecucion(() => {
  console.log("3. tienen dudas?");
})

