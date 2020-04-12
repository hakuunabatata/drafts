//#f1f Indice
// Titulos: #008
// Subtitulos: #ff0
// Comentarios : #f00
// Exemplos: #0a0

//#008 ASYNC AWAIT #008

//#0a0 ES6- #0a0

api
  .get("/yo")
  .then((response) =>
    api
      .get("/other")
      .then((newresponse) => {})
      .catch((err) => {})
  )
  .catch((err) => {});

//#0a0 ES6+ #0A0

const buscaUserAndAddress = async () => {
  try {
    const user = await api.get("/example");
    const address = await api.get(`/exemplo2/${user.id}`);
    // #f00 await substitui o '.then()' jogando o valor que retornaria dentro de uma variavel
    // ao inves de response #f00
    console.log("foi!");
    //#f00 Comando após o await só executado depois que a promise der resultado  #f00
  } catch (err) {
      console.log(err)
  }
  //#f00 try-catch:  tenta executar os comandos do try, se obtiver erro entra no catch #f00
};
