const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//? Reescribir un valor del objeto
producto.disponible = false;

//? Agregar propiedades al objeto
producto.imagen = "imagen.jpg";

//? Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);
console.table(producto);

//? spread operator para crear un nuevo objeto
const producto2 = { ...producto, nombreProducto: "Monitor 24 pulgadas" }; //? Se crea un nuevo objeto con las propiedades del objeto producto y se le agrega la propiedad nombreProducto
console.log(producto2);

//? spread operator para eliminar una propiedad del objeto y crear un nuevo objeto
const { precio, ...producto3 } = producto2;
console.log(producto3);

//?objet freeze para congelar un objeto y que no se pueda modificar
Object.freeze(producto); //? No se puede agregar, eliminar o modificar propiedades del objeto

//?objet seal para sellar un objeto y que no se pueda agregar o eliminar propiedades pero si modificar
Object.seal(producto); //? No se puede agregar o eliminar propiedades del objeto pero si modificar
