//Componente

const Card = () => {
  //1. vamos a crear un objeto Element
  const divCard = document.createElement("div");
  //2. rellenarlo de texto como HTML
  divCard.innerHTML = `
    <h4 class="card-title">Producto1</h4>
    <p class="card-text">lorem</p>
    <button class="btn-card">ver más</button>
  `;


  return divCard;
}

//como regla general si Solo exportamos una sola cosa, es recomendable hacerlo como default
export default Card;
