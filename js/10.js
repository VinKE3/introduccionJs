const tecnologias = ["HTML", "CSS", "JavaScript", "PHP"];

tecnologias.push("Python"); //? Agrega un elemento al final del arreglo

tecnologias.unshift("Java"); //? Agrega un elemento al inicio del arreglo

tecnologias.pop(); //? Elimina el ultimo elemento del arreglo

tecnologias.shift(); //? Elimina el primer elemento del arreglo

console.log(tecnologias);

const tecnologias2 = ["HTML", "CSS", "JavaScript", "PHP"];

const nuevoArreglo = [...tecnologias2, "Python"]; //? Agrega un elemento al final del arreglo
const nuevoArreglo2 = ["Java", ...tecnologias2]; //? Agrega un elemento al inicio del arreglo
console.log(nuevoArreglo);
console.log(nuevoArreglo2);

const tecnologias3 = ["HTML", "CSS", "JavaScript", "PHP"];
tecnologias3.splice(2, 1); //? Elimina un elemento del arreglo (posicion, cantidad de elementos a eliminar)
console.log(tecnologias3);

//?generar un nuevo arreglo con filter
//? el filter no modifica el arreglo original, se genera uno nuevo
const tecnologias4 = tecnologias.filter(function (tech) {
  return tech != "PHP";
}); //? Elimina un elemento del arreglo (posicion, cantidad de elementos a eliminar)
console.log(tecnologias4);
