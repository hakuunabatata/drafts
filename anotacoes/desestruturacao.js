//#f1f Indice
// Titulos: #008
// Subtitulos: #ff0
// Comentarios : #f00
// Exemplos: #0a0

//#008 DESESTRUTURAÇÃO #008

//#ff0 DESESTRUTURAÇÃO OBJETO #ff0

//#0a0 Declaração de objeto para ser desestruturado
const endereco = {
  rua: "R. Dora Franco",
  numero: 37,
  uf_cidade: {
    uf: "SP",
    cidade: "Jundiaí",
  },
};

//#0a0 Desestruturação Pré ES6
const rua = endereco.rua;
const numero = endereco.numero;
const uf = endereco.uf_cidade.uf;
const cidade = endereco.uf_cidade.cidade;

//#0a0 Desestruturação Pós ES6

const {
  rua,
  numero,
  uf_cidade: { uf, cidade },
} = endereco;

//#ff0 DESESTRUTURAÇÃO DE ARRAy #FF0

const array = [1, 2, 3];

const [a, b, c] = array;

//#f00 é usado para armazenar dados especificos do array em variaveis distintas #f00 

