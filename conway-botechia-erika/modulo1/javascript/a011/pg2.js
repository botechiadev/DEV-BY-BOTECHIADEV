/*2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
    - 💡 Dica
        
        <aside>
        ⭐ Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
        Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)
        
        </aside>
        
        Se o usuário digitar "V", a saída deve ser:
        
        ```
        "Boa Tarde!"
        ```*/

const horarioAula = ()=>{

    const askOption = prompt("Insira seu turno: \n M=Matutino \n V=Vespertino \n N=NOTURNO")

 if(askOption === "M"){
        return "BOM DIA"
    }else if(askOption==="V"){
        return "BOA TARDE"
    }else if (askOption==="N"){
        return "BOA NOITE"
    }else{
        return "TURNO INVALIDO"
    }
}

console.log(horarioAula())