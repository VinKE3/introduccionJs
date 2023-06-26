//? Optional Chaining
//? el operador de encadenamiento opcional nos permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea válida.

const alumno = {
  nombre: "Juan",
  clase: "Programación",
  aprobado: true,
};
//? Si la propiedad apellido no existe, no se mostrará nada en consola
console.log(alumno?.apellido);
//? Si la propiedad nombre existe, se mostrará en consola
console.log(alumno?.nombre);
