//?template strings o concatenacion de strings

const cliente = "Kevin";
const saldo = 500;

//?Concatenar
console.log(
  "El cliente " + cliente + " tiene un saldo de " + saldo + " dolares"
);
console.log(`El cliente ${cliente} tiene un saldo de ${saldo} dolares`);

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

console.log(
  `El producto ${producto.nombre} tiene un precio de ${producto.precio} dolares`
);
