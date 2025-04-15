const  modulo = require("./calcular");


const pesoUsuario = 62;
const alturaUsuario = 1.69;

const imcUsuario = modulo.moduloCalcularIMC(pesoUsuario, alturaUsuario);
const clasificacion = modulo.moduloClasificarIMC(imcUsuario); 

console.log(`Tu IMC es: ${imcUsuario.toFixed(2)}`);
console.log(`Clasificación: ${clasificacion}`); 