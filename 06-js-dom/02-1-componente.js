//Componente

const Card = (titulo, texto) => {
  //1. vamos a crear un objeto Element
  const divCard = document.createElement("div");
  //2. rellenarlo de texto como HTML
  divCard.innerHTML = `
    <h4 class="card-title">${titulo}</h4>
    <p class="card-text">${texto}</p>
    <button class="btn-card">ver más</button>
  `;


  return divCard;
}

//como regla general si Solo exportamos una sola cosa, es recomendable hacerlo como default
export default Card;
