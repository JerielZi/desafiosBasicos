/* =============================================
    CÁLCULO DE IMC (Índice de Massa Corporal)
============================================= */
// Dados da pessoa
const nome ="Jeriel"
const peso = 72.5
const altura = 1.72
const sexo = "M"

// imc é a formula para calcular o indice de massa corporal
const imc = peso / (altura * altura);

//Se o IMC é maior ou igual a 30: Jeriel vc está acima do peso;
//Se o IMC é menor que 29.9: Jeriel vc não está acima do peso;

if(imc >= 30) {
  console.log(`${nome} você está acima do peso recomendado! Seu IMC é ${imc}`);
} else {
  console.log(`${nome} você está no peso ideal! Parabéns! Seu IMC é ${imc}`);
}