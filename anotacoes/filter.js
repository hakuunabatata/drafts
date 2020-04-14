/**
 * #f1f Indice
 * Titulos: #008
 * Subtitulos: #ff0
 * Comentarios : #f00
 * Exemplos: #0a0
 *
 * #008 FILTER #008
 *
 *  #f00 Função do filter é retornar um novo array apenas com os elementos que atendem a um requisito #f00
 *
 * #0a0 Filtrar idades entre 5 - 10 anos #0a0
 *
 * #f00 retorno tem que ser booleano 'true' ou 'false' #f00
 */

const { idades, emails } = require("./data");
const filtrado = idades.filter(function (element, index, array) {
  if (element >= 5 && element <= 10) {
    return true;
  } else {
    return false;
  }
});

// console.table(filtrado);

/**
 * #f00  Parametros que não são usados podem ser emitidos da chamada da função, embora estejam presentes #f00
 */

const filtrado2 = idades.filter((element) => element >= 5 && element <= 10);

console.table(filtrado2);

/**
 * #0a0 E-mails @Gmail.com #0a0
 */

const gmails = emails.filter((email) => email.includes("@gmail.com"));

console.table(gmails);
