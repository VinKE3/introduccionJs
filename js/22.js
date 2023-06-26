//? Scope
//?el Scope es el alcance que tienen las variables en nuestro código, es decir, el contexto en el que se encuentran definidas.

let precio = 300;

function unaFuncion() {
  let precio = 100;
  console.log(precio);
}

unaFuncion(); // 100
console.log(precio); // 300
