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
let nome
//b 
let idade
console.log(typeof nome )
console.log(typeof idade)

nome = prompt("Qual é seu nome")
idade = prompt("Qual é sua idade")

console.log(typeof nome)
console.log(typeof idade)

console.log(` "Olá ${nome},  você tem ${idade} anos". `);

/* 
2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    
    a) Crie três novas variáveis, contendo as respostas
    
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:*/

azul = "você está usando uma roupa azul hoje?";
console.log(azul)
azul = confirm(azul)
laranja = "você está usando uma roupa laranja hoje?";
console.log(laranja);
laranja = confirm(laranja);
amarela = "você está usando uma roupa amarela hoje?"
console.log(amarela);
amarela = confirm(amarela);


/*
3. Suponha que temos duas variáveis `cao` e `gato`, cada uma com um valor inicial
    
    ```jsx
    let cao = "Mingau"
    let gato = "Bidu"
    ```
    
    Agora, queremos trocar os valores delas, de forma que `cao` passe a ter o valor de `gato` e `gato` passe a ter o valor de `cao.` 
    
    Ou seja, no caso desse exemplo acima, `cao` passaria a ser `“Bidu”` e `gato` passaria a ser `Mingau.`
    
    ```jsx
    let cao = "Mingau"
    let gato = "Bidu"
    
    // Aqui faremos uma lógica para trocar os valores
    
    // Depois de trocados, teremos o seguinte resultado:
    console.log("O novo valor de cao é", cao) // O novo valor de cao é Bidu
    console.log("O novo valor de gato é", gato) // O novo valor de gato é Mingau
    ```
    
    Crie a lógica que deve ser inserida no código para que os valores de `cao` e `gato` sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `cao = "Bidu"` e `gato = "Mingau"` porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). 
    
    - 💡  Dica 1
        
        <aside>
        ⭐ Podemos começar fazendo com que o valor de `cao` seja igual ao que está no `gato`, então ficaria assim: `cao = gato`
        
        Nesse ponto, se déssemos um `console.log` no cao e no gato, teríamos que `cao= mingau25` e `gato = Mingau` 
        
        Mas desse jeito, a gente perdeu o valor anterior que estava em `cao`! E agora, como você poderia guardar esse valor para atribuir à variável `gato`? 🤔
        
        </aside>
        
    - 💡  Dica 2
        
        <aside>
        ⭐ Vamos supor que você tem dois copos: um copo A que tem suco de laranja e um copo B que tem coca-cola. Como você faria para trocar o conteúdo dos dois?
        
        </aside>
        
        !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9c491202-303a-45c8-a5b6-bad5925182a9/Untitled.png
        
    - 💡  Dica 3
        
        <aside>
        ⭐ Para trocar os líquidos de copo sem misturá-los, você pode pegar um copo vazio para te auxiliar!
        
        </aside>
        
        !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e5012092-6c61-4607-9089-cb40c177c6e1/Untitled.png
        
    - 💡  Dica 4
        
        !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/53b2d1f7-6b62-4d1d-90b6-2821b7270df8/Untitled.png
        
        !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32fc3eef-fcb6-4be2-9322-801e93068883/Untitled.png
        
        !https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4fb50c73-18b5-4237-bce7-9785f20a93e8/Untitled.png
        


*/
let cao = "Thor"
let gato = "Amy"
let coleira = gato
gato = cao
cao = coleira
console.log("O novo valor de cao é", cao) // O novo valor de cao é Bidu
console.log("O novo valor de gato é", gato) // O novo valor de gato é Mingau

/*
        4. Escreva um programa que pergunte ao usuário se ele gostaria de ser redirecionado para a página da Labenu. Use para isso um `confirm` e imprima a variável no console. Observe qual o valor recebido pela variável  quando apertamos o botão de `ok` e o de `cancelar`
    
    ```jsx
    const resposta = confirm(" SUA PERGUNTA AQUI ")
    ```
*/


    const resposta = confirm("Gostaria de ser redirecionado ao site da Labenu?");
    console.log(resposta)



/*
    5 . Agora avise o usuário que ele está no site da Labenu usando um `alert`. A mensagem deverá estar guardada em uma variável e esta variável deverá ser colocada dentro do alert
    
    ```jsx
    alert(minhaVariavel)
    ```
    */
let minhaVariavel = "Você está no site da Labenu"

alert(minhaVariavel)
/*
1. agora crie mais três variáveis, uma para `nomeDoUsuario`,uma para `ideiaDoDia` e outra para `dataAtual` . Considerando que é um aplicativo que será usado sempre pela mesma pessoa,  pense em quais dados serão constantemente atualizados e quais permanecerão os mesmos na hora de declarar as variáveis
2. Imprima no console a frase : Olá  `nomeDoUsuario` a sua ideia para o dia `dataAtual` é `ideiaDoDia.`
Depois mude as variáveis `dataAtual` e `ideiaDoDia` e imprima outra vez a mesma frase com novas variáveis*/

const nomeDoUsuario = "https://github.com/BotechiaDev"
let ideiaDoDia = "conway-botechia-erika"
let dataAtual = Date.now()


const msg = (nomeDoUsuario, dataAtual, ideiaDoDia)=>{ console.log(`Olá  ${nomeDoUsuario} a sua ideia para o dia ${dataAtual} é ${ideiaDoDia}`)}

msg(nomeDoUsuario, dataAtual, ideiaDoDia)

const num1 = prompt("Insira o primeiro número");
const num2 = prompt("Insira o segundo número");

console.log("Soma:", Number(num1) + Number(num2));
console.log("Multiplicação:", Number(num1) * Number(num2));