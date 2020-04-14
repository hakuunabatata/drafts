/**
 * #f1f Indice
 * Titulos: #008
 * Subtitulos: #ff0
 * Comentarios : #f00
 * Exemplos: #0a0
 *
 * #008 REDUCE #008
 *
 *
 * #f00 reduce rez um objeto a um valor unico,  possui mais de um argumento , o primeiro chamado de callback
 * que é a função como em todo highorder function e o segundo é o initialValue.
 * Além desses dentro da function tem os parametros accumulator, currentValue, index e array 
 * arra.reduce(callback(accumulator,currentValue, index, array) => {} initialValue)
 * #f00
 *
 *
 * #0a0 Valor total carrinho de compras #0a0
 * 
 */
 const {compras} = require('./data')

const valortotal = compras.reduce((acumulador, atual)=>{
    return acumulador + atual.qtd * atual.preco // #f00 valor do acumulador na proxima iteracao #f00
}, 0) // #f00 valor do acumulador antes da primeira iteracao #f00

console.table(valortotal)

// #0a0 Total de produtos em carrinho de compras #0a0 

const total = compras.reduce((soma, item) => soma + item.qtd, 0)

console.log(total)