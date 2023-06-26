//?iteradores en js
const ciudades = ["Londres", "New York", "Madrid", "Paris", "Viena"];

//? iterador en forma clasica
for (let i = 0; i < ciudades.length; i++) {
  console.log(ciudades[i]);
}

//? iterador forEach (no se puede detener) (no genera un nuevo arreglo) (no se puede usar con un objeto)
ciudades.forEach(function (ciudad) {
  console.log(ciudad);
});

//? iterador map (genera un nuevo arreglo) (se puede usar con un objeto)
const nuevoArreglo = ciudades.map(function (ciudad) {
  return ciudad;
});
console.log(nuevoArreglo);
