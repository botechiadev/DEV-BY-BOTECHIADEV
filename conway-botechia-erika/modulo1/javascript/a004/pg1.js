/*
let a = 10
let b = 10
//10
console.log(b)

b = 5
console.log(a, b)
// 10 , 5
*/

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

/*
1. Construa um programa, seguindo os seguintes passos:
    
    a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    
    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    
    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    
    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    
    e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

*/
//a
let value1;
//b
let value2;
console.log(typeof value1);
console.log(typeof value2);

nome = prompt("Qual é seu nome");
idade = prompt("Qual é sua idade");

console.log(typeof value1, typeof value2);

console.log(` "Olá ${value1},  você tem ${value2} anos". `);



