const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");

heading.addEventListener("dblclick", () => {
  heading.textContent = "Nuevo Heading al Hacer Click";
});

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    enlace.textContent = "Nuevo Texto para Enlace";
  });
});
