//? Operadores ternarios (ternary operator)
//? (condicion) ? true : false;

const disponible = 1000;
const total = 300;
const tarjeta = true;

disponible > total || tarjeta
  ? console.log("Pago realizado con exito")
  : console.log("Fondos insuficientes");
