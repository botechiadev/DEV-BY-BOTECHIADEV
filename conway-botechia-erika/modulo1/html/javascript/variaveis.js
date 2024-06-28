// VARIAVEIS

// W-C
/*
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
*/


// b<=10
// a<=10, c<=5
/*
let a = 10
//a:10
let b = 20

c = a

//c:10
b = c
b:10
a = b

console.log(a, b, c)
// 10, 10 , 10
*/ 

/*
let periodoTrabalho = prompt("Quantas horas você trabalha por dia?")
let salarioDia = prompt("Quanto você recebe por dia?")
let t = Number(periodoTrabalho)
let p = Number(salarioDia)
alert(`Voce recebe ${t/p} por hora`)

*/

// P-G


/*
1. Construa um programa, seguindo os seguintes passos:
    
    a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    
    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    
    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    
    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    
    e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

*/

let value1, value2;
console.log(typeof value1, typeof value2)
// undefined pq nao atribuo valores a variaveis



value1 = prompt("Qual seu nome")
value2 = Number(prompt ("Qual sua idade"))
console.log(typeof value1, typeof value2)

// string e number referentes a valores de inputs preenchidos por usuarios

// C-G