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

//JS tiene objetos estándar, como String, Number, Array, Object, etc. que nos permiten crear instancias de estos tipos de datos con métodos y propiedades predefinidos.
//Para eso usa prototipos, que es un mecanismo por el cual los objetos pueden heredar propiedades y métodos de otros objetos. Por ejemplo, el objeto String tiene métodos como toUpperCase(), toLowerCase(), etc. que podemos usar en cualquier instancia de String.
console.log(productos);

const texto = new String("Hola mundo");

console.log(texto);
