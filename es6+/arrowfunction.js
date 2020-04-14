//#f1f Indice
// Titulos: #008
// Subtitulos: #ff0
// Comentarios : #f00
// Exemplos: #0a0

//#008 ARROW FUNCTIONS #008

//#ff0 Funções nomeadas #ff0

function somar(a, b) {
  return a + b;
}

//#ff0 Chamar funções Nomeadas #ff0
console.log(somar(2, 3));

//#ff0 Funções Anonimas Pré ES6 #ff0

$.ajax({ url: "http://..." }).then(function (response) {
  this;
});
// #f00 Função anonima é chamada quando algo acontece no programa e a chama automaticamente #f00

function teste() {
  this.something;
  // #f00 variavel '''this''' procura algo com o nome da variavel somente dentro do escopo que está inserido #f00
  // #f00 Arrow function não precisa do '''this''' #f00
}

// #ff0 Arrow Function #ff0

$.ajax({ url: "http...." }).then((response) => {});

// #f00 Arrow function substitui a palavra '''function''' antes dos parametros da função,
// para um sinal de ''''=>''' após eles #f00

//#0a0 Sem Arrow function

class Usuario {
  nome = "Evandro";
  empresa = "Intellibrand";

  constructor() {
    this.mostrarNome.bind(this);
  }

  mostrarNome() {
    console.log(this.nome);
    console.log(this.empresa);
    //#f00 Ao acessar a função dessa forma ela não reconhecerá o nome por conta do this, escopo local #f00
  }
}

//#0a0 Com Arrow function

class Usuario {
  nome = "Evandro";
  empresa = "Intellibrand";

  mostrarNome = () => {
    console.log(this.nome);
    console.log(this.empresa);
    // #f00 utilizando arrow function irá funcionar, pois ela não cria um novo escopo de this
  };
}

//#0a0 Sem arrow function

const array = [1, 2, 3, 4, 5, 6];

array.forEach(function (item, index) {
  array[index] = item * 2;
});

//#0a0 Com arrow function

array = array.map((item) => {
  return item * 2;
});

//#f00 diferenças entre forEach e Map :
//  -forEach apenas percorre o array e não tem retorno.
//  -map além de percorrer o array retorna o array modificado após o laço #f00

array = array.map(item => item * 2);
//#f00 -Arrow function quando só tem um parametro não precisa de parenteses envolta dos parametros.
//  -Se função tem apenas retorno não é necessário '''{}''' ou '''return''' #f00

//#0a0 Promises Com Arrow function

api.get("/users/hakuunabatata").then((response) => tratarResponse(response));

//#0a0 Arrow functions JSX - função com somente retorno mas com mais de uma linha

const retornaJSX = () => (
  <div class="contaner">
    <h1>Hello World</h1>
  </div>
);
//#f00 quando o retorno tem mais de uma linha pode-se usa-lo entre parenteses #f00

//#0a0 Retorno objetos

const retornaObj = () => ({
  a: 1,
  b: 7,
});
//#f00 no caso de objetos também se utiliza parenteses em volta do objeto
//pois as '''{}''' indicam função e não objeto #f00
