function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  const salarioFixo = 2000
  const bonus1 = (qtdeCarrosVendidos)=> {return Number(qtdeCarrosVendidos) * 100}
  const bonus2 =(valorTotalVendas)=>{return Number(valorTotalVendas) * 0.05}
  const salario = salarioFixo + bonus1(qtdeCarrosVendidos) + bonus2(valorTotalVendas)
  return salario
}