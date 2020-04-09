/* =============================================
              CÁLCULO DA REFORMA
============================================= */

// Obs.: Esse cálculo é fictício, dentro da reforma 
// existem muitos outros fatores para serem levados
//  em conta :)

// Dados da pessoa
const nome = "Paulo"
const sexo ="M"
const idade = 64
const contribuicao = 35

//Formula para saber se a pessoa pode se reformar
const calculoContribuicao = idade + contribuicao;

//O tempo de contribuição mínimo para homens é 35 anos
//Para um homem se reformar a soma da idade e do tempo
//de contribuição precisa ser de no mínino 95 anos
const homemPodeReformar = sexo =="M" &&
                          contribuicao >= 35 &&
                          calculoContribuicao >= 95;

//O tempo de contribuição mínimo para mulheres é 30 anos
//Para uma mulher se reformar a soma da idade e do
//tempo de contribuição precisa ser no min 85
const mulherPodeApposentar = sexo =="F" &&
                             contribuicao >= 30 &&
                             calculoContribuicao >=85

if (mulherPodeApposentar || homemPodeReformar ) {
    console.log(`${nome}, você pode se reformar!`);
  }else {
    console.log(`${nome}, você ainda não pode se reformar!`);
  }
