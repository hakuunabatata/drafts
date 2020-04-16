/**
 * #f1f Indice
 * Titulos: #008
 * Subtitulos: #ff0
 * Comentarios : #f00
 * Exemplos: #0a0
 *
 * #008 SORT #008
 */

const { compras, passageiros } = require("./data");
/** #f00 Funcao sort serve par ordenar os valores de um array ou objeto. Segue a tabela ASCII
 *
 * Exemplos ordenados pela ASCII:
 *
 * [Adilson, Edmilson, adoniro]
 * [1,2,25,3]
 *
 * Precisa sempre de dois parametros na função um para ser comparado com o outro
 * #f00
 *
 * #0a0 Ordem crescente
 */
console.log(
  `Ordem crescente: ${[2, 7, 3, 8].sort((atual, proximo) => atual - proximo)}`
);
/**
 *  #f00 o retorno da função tem que ser uma expressao que resulta um valor prositivo negativo ou zero
 *  para ele saber como ordenar os valores
 *
 *
 *
 * * #0a0 Ordem decrescente
 */
console.log(
  `Ordem decrescente: ${[2, 7, 3, 8].sort((atual, proximo) => proximo - atual)}`
);

// #0a0 Ordenar carrinho de compras pela quantidade de prod ordem descrescente #0a0

carrinho = compras.sort((atual, prox) => prox.qtd - atual.qtd);

console.table(carrinho);

//#0a0 Ordenar passageiros por ordem alfabeitca #0a0

console.table(
  passageiros.sort((atual, prox) =>
    atual.name.toLowerCase() < prox.name.toLowerCase() ? -1 : 1
  )
);
