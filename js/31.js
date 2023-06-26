const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = async () => {
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Siempre se ejecuta");
  }
};

consultarAPI();
