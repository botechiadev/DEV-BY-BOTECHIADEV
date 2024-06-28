/*

1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

*/



console.log('loading pg1')


const printMsg1orMsg2 = ()=>{
    let age = Number(askByPrompt("Qual e sua idade"));
    console.log(age)
    const is18OrMore = age >= 18;

    const is18Compare = checkTrueSendFloat(is18OrMore);
    
    const res = (age, is18Compare, is18OrMore)=>is18Compare === 1 ?("DRIVER"): ("FORBIDDEN")
    console.log(res(age, is18Compare, is18OrMore))
}

printMsg1orMsg2()