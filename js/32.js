const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/photos";

const consultarAPI = async () => {
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  console.log(datos);
};
const consultarAPI2 = async () => {
  const inicio = performance.now();
  const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)]);
  const datos = await respuesta.json();
  const datos2 = await respuesta2.json();

  const fin = performance.now();
  console.log(` ${fin - inicio} ms`);
};

consultarAPI();
consultarAPI2();
