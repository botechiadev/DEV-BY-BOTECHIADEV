/*
 a) Peça ao usuário que insira um número par

 b) Imprima na console o resto da divisão desse número por 2.

 c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

 d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

const isEvennOdd = (n1)=>{
    const numNumber = num(n1)
    
    if(numNumber == 0){
        return("0 = PAR")
    }
    else if(numNumber != NaN){
        const checkEvenOdd = (numNumber) => numNumber%2 == 0? (true):(false)
        return checkEvenOdd
    }else i
    {
        return "dado invalido"
    }
}

const perguntaNumero = Number(prompt("Insira um numero"))

isEvennOdd(perguntaNumero)