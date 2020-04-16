//#f1f Indice
// Titulos: #008
// Subtitulos: #ff0
// Comentarios : #f00
// Exemplos: #0a0

// #008 ... #008

//#ff0 Desestruturação de array em variaveis distintas [REST OPERATOR] #ff0

const array = [1, 2, 3, 4, 5];
const [a, b, ...c] = array;
// #f00 quando usado o '...' em desestruturação todos os valores seguintes a ele
// serão aramazenados em um outro array (no caso de nome 'c') #f00

//#0a0 Declaração de funções 

function soma(...params){
     return Math.sum(params)
}
//#f00 '...params'  é usado quando não se tem uma quantidade de parametros definidos, quandos forem chamados
// serão aceitos e jogados dentro de um array na function #f00

//#Ff0 Copia de dados de array ou objeto em variaveis distintas [SPREAD OPERATOR] #ff0

//#0a0 ES6-
const css = {
  fontSize: 12,
  color: "#fff",
};

const tituloCss = {
  fontWeight: "bold",
  fontSize: css.fontSize,
  color: css.color,
};
//#f00 Pré ES6 para referenciar dados de outro objeto era necessario chamá-los um a um #f00

//#0a0 ES6+
const css = {
  fontSize: 12,
  color: "#fff",
};

const tituloCss = {
  fontWeight: "bold",
  ...css,
  //#f00 copia todos os dados do obj 'css' para dentro do obj 'tituloCss'
};

const novoCss = {
  ...css,
  fontSize: 20,
  //#f00 se for referenciado um valor com o mesmo nome de um valor de um objeto referenciado com '...'
  // o novo valor substituirá o do obj referenciado #f00
};
