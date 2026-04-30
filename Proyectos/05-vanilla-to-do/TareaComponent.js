/**
 *
 * @param {object} objTarea tiene descripcion y estado
 * @returns {object} de tipo Element que representa un li
 */
const TareaComponent = (objTarea) => {
  const liTarea = document.createElement("li");
  liTarea.innerHTML = `
  <li class="list-row flex gap-2 items-center">
    <span>${objTarea.descripcion}</span>
    <button class="btn btn-sm" data-selector="btn">
      Finalizar
    </button>
  </li>
  `;

  const btn = liTarea.querySelector("button[data-selector='btn']")

  btn.addEventListener("click", () => {
    console.log("Eliminar!!!")
  })

  return liTarea;
}

export default TareaComponent;
