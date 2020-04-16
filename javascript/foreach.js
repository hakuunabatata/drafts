/**
 * #f1f Indice
 * Titulos: #008
 * Subtitulos: #ff0
 * Comentarios : #f00
 * Exemplos: #0a0
 *
 * #008 FOREACH #008
 *
 *
 * #f00 foreach não é imutavel e não retorna um novo array,
 * sua função é executar um comando para cada valor do array salvar mudança no array original #f00
 *
 *
 * #0a0 Adicionar o campo idade para cada obj do array #0a0
 */
const { passageiros } = require("./data");

passageiros.forEach((passageiro) => (passageiro.age = 2020 - passageiro.birth));

console.table(passageiros)
