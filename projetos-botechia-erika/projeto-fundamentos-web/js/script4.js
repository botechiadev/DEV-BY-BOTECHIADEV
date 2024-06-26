//objeto com const
const carrito = []
const comprasHTML = document.getElementById('compras')
//innertext - accede texto
const idContenedor = document.getElementById('listaGarrafas')
const listadoTermos = [
    {
        id: 0,
        marca: "360 DEGREES",
        material: "Aço inoxidável",
        cor: "Azul",
        capacidade: 1000,
        mlTermo: "mlTipoC",
        nome: "Degrees 11",
        imagen: "img/garrafa1.PNG",
        preco: 239
    },
    {
        id: 1,
        marca: "360 DEGREES",
        material: "Aço inoxidável",
        cor: "Verde",
        capacidade: 550,
        mlTermo:"mlTipoB",
        nome: "Degrees 550ml",
        imagen: "img/garrafa2.PNG",
        preco: 142.90
    },

    {
        id: 2,
        marca: "360º Degrees",
        capacidade: 750,
        mlTermo:"mlTipoB",
        cor: "Azul",
        nome: "cop: 360 Degrees",
        material: "Aço inoxidável",
        imagen: "img/garrafa3.PNG",
        preco: 174.90
    },


    {
        id: 3,
        marca: "360 DEGREES",
        material: "Aço inoxidável 18 / 8",
        cor: "Laranja",
        capacidade: 750,
        mlTermo:"mlTipoB",
        nome: " Degrees 750ml",
        imagen: "img/garrafa4.PNG",
        preco: 189.99
    },


    {
        id: 4,
        marca: "Contigo",
        material: "Plástico",
        cor: "preto",
        capacidade: 591,
        mlTermo:"mlTipoB",
        nome: "Contigomatterhornmatter Black",
        imagen: "img/garrafa5.PNG",
        preco: 88.9
    },


    {
        id: 5,
        marca: "Ekological",
        material: "Aço inoxidável",
        cor: "Cinza claro",
        capacidade: 500,
        mlTermo:"mlTipoA",
        nome: "inox parede Dupla prata ",
        imagen: "img/garrafa6.PNG",
        preco: 55.95
    },



    {
        id: 6,
        marca: "Tramontina",
        material: "Polipropeno + Vidro",
        cor: "Preto",
        capacidade:1000,
        mlTermo:"mlTipoC",
        come: "Tramontina Exata",
        imagen: "img/garrafa7.PNG",
        preco: 45.90
    },



    {
        id: 7,
        marca: "Stanley",
        material: "Aço inoxidável",
        cor: "hammertone - green",
        capacidade: 470,
        mlTermo:"mlTipoA",
        nome: "Copo térmico de cerveja ",
        imagen: "img/garrafa9.PNG",
        preco: 163.22
    },


    {
        id: 8,
        marca: "Mix",
        material: "Plástico",
        cor: "preta",
        capacidade: "1000ml",
        mlTermo:"mlTipoC",
        nome: "Wood Fashio",
        imagen: "img/garrafa10.PNG",
        preco: 97.90
    },






    {
        id: 9,
        marca: "invicta",
        material: "Aço inoxidável",
        cor: "Prata",
        capacidade: 1800,
        nome: "Air pot inox",
        imagen: "img/garrafa12.PNG",
        preco: 122.59
    },


    {
        id: 10,
        marca: "CamelBak",
        material: "Térmico",
        cor: "Preto",
        capacidade: 750,
        mlTermo:"mlTipoB",
        nome: "Garrafa",
        imagen: "img/garrafa13.PNG",
        preco: 260.06
    },


    {
    id: 11,
        marca: "COnTiGO",
        material: "Aço inoxidável",
        cor: "Rosa",
        capacidade: 384,
        mlTermo:"mlTipoA",
        nome: "SQUEEZE inFAnTiL TÉRMiCO AUTOSpOUT inOX",
        imagen: "img/garrafa14.PNG",
        preco: 135.20
    },

    {
        id: 12,
        marca: "Stanley",
        material: "polipropileno",
        cor: "preto",
        capacidade: 750,
        mlTermo:"mlTipoB",
        nome: "Classic Hydration",
        imagen: "img/garrafa15.PNG",
        preco: 252.08
    },

    {
        id: 13,
        marca: "Stanley",
        material: "Aço inoxidável",
        cor: "polar",
        capacidade: "750ml",
        mlTermo:"mlTipoB",
        nome: "Stanley QUiCKFLip",
        imagen: "img/garrafa16.PNG",
        preco: 215
    },



    {
        id: 14,
        marca: "FRATELLi",
        material: "aço inoxidável",
        cor: "Cinza",
        capacidade: 450,
        mlTermo:"mlTipoA",
        nome: "Garrafa Térmica Cinza",
        imagen: "img/garrafa1.PNG",
        preco: 51
    },


    {

        id: 15,
        marca: "TERMOpRO",
        material: "Aço inoxidável",
        cor: "Branco",
        capacidade: 500,
        mlTermo:"mlTipoA",
        nome: "Squeeze Térmico",
        imagen: "img/garrafa19.PNG",
        preco: 59
    },


    {
        id: 16,
        marca: "Contigo",
        material: "Aço inoxidável",
        cor: "Verde",
        capacidade: "591ml",
        mlTermo:"mlTipoB",
        nome: "inox Autospout",
        imagen: "img/garrafa20.PNG",
        preco: 148
    },
    {
    id: 17,
        marca: "COnTiGO",
        material: "Aço inoxidável",
        cor: "Rosa",
        capacidade: 710,
        nome: "inox AUTOSEAL",
        imagen: "img/garrafa11.PNG",
        preco: 142.03
    }
,


    {
        id: 18,
        marca: "Mimo Style",
        material: "aço inoxidável",
        cor: "preto",
        capacidade: 350,
        mlTermo:"mlTipoA",
        nome: "Garrafa Térmica Black",
        imagen: "img/garrafa17.PNG",
        preco: 82
    },


    {
    id: 19,
        marca: "COnTiGO",
        material: "Aço inoxidável",
        cor: "Rosa",
        capacidade: 384,
        mlTermo:"mlTipoA",
        nome: "SQUEEZE inFAnTiL TÉRMiCO AUTOSpOUT inOX",
        imagen: "img/garrafa14.PNG",
        preco: 135.20
    }

]

/*for(let termo of listadoTermos){

}*/


const addItemCart = (item)=>{
   if (carrito.some((termo) => termo.id === item.id)){
        const index  = (carrito.findIndex((termo) => termo.id === item.id))
           carrito[index].quantidade += 1
   }else{
        carrito.push({...item , quantidade: 1})
   }
   
}



const renderizarCarrito = (listaCarrito)=>{

    comprasHTML.innerHTML = ""
    console.log(listaCarrito)
    listaCarrito.forEach(produto =>{
    comprasHTML.innerHTML += `
    <div class="container_cart_user">
    <h2>${produto.nome}</h2>
    <div>
    <button class="btn-substract-item-cart" id="substract-item-cart-${produto.id}">-</button>
    <button class="'btn-add-item-cart" id="add-item-cart-${produto.id}">+</button>
    </div>
    <p>${produto.quantidade}</p>
 <p> ${produto.preco}</p>
   <div>
    <button id="removeItem">X</button>
  
    </div>
  </div>
    `     
}
)
const btnAddItemCart = document.getElementsByClassName('btn-add-item-cart')
const btnSubstractItemCart = document.getElementsByClassName('btn-substract-item-cart')

for(const btn of btnAddItemCart){
   addEventListener.btn("click", ()=>{
    addItemCart(btn.id.split("-").pop())
   })
}
}
const mostrarTermos = (termosCatalogo) => {
    idContenedor.innerHTML = ""
    termosCatalogo.forEach(termo => {

        idContenedor.innerHTML += `

<article>
            <h2 class="entrada-blog">${termo.nome}</h2>
            <img src="${termo.imagen}" alt="termo ${termo.id}">

<ul>
<li><strong>Referencia: </strong>#0${termo.id}</li>
<li><strong>Material: </strong>${termo.material}</>

<li>
<strong>Cor: </strong>${termo.cor}</li>

<li><strong>Capacidade: </strong>${termo.capacidade}ml</li>

<li><strong>R$ ${termo.preco}</strong></li>


</ul>

  <button class="btn-add" id="btn-add-${termo.id}">Agregar em Carrinho</button>

        </article>
`
    })
  const btnAddList = document.getElementsByClassName('btn-add')
    
  for(const btnAdd of btnAddList){

    btnAdd.addEventListener("click", (event)=>{
    console.log(Number(event.target.id.split("-").pop()))
      addItemCart(
            listadoTermos.find((termo)=>Number(event.target.id.split("-").pop()==termo.id))
      )
renderizarCarrito(carrito)
    })
    
  }   
}
// ADD PARA AUTOMATIZAR REACT

mostrarTermos(listadoTermos)



const termoHTML = document.getElementById('inputSearch')
const mlHTML = document.getElementById("mlTermo")

termoHTML.addEventListener('input', () =>
    mostrarTermos(listadoTermos.filter((termo) =>
        termo.marca.includes(inputSearch.value)
    ))
)





const catalogoMateriais =[]

