// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média.

const alunosDaTurmaA = [
  {
    nome:"Paulo",
    nota: 2.8
  },
  {
    nome: "Ana",
    nota: 10
  },
  {
    nome: "Bruno",
    nota: 2
  },
  {
    nome: "Mais um aluno",
    nota: 9
  }
]

const alunosDaTurmaB = [
  {
    nome:"Maria",
    nota: 8
  },
  {
    nome: "Pedro",
    nota: 6
  },
  {
    nome: "Beatriz",
    nota: 2
  },
  {
    nome:"Novo Aluno",
    nota:5
  } 
]
//Função para calcular a média
function calcularMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
    soma += alunos[i].nota;
  }
  const media = soma / alunos.length;
  return media;
}

//Chamando a função calcularMedia e atribuindo o resultado a variáveis
const media1 = calcularMedia(alunosDaTurmaA)
const media2 = calcularMedia(alunosDaTurmaB)

//Criando a função que vai enviar a mensagem sobre a média
function enviarMensagem(media, turma) {
    // Se a média for maior que 5, parebenizar a turma
  if (media > 5) {
    // faz alguma coisa
    console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
  } else {
    // faz outra coisa
    console.log(`A média da ${turma} foi de ${media}. Está abaixo de 5`)
  }
}
//Chamando a função enviarMensagem
 enviarMensagem(media1, 'turmaA')
 enviarMensagem(media2, 'turmaB')

 //Marcar aluno como reprovado se a nota
 //for menor que 5 
function marcarComoReprovado (aluno) {
  aluno.reprovado = false;
    if(aluno.nota < 5) {
      aluno.reprovado = true;
    }
}
//Enviar uma mensagem para aluno reprovado
function enviarMensagemReprovado(aluno) {
  if(aluno.reprovado) {
    console.log(`O Aluno ${aluno.nome} está reprovado!`)
  }
}
//Aqui nesta função chamamos a função que marca o aluno como reprovado
//e tbm chamamos a função que envia mensagem para o aluno reprovado
function alunoReprovado(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviarMensagemReprovado(aluno)
  }
}

// Chamamos então a função que marca e envia mensagem aos alunos reprovados
//para as duas turmas que temos
alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)
