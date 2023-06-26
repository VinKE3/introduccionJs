const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = () => {
  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Siempre se ejecuta");
    });
};

consultarAPI();
