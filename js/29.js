// ESM - EcmaScript Module

import { sumar as suma, restar } from "./funciones.js";

const sumar = function (a, b) {
  return a + b;
};

console.log(suma(1, 2));
console.log(restar(5, 1));
console.log(sumar(10, 2));
