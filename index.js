// Criar um programa que calcula a média
// das nostas entre os alunos e envia
// mensagem do cálculo da média.

const alunos = [
  {
    nome:"Paulo",
    nota: 9.8
  },
  {
    nome: "Ana",
    nota: 10
  },
  {
    nome: "Bruno",
    nota: 2
  }
]

const nomeDeAlunos = ["Paulo", "João", "André"]
console.log(alunos[2])

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

// // Se a média for maior que 5, parebenizar a turma
// if (media > 5) {
//   // faz alguma coisa
//   console.log(`A média foi de ${media}. Parabéns turma`)
// } else {
//   // faz outra coisa
//   console.log(`A média foi de ${media}. Está abaixo de 5`)
// }