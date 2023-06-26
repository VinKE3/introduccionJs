//?querySelector es un método que nos permite seleccionar un elemento del DOM como lo haríamos con CSS, por ejemplo, si queremos seleccionar un elemento por su clase, podemos hacerlo de la siguiente manera:
const heading = document.querySelector(".heading");

heading.textContent = "Nuevo Heading";

console.log(heading);
console.log(heading.textContent);
console.log(heading.innerText);
console.log(heading.innerHTML);
console.log(heading.tagName);

//?querySelectorAll es un método que nos permite seleccionar todos los elementos que coincidan con el selector que le pasemos como parámetro, por ejemplo, si queremos seleccionar todos los elementos con la clase navegacion, podemos hacerlo de la siguiente manera:
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);
