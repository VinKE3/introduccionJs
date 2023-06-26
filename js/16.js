const tecnologias = ["react", "angular", "vue", "node"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//?Includes - Revisa si un valor existe en un arreglo
const incluye = tecnologias.includes("react");
const noIncluye = tecnologias.includes("php");
console.log(incluye);
console.log(noIncluye);

//?FindIndex - Revisa si un valor existe en un arreglo y retorna su indice
const indice = tecnologias.findIndex((tecnologia) => tecnologia === "vue");
console.log(indice);

//?Some - Revisa si un valor existe en un arreglo y retorna true o false
const existe = numeros.some((numero) => numero > 5);
console.log(existe);

//?Find - Revisa si un valor existe en un arreglo y retorna el valor si lo encuentra
const valor = numeros.find((numero) => numero > 5);
console.log(valor);

//?Every - Revisa si todos los valores de un arreglo cumplen una condicion
const todos = numeros.every((numero) => numero > 5);
console.log(todos);

//?Reduce - Realiza una operacion con todos los valores de un arreglo y retorna un valor
const suma = numeros.reduce((total, numero) => total + numero, 0); // 0 es el valor inicial de total
console.log(suma);

//?Filter - Filtra los valores de un arreglo y retorna un nuevo arreglo con los valores filtrados
const filtrados = numeros.filter((numero) => numero > 5);
console.log(filtrados);

const filtrados2 = tecnologias.filter((tecnologia) => tecnologia !== "vue");
console.log(filtrados2);
