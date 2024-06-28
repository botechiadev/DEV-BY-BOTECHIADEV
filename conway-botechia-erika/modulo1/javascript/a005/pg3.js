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
let cao = "Thor";
let gato = "Amy";
let coleira = gato;
gato = cao;
cao = coleira;
console.log("O novo valor de cao é", cao); // O novo valor de cao é Bidu
console.log("O novo valor de gato é", gato); // O novo valor de gato é Mingau
