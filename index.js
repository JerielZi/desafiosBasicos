// Criar um programa que calcula a média
// das nostas entre os alunos e envia
// mensagem do cálculo da média.


const aluno01 = 'Jeriel'
const notaAluno01 = 2.8

const aluno02 = 'Ana'
const notaAluno02 = 10

const aluno03 = 'Bruno'
const notaAluno03 = 2 

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// Se a média for maior que 5, parebenizar a turma
if (media > 5) {
  // faz alguma coisa
  console.log(`A média foi de ${media}. Parabéns`)
} else {
  // faz outra coisa
  console.log(`A média foi de ${media}. Está abaixo de 5`)
}