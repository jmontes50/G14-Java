const inputTarea = document.querySelector("#input-tarea");
const btnTarea = document.querySelector("#btn-tarea");
const ulTareas = document.querySelector("#tareas");

// console.log({ inputTarea, btnTarea, ulTareas })

const dibujarTareas = (arrTareas) => {

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
  });

}
App();
