/* =============================================
        CONSTRUÇÃO E IMPRESSÃO DE OBJETOS
============================================= */

//Dados da empresa, neste caso é a GuiluComercial Lda
const user = {
  nome: 'Tiago',
  empresa: {
    nome:"GuiluComercial Lda",
    cor: "Laranja",
    foco: "Eletricidade",
    endereco: {
      rua: "Rua dos achados",
      numero: 108
  }
  }
}

//Agora vamos imprimir na tela os dados do objeto.
console.log(`A empresa ${user.empresa.nome} está 
localizada na ${user.empresa.endereco.rua}, 
número ${user.empresa.endereco.numero}`);
