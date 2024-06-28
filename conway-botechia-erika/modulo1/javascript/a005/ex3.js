/*
Você foi contratade para criar um programa de RH que realiza o cadastro de pessoas colaboradoras e armazena suas respostas.

Este programa deve perguntar à pessoa colaboradora:

a) Nome completo

b) Data de nascimento (utilize as / )

c) Endereço

d) CPF

e) Escolaridade

f) Possui CHN?

g) Quantos filhes possui?

h) Cargo atual

i) Salário

j) Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel

k) Informe o ano de admissão

Utilize o casting para a conversão de tipos das variáveis que recebem números.

Imprima no console o tipo de todas as variáveis.

Imprima no console um relatório da pessoa colaboradora.

*/


const registerEmployerData=()=>{
    
    
    
    let inputNome = prompt('Qual seu nome')
    let inputNascimento = ('Insira a data de nascimento no formato "dia/mes/ano" ')
    let inputEndereco = prompt('Insira seu endereco')
    let inputCpf = prompt('Insira o CPF no formato "000.000.000-x"')
    let inputIsBasicGraduated = confirm('Escolaridade minima de Ensino Medio Completado?')
    let inputIsDriver = confirm('Possui CNH ?')
    let inputNumChildren = prompt('Insira Quantos Filhos Possui')
    let inputCargo=prompt("cargoAtual")
    let inputSalary = Number(prompt("Salario Atualizado"))
    let inputAdmissionYear = Number(prompt('Ano de Admissao'))
    let inputIsBonusInSalary = confirm('Ganha comissao')


    console.log(`
          RELATORIO EMPREGADO:
          -Nome: ${inputNome}
          -Data de Nascimento: ${inputNascimento}
          -Endereco: ${inputEndereco}
          -CPF: ${inputCpf}
          -Ensino Medio Completo: ${inputIsBasicGraduated}
          -CNH: ${inputIsDriver}
          -NRO FILHOS: ${inputNumChildren}
          -CARGO: ${inputCargo}
          -SALARIO: R$:${inputSalary}
          -ANO DE ADMISSAO: ${inputAdmissionYear}  
          -RECEBE COMISSAO: ${inputIsBonusInSalary}
        `)
    }

registerEmployerData()