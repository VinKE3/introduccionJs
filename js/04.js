//?Objetos son colecciones de propiedades y metodos que se almacenan en una variable
//?Los objetos tienen propiedades y metodos
//?Las propiedades son caracteristicas del objeto
//?Los metodos son funciones del objeto
//?Los objetos se pueden crear con la sintaxis de objeto literal
//?Los objetos se pueden crear con la sintaxis de constructor

//?Objeto literal
const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

console.log(producto);
console.table(producto);

//?Destucturing para extraer los valores del objeto (sacar valores del objeto)
const { nombreProducto } = producto;
console.log(nombreProducto);

//?Objeto literal enhacement (agregar propiedades al objeto)
const banda = "Metallica";
const genero = "Heavy Metal";
const canciones = ["Master of Puppets", "Seek & Destroy", "Enter Sandman"];

const metallica = {
  band: banda,
  gener: genero,
  canciones,
};
console.log(metallica);
