//?Unir dos o mas objetos
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "Juan",
  apellido: "Gomez",
  premium: true,
};

const nuevoObjeto = {
  producto,
  cliente,
};
console.log(nuevoObjeto); //? Se crea un nuevo objeto con los objetos producto y cliente

const resultado = Object.assign(producto, cliente); //? Se unen los dos objetos en el objeto producto
console.log(resultado);

const resultado2 = { ...producto, ...cliente }; //? Se unen los dos objetos en el objeto producto
console.log(resultado2);

const resultado3 = { ...producto, ...cliente, nombre: "Juan Carlos" }; //? Se unen los dos objetos en el objeto producto y se le asigna un nuevo valor a la propiedad nombre
console.log(resultado3);
