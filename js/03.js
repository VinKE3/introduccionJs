//? Tipos de datos

//?Undefined
let cliente;
console.log(typeof cliente);

//?boolean
const descuento = true;
console.log(typeof descuento);

//?number
const puntaje = 10;
const puntaje2 = 10.2;
const puntaje3 = -10;
console.log(typeof puntaje);
console.log(typeof puntaje2);
console.log(typeof puntaje3);

//?string
const nombre = "Juan";
console.log(typeof nombre);

//?bigint
const numeroGrande = BigInt(10);
const numero = 10;
console.log(typeof numeroGrande);
// no se pueden hacer operaciones entre bigInt y number
console.log(numeroGrande + numero); //? error

//?symbol
const simbolo = Symbol();
const simbolo2 = Symbol();
console.log(simbolo === simbolo2); //? false porque cada symbol es unico

//?object
const persona = {
  nombre: "Juan",
  edad: 20,
  cliente: true,
  saldo: 1000,
};
console.log(typeof persona);
