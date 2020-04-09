/* =============================================
  OPERADORES DE COMPARAÇÃO
  >       Maior
  <       Menor
  >=      Maior igual a
  <=      Menor igual a
  ==      Igual a
  ===     Igual e do mesmo tipo (identico)
  !=      Diferente de
  !==     Diferente, inclusive do tipo
============================================= */
// DESAFIO 1
const idade = 19
// Verificar se a pessoa tem idade maior ou igual a 18 anos
// Se sim, deixar entrar, se não, bloquear a entrada
// Se a pessoa tiver 17 anos
//Avisar para voltar quando fizer 18 anos
if(!(idade >= 18) || idade === 17) {
  console.log("Bloquear entrada")
} else {
  console.log("Deixar entrar")
}


/* =============================================
  OPERADORES LÓGICOS

  &&  "E" As duas condições devem ser verdadeiras
      para que a condição final seja verdadeira.
  ||  "OU" Uma das condições deve ser verdadeira
      para que a condição final seja verdadeira.
  !   "NÃO" Nega uma condição

============================================= */


/* =============================================
  OPERADORES ARITMÉTICOS

  *   Multiplicação
  /   Divisão
  %   Resto da divisão
  +   Adição
  -   Subtração

============================================= */

console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log(2 + 2) // 4
console.log(2 - 2) // 0