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

//2. map transforma un arreglo y retorna un nuevo arreglo transformado
//acceder al item, al índice y al arreglo original es algo común de los metodos de arreglos, por eso se pasan como parámetros.
let productosOferta = productos.map((prod, i, arr) => {
  return {
    ...prod,
    posicion: i,
    arregloOriginal: arr,
    precio: prod.precio * 0.8, //aplicamos un descuento del 20%
  }
})

console.log("Productos en oferta:");
console.table(productosOferta);

//3. filter filtra un arreglo y retorna un nuevo arreglo con los elementos que cumplen una condición
// let productosCaros = productos.filter((prod) => prod.precio > 400);
let productosCaros = productos.filter((prod) => {
  return prod.precio > 400;
});

console.log("Productos caros:");
console.table(productosCaros);

//find encuentra el primer elemento que cumple una condición y lo retorna, si no encuentra nada retorna undefined
let encontrarProducto = productos.find((prod) => {
  return prod.id === 2;
});

console.log("Producto encontrado:");
console.table(encontrarProducto);

//findIndex encuentra el índice del primer elemento que cumple una condición y lo retorna, si no encuentra nada retorna -1
let indiceProducto = productos.findIndex((prod) => {
  return prod.id === 2;
});

console.log("Índice del producto encontrado:", indiceProducto);

//el problema de sort es que modifica el arr original
// let ordenado = productos.sort((a, b) => {
//   return a.precio - b.precio; //orden ascendente por precio
// });
let ordenado = productos.toSorted((a, b) => {
  return a.precio - b.precio; //orden ascendente por precio
});

console.log("Productos ordenados por precio:");
console.table(ordenado);

console.log("Productos originales:");
console.table(productos);
