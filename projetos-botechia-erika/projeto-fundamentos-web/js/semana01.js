const id_termo0 = 0
const nome_termo0 = "DEGREES 1L AZUL"
const marca_termo0 =  "360 DEGREES";
const  material_termo0 =  "Aço inoxidável";
const cor_termo0 = "Azul";
const capacidadeML_termo0 = 1000;
const stockNum_termo0 = 3;
const isStock_termo0 = true;
const preco_termo0 = 239;

const id_termo1 = 1
const nome_termo1 = "DEGREES 550ml VERDE"
const marca_termo1 =  "360 DEGREES";
const  material_termo1 =  "Aço inoxidável";
const cor_termo1 = "Verde";
const capacidadeML_termo1 = 142.9;
const stockNum_termo1 = 0;
const isStock_termo1 = false;
const preco_termo1 = 142.9

const id_termo2 = 2
const nome_termo2 = "DEGREES 11"
const marca_termo2 =  "360 DEGREES";
const  material_termo2 =  "Aço inoxidável";
const cor_termo2 = "Azul";
const capacidadeML_termo2= 750;
const stockNum_termo2= 3;
const isStock_termo2 = true;
const preco_termo2 = 189.99


const listaPrecos = [preco_termo0, preco_termo1, preco_termo2]
const listaStock = [stockNum_termo0, stockNum_termo1, stockNum_termo2]
const listaCapacidades = [capacidade_termo0, capacidade_termo1, capacidade_termo2]

function media (lista){
 return ((lista[0]+ lista[1] + lista[2])/lista.length.toFixed(2))
}

console.log("mediaPreco e R$: " + media(listaPrecos))
console.log("stock medio para cada produto)" + media(listaStock))
console.log("stock medio para cada produto)" + media(listaStock))