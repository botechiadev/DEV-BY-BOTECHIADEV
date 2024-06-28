/*Parte 1
Construa um programa, seguindo as instruções abaixo:

a) Declare uma variável para armazenar um nome, sem atribuir um valor a essa variável.

b) Declare uma variável para armazenar uma idade, sem atribuir um valor a essa variável.

c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

e) Depois, disso, atualize o código para perguntar ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

💡Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.

f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

g) Para finalizar, imprima na tela a mensagem: "Olá, nome, você tem idade anos". Lembre-se: nome e idade são os valores inseridos pelo usuário.

💡 Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:

console.log(valor1, valor2)*/


const askByPrompt = (askMsg) =>{
    const askPrompt = prompt(askMsg)
    const typeAnalisis = typeof Number(askPrompt) === typeof 1 ? (Number(askPrompt)): askPrompt
    return typeAnalisis
}

let value1 = askByPrompt("Insira sua idade")
let value2 = askByPrompt("Insira seu Nome"); 


const printUserNameAge=()=>{
     const idade = askByPrompt("Insira sua idade");
      const nome = askByPrompt("Insira seu Nome");
    const msg = `Olá, ${nome}, você tem ${idade} anos`
}