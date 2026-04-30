const inputTarea = document.querySelector("#input-tarea");
const btnTarea = document.querySelector("#btn-tarea");
const ulTareas = document.querySelector("#tareas");

// console.log({ inputTarea, btnTarea, ulTareas })

const App = () => {

  btnTarea.addEventListener("click", () => {
    const textoTarea = inputTarea.value;
    console.log(textoTarea);
  })
}
App();
