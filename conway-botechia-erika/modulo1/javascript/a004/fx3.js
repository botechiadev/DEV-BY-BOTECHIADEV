/*1. agora crie mais três variáveis, uma para `nomeDoUsuario`,uma para `ideiaDoDia` e outra para `dataAtual` . Considerando que é um aplicativo que será usado sempre pela mesma pessoa,  pense em quais dados serão constantemente atualizados e quais permanecerão os mesmos na hora de declarar as variáveis
2. Imprima no console a frase : Olá  `nomeDoUsuario` a sua ideia para o dia `dataAtual` é `ideiaDoDia.`
Depois mude as variáveis `dataAtual` e `ideiaDoDia` e imprima outra vez a mesma frase com novas variáveis*/

const nomeDoUsuario = "https://github.com/BotechiaDev";
let ideiaDoDia = "conway-botechia-erika";
let dataAtual = Date.now();

const msg = (nomeDoUsuario, dataAtual, ideiaDoDia) => {
  console.log(
    `Olá  ${nomeDoUsuario} a sua ideia para o dia ${dataAtual} é ${ideiaDoDia}`
  );
};

msg(nomeDoUsuario, dataAtual, ideiaDoDia);

const num1 = prompt("Insira o primeiro número");
const num2 = prompt("Insira o segundo número");

console.log("Soma:", Number(num1) + Number(num2));
console.log("Multiplicação:", Number(num1) * Number(num2));
