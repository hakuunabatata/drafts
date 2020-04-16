/**
 * #f1f Indice
 * Titulos: #008
 * Subtitulos: #ff0
 * Comentarios : #f00
 * Exemplos: #0a0
 *
 * #008 MAP #008
 *
 *
 * #f00 map é imutavel, sua função é como a do foreach mas retorna um novo
 * array do mesmo tamanho do array antigo #f00
 *
 *
 * #0a0 Descobrir a idade de cada passageiro #0a0
 */
const { passageiros } = require("./data");

const array = passageiros.map(
  (passageiro) =>
    `Passageiro ${passageiro.name} tem ${2019 - passageiro.birth} anos de idade`
);

console.table(array)


/**
 * #0a0 Descobrir se é um palindromo #0a0
 */

 const searchpalin = passageiros.map(passageiro => {
   []
 })