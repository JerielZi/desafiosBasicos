/*============================================= 
          UTILIZADORES E TECNOLOGIAS
============================================= */

// Dados dos utilizadores
const users = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Joana", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Bruna", tecnologias: ["HTML", "Node.js"] }
]

//Estrutura de repetição para mostar informações sobre os utilizadores
// for (let i = 0; i < users.length; i++) {
//   console.log(`${users[i].nome} trabalha com 
//   ${users[i].tecnologias[0]}, ${users[i].tecnologias[1]}`)
// }

// for (let user of users ) {
//   console.log(`${user.nome} trabalha com ${user.tecnologias.join(',')}`)
// }
//Busca por tecnológia
function checarSeUserUsaCSS(user) {
  for (let tecnologia of user.tecnologias) {
    if (tecnologia == "CSS") return true
    }
    return false  
}

//Estrutura de repetição que verifica se o utilizador trabalha com CSS
for (let i = 0; i < users.length; i++) {
  const userTrabalhaComCSS = checarSeUserUsaCSS(users[i]);

  if (userTrabalhaComCSS) {
  console.log(`O utilizador ${users[i].nome} trabalha com CSS`);
  }
}

