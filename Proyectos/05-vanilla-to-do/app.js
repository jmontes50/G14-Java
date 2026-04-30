import TareaComponent from "./TareaComponent.js";

const inputTarea = document.querySelector("#input-tarea");
const btnTarea = document.querySelector("#btn-tarea");
const ulTareas = document.querySelector("#tareas");

// console.log({ inputTarea, btnTarea, ulTareas })

const dibujarTareas = (arrTareas, finalizarTarea) => {
  ulTareas.innerHTML = "";
  arrTareas.forEach((tarea, index) => {
    const elementTarea = TareaComponent(tarea, index, finalizarTarea);
    // console.log(elementTarea)
    ulTareas.appendChild(elementTarea);
  });
}

const App = () => {
  const listaTareas = [];

  btnTarea.addEventListener("click", () => {
    const textoTarea = inputTarea.value;
    console.log(textoTarea);

    const nuevaTarea = {
      descripcion: textoTarea,
      estado: false
    }

    listaTareas.push(nuevaTarea);
    inputTarea.value = "";

    console.table(listaTareas);

    const finalizarTarea = (indice) => {
      listaTareas[indice].estado = true;
      console.table(listaTareas);
      dibujarTareas(listaTareas, finalizarTarea)
    }

    dibujarTareas(listaTareas, finalizarTarea);
  });

}
App();
