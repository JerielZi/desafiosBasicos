/* =============================================
                ARRAYS E OBJETOS
============================================= */

//Dados dos programador
const programador = {
    nome: "Paulo", idade: 35,
    tecnologias : [
      {nome: 'C++', especialidade: 'Desktop' },
      {nome: 'Python', especialidade: 'Data Science' },
      {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
}

//Imprimir os dados sobre os programador
console.log(`O utilizador ${programador.nome} tem 
${programador.idade} anos e usa a tecnologia ${programador.tecnologias[2].nome}
 com especialidade em ${programador.tecnologias[2].especialidade}`)
