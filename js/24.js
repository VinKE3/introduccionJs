const heading = document.querySelector(".heading");

// heading.textContent = "Nuevo Heading";
// heading.classList.remove("text-4xl");

const inputNombre = document.querySelector("#nombre");
inputNombre.value = "Juan";

const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = "Nuevo Texto para Enlace";
console.log(enlaces);
