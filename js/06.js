//? destructuring de dos o mas objetos
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "Juan",
  apellido: "Gomez",
  premium: true,
};

const { nombre } = producto;
const { nombre: nombreCliente } = cliente; //? Se le asigna un nuevo nombre a la variable nombreCliente

console.log(nombre);
console.log(nombreCliente);
