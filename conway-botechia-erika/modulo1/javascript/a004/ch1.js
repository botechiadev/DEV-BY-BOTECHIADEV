/*1. Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
    
    ```
    1. O primeiro número somado ao segundo número resulta em: x.
    2. O primeiro número multiplicado pelo segundo número resulta em: y.
    ```
    
    - 💡  Dica
        
        <aside>
        ☝ Se os resultados das operações não estiverem corretos, reflita sobre o **tipo dos valores recebidos pelo prompt.**
        
        </aside>
    */

const ch1Operation = ()=>{
    n1 = Number(prompt("insira primeiro numero"))
    n2 = Number(prompt("insira segundo numero"))


    if(n1, n2 &&n1 != NaN && n2 !== NaN){
        const x  =  n1 + n2
        const y = n1 * n2
        
      const msgX = `1. O primeiro número somado ao segundo número resulta em: x = {x}.`
      const msgY = `2. O primeiro número multiplicado pelo segundo número resulta em: y = ${y}.`
      const msg4Print = msgX + `\n` + msgY

      console.log(msg4Print)
    }else{
        console.log('Error')
    }
}

ch1Operation()