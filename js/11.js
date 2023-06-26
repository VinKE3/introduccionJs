//? destrucuring de arrays (extraer valores de un arreglo)

const tecnologias = ["HTML", "CSS", "JavaScript", "PHP"];

const [html, css, js, php] = tecnologias;
console.log(html);
console.log(css);
console.log(js);
console.log(php);

const tecnologias2 = ["HTML", "CSS", "JavaScript", "PHP"];

const [html2, css2, , php2] = tecnologias2;
console.log(html2);
console.log(css2);
console.log(php2);
