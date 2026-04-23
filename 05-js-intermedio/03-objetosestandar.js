const productos = [
  {
    id: 1,
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
  },
  {
    id: 2,
    nombre: 'Televisión 50 pulgadas',
    precio: 1000,
  },
  {
    id: 3,
    nombre: 'Tablet',
    precio: 500,
  },
  {
    id: 4,
    nombre: 'Audífonos',
    precio: 200,
  },
]

productos.forEach((producto) => {
  console.log(`El producto ${producto.nombre} tiene un precio de ${producto.precio}`);
})

productos.forEach(function(producto) {
  console.log(`El producto ${producto.nombre} tiene un id de ${producto.id}`);
})
