let productos = [
    { id: 1, nombre: "Laptop", precio: 1200, cantidad: 10 },
    { id: 2, nombre: "Smartphone", precio: 800, cantidad: 20 },
    { id: 3, nombre: "Tablet", precio: 500, cantidad: 15 }
];

function mostrarInventario() {
  return productos.map(producto => {
    return `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}`;
    //join es un método que a partir de un array une los elementos y los convierte en un string, el argumento que se le pasa es el separador entre los elementos, en este caso es un salto de línea "\n"
  }).join("\n");
}

const verTotalInventario = () => {
    const total = productos.reduce((acumulador, producto) => {
        return acumulador + (producto.precio * producto.cantidad);
    }, 0);
    return `El valor total del inventario es: $${total}`;
};

const opciones = {
    1: mostrarInventario,
    2: verTotalInventario
}

const menu = () => {
    const opcion = prompt(`
      Seleccione una opción:
        1. Mostrar Inventario
        2. Ver Total del Inventario`);
        console.log(opcion)
        console.log(typeof opcion);
}

menu();
