/*Parte 1

a) Crie um programa que faça 3 perguntas para o usuário através do prompt. Armazene a resposta de cada pergunta em uma variável.

b) Imprima no console todas as respostas.

c) Altere seu programa para que os textos das perguntas sejam armazenados em 3 variáveis diferentes.

d) Troque o texto do seu prompt pelas variáveis que contêm as perguntas.

//mandando a pergunta como texto direto
const respostaA = prompt("Você está usando uma roupa azul hoje?");

//mandando a pergunta como variável
const perguntaA = "Você está usando uma roupa azul hoje?";
const respostaA = prompt(perguntaA);

e) Altere o console para imprimir a pergunta e a resposta.

Você está usando uma roupa azul hoje? - SIM
*/

const p1="insira um numero de 1 a 3"
const p2="insira um numero de 1 a 4"
const p3="insira numero 1 a 6"
const p4="insira 0 ou 1"

const r1 = askByPrompt(p1)
const r2 = askByPrompt(p2)
const r3 = askByPrompt(p3)
const values = [r1, r2, r3, r4]



const searchDataInCourse = (values)=>{
    const modulo = "M" + values[0]
    const tipos = ["ex", "ch", "fx", "pg", "pj"]
    const tipo = tipos[values[1]]
    const subTipo = values[2]
    const isEspecial = values[3]

    const exercicioSelecionado = {

    }
}