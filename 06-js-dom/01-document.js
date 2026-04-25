//window representa la pestaña del navegador y es un objeto, pero no es necesario referenciarlo.
window.console.log(window);

window.navigator.geolocation.getCurrentPosition((resultado) => {
  console.log(resultado);
})

//document representa todo el document HTML
console.log(document);


const Body = document.querySelector('body');
