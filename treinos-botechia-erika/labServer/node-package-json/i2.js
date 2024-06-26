
import colors from 'colors';
colors.enable()

console.log("Bom dia Conway")
import { countries } from "./data/countries.js";
/*exercicio 01 - procurar um pais na lista*/
const query = process.argv[2]
const query2 = process.argv[3]
const buscado = "node start "



if(!query | !query2){
    console.log('argumento nao registrado')
}else{
  const result = countries.find(country=>country.name.toUpperCase().includes(query.toUpperCase()))
  const p2 = countries.find(country2=>{country2.name.toUpperCase().includes(query2.toUpperCase())})
 console.log(  buscado + query+ query2.toUpperCase().bgGreen )  
}
