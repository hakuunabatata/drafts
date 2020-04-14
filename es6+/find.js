/**
 * #f1f Indice
 * Titulos: #008
 * Subtitulos: #ff0
 * Comentarios : #f00
 * Exemplos: #0a0
 * 
 * 
 * #008 FIND #008
 *
 *
 * #f00 find tem a função de encontrar dentro de um obj um determinado valor #f00
 *
 *
 * #0a0 Encontrar alguém chamado Dirlé em um obj de passageiros #0a0
 */

const { passageiros } = require("./data");
const Dirle = passageiros.find((passageiro) => 
  passageiro.name == "Dirlé"
);

console.table(Dirle);
