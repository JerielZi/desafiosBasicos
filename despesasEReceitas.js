/*============================================= 
            DESPESAS E RECEITAS
============================================= */
//Dados dos utilizadores
const users = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

// Função para calcular a soma de receitas e despesas, usa função somaReceitas
function calculaSaldo(receitas, despesas) {
  const somaReceitas = somaNumeros(receitas)
  const somaDespesas = somaNumeros(despesas)

  return somaReceitas - somaDespesas
}

// Função que calcula a soma os valores dentro de uma array de números
function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
  let soma = 0;
  for (let numero of numeros) {
    soma += numero;
  }
  return soma;
}

for (let user of users) {
  const saldo = calculaSaldo(user.receitas, user.despesas)

  if ( saldo > 0 ) {
    console.log(`${user.nome} pussui saldo POSITIVO de ${saldo.toFixed(2)}`)
  } else {
    console.log(`${user.nome} pussui saldo NEGATIVO de ${saldo.toFixed(2)}`)
  }

}



