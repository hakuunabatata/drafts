// function soma(a,b,...outros){
//     console.log(outros)
// }

// soma(1,2,3,4,5,6)

// var array =  [1,2,3,4,5,6,7];

// array = array.map(value => value*2)
// console.log(array )

const { idades, emails, compras } = require("./data");

//#0a0 Adicionar ano nascimento para cada criança #0a0

console.table(idades.map((idade) => ({ idade, ano: 2020 - idade })));

//#0a0 Separar dominios dos emails #0a0

console.table(emails.map((email) => email.split("@")[1]));

//#0a0 Maior preço entre produtos abaixo de r$100

console.table(
  compras
    .filter((prod) => prod.preco < 100)
    //.sort((atual, prox) => atual - prox)[0]
    .reduce((maior, atual) => (maior > atual ? maior : atual), 0)
);
