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

const agregarProducto = (nombre, precio, cantidad) => {
  const nuevoProducto = {
    id: productos.length + 1,
    nombre: nombre,
    precio: precio,
    cantidad: cantidad
  };
  productos.push(nuevoProducto);
};

const opciones = {
  1: mostrarInventario,
  2: verTotalInventario,
  3: () => {
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
    agregarProducto(nombre, precio, cantidad);
    return "Producto agregado exitosamente.";
  }
}

const menu = () => {
  let continuar = true;
  do {
    //do ejecuta el bloque al menos una vez
    const opcion = prompt(`
      Seleccione una opción:
        1. Mostrar Inventario
        2. Ver Total del Inventario
        3. Agregar Producto
        0: Salir
    `);
    console.log(opcion)
    console.log(typeof opcion);
    if (opcion === "0") { //cerramos el programa
      continuar = false;
    } else if (opciones[opcion]) { //truthy si la opción existe en el objeto opciones
      alert(opciones[opcion]());
    } else {
      alert("Opción no válida, por favor intente de nuevo.");
    }
    //mientras la condición sea verdadera
  } while (continuar)
}

menu();
