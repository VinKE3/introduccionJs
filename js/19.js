//? Operador || (OR) y && (AND)

const disponible = 1000;
const total = 300;
const tarjeta = true;

if (total > disponible) {
  console.log("Fondos insuficientes");
} else if (tarjeta) {
  console.log("Pagaste con tarjeta");
} else {
  console.log("Pagaste con efectivo");
}

//? Operador || (OR) y && (AND)

if (total > disponible || tarjeta) {
  console.log("Pago realizado");
}

if (total < disponible && tarjeta) {
  console.log("Pago realizado");
} else {
  console.log("Fondos insuficientes");
}
