/* produtos loja */
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
    preco: 239,
  },
  {
    id: 1,
    marca: "360 DEGREES",
    material: "Aço inoxidável",
    cor: "Verde",
    capacidade: 550,
    mlTermo: "mlTipoB",
    nome: "Degrees 550ml",
    imagen: "img/garrafa2.PNG",
    preco: 142.9,
  },
  {
    id: 2,
    marca: "360º Degrees",
    capacidade: 750,
    mlTermo: "mlTipoB",
    cor: "Azul",
    nome: "cop: 360 Degrees",
    material: "Aço inoxidável",
    imagen: "img/garrafa3.PNG",
    preco: 174.9,
  },
  {
    id: 3,
    marca: "360 DEGREES",
    material: "Aço inoxidável 18 / 8",
    cor: "Laranja",
    capacidade: 750,
    mlTermo: "mlTipoB",
    nome: " Degrees 750ml",
    imagen: "img/garrafa4.PNG",
    preco: 189.99,
  },
  {
    id: 4,
    marca: "Contigo",
    material: "Plástico",
    cor: "preto",
    capacidade: 591,
    mlTermo: "mlTipoB",
    nome: "Matter Hornmatter Black",
    imagen: "img/garrafa5.PNG",
    preco: 88.9,
  },
  {
    id: 5,
    marca: "Ekological",
    material: "Aço inoxidável",
    cor: "Cinza claro",
    capacidade: 500,
    mlTermo: "mlTipoA",
    nome: "inox parede Dupla prata ",
    imagen: "img/garrafa6.PNG",
    preco: 55.95,
  },
  {
    id: 6,
    marca: "Tramontina",
    material: "Polipropeno + Vidro",
    cor: "Preto",
    capacidade: 1000,
    mlTermo: "mlTipoC",
    come: "Tramontina Exata",
    imagen: "img/garrafa7.PNG",
    preco: 45.9,
  },
  {
    id: 7,
    marca: "Stanley",
    material: "Aço inoxidável",
    cor: "hammertone - green",
    capacidade: 470,
    mlTermo: "mlTipoA",
    nome: "Copo térmico de cerveja ",
    imagen: "img/garrafa9.PNG",
    preco: 163.22,
  },
  {
    id: 8,
    marca: "Mix",
    material: "Plástico",
    cor: "preta",
    capacidade: "1000ml",
    mlTermo: "mlTipoC",
    nome: "Wood Fashio",
    imagen: "img/garrafa10.PNG",
    preco: 97.9,
  },
  {
    id: 9,
    marca: "invicta",
    material: "Aço inoxidável",
    cor: "Prata",
    capacidade: 1800,
    nome: "Air pot inox",
    imagen: "img/garrafa12.PNG",
    preco: 122.59,
  },
  {
    id: 10,
    marca: "CamelBak",
    material: "Térmico",
    cor: "Preto",
    capacidade: 750,
    mlTermo: "mlTipoB",
    nome: "Garrafa",
    imagen: "img/garrafa13.PNG",
    preco: 260.06,
  },
  {
    id: 11,
    marca: "COnTiGO",
    material: "Aço inoxidável",
    cor: "Rosa",
    capacidade: 384,
    mlTermo: "mlTipoA",
    nome: "SQUEEZE inFAnTiL TÉRMiCO AUTOSpOUT inOX",
    imagen: "img/garrafa14.PNG",
    preco: 135.2,
  },
  {
    id: 12,
    marca: "Stanley",
    material: "polipropileno",
    cor: "preto",
    capacidade: 750,
    mlTermo: "mlTipoB",
    nome: "Classic Hydration",
    imagen: "img/garrafa15.PNG",
    preco: 252.08,
  },
  {
    id: 13,
    marca: "Stanley",
    material: "Aço inoxidável",
    cor: "polar",
    capacidade: "750ml",
    mlTermo: "mlTipoB",
    nome: "Stanley QUiCKFLip",
    imagen: "img/garrafa16.PNG",
    preco: 215,
  },
  {
    id: 14,
    marca: "FRATELLi",
    material: "aço inoxidável",
    cor: "Cinza",
    capacidade: 450,
    mlTermo: "mlTipoA",
    nome: "Garrafa Térmica Cinza",
    imagen: "img/garrafa1.PNG",
    preco: 51,
  },
  {
    id: 15,
    marca: "TERMOpRO",
    material: "Aço inoxidável",
    cor: "Branco",
    capacidade: 500,
    mlTermo: "mlTipoA",
    nome: "Squeeze Térmico",
    imagen: "img/garrafa19.PNG",
    preco: 59,
  },
  {
    id: 16,
    marca: "Contigo",
    material: "Aço inoxidável",
    cor: "Verde",
    capacidade: "591ml",
    mlTermo: "mlTipoB",
    nome: "inox Autospout",
    imagen: "img/garrafa20.PNG",
    preco: 148,
  },
  {
    id: 17,
    marca: "COnTiGO",
    material: "Aço inoxidável",
    cor: "Rosa",
    capacidade: 710,
    nome: "inox AUTOSEAL",
    imagen: "img/garrafa11.PNG",
    preco: 142.03,
  },
  {
    id: 18,
    marca: "Mimo Style",
    material: "aço inoxidável",
    cor: "preto",
    capacidade: 350,
    mlTermo: "mlTipoA",
    nome: "Garrafa Térmica Black",
    imagen: "img/garrafa17.PNG",
    preco: 82,
  },
  {
    id: 19,
    marca: "COnTiGO",
    material: "Aço inoxidável",
    cor: "Rosa",
    capacidade: 384,
    mlTermo: "mlTipoA",
    nome: "SQUEEZE inFAnTiL TÉRMiCO AUTOSpOUT inOX",
    imagen: "img/garrafa14.PNG",
    preco: 135.2,
  },
];

const corNegra = listadoTermos.filter(fxFiltrar);

function fxFiltrar(value) {
  return value.cor === "preto";
}

/* carrito e derivados*/
let carrito = [];
const comprasHTML = document.getElementById("compras");
const comprasResultHTML = document.getElementById("comprasResult");
const idContenedor = document.getElementById("listaGarrafas");

// Função para obter o carrinho salvo no localStorage
const getCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};

// Função para salvar o carrinho no localStorage
const saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(carrito));
};

// Inicializar o carrinho com dados do localStorage, se houver
carrito = getCartFromLocalStorage();

/* adiciona 1 item ou 1 novo produto */
const addItemCart = (item) => {
  const index = carrito.findIndex((termo) => termo.id === item.id);

  if (index !== -1) {
    carrito[index].quantidade++;
  } else {
    carrito.push({ ...item, quantidade: 1 });
  }

  saveCartToLocalStorage();
  renderizarCarrito(carrito);
};

const removeItem = (item) => {
  const index = carrito.findIndex((termo) => termo.id === item.id);

  if (carrito[index].quantidade > 1) {
    carrito[index].quantidade--;
  } else {
    const confirmRemove = window.confirm("Deseja remover o item do carrinho?");
    if (confirmRemove) {
      carrito.splice(index, 1);
    }
  }

  saveCartToLocalStorage();
  renderizarCarrito(carrito);
};

const renderizarCarrito = (listaCarrito) => {
  comprasHTML.innerHTML = "";
  listaCarrito.forEach((produto) => {
    comprasHTML.innerHTML += `
      <div class="cart__item">

        <h2>${produto.nome}</h2>
        <div class="cart__data">
				 
			<img src=${produto.imagen} alt=("imagem do produto "+ ${
      produto.nome
    }) class="cart__thumbnail"/>
		<div>
          <button class="btn-substract-item-cart" id="substract-item-cart-${
            produto.id
          }">-</button>
		<span>${produto.quantidade}</span>
		  <button class="btn-plus-item-cart" id="add-item-cart-${produto.id}">+</button>
        <span>R$ ${produto.preco * produto.quantidade}</span>

        </div>
			  </div>

    `;
  });

  const btnRemoveItemCart = document.getElementsByClassName("removeItem");
  for (const btn of btnRemoveItemCart) {
    btn.addEventListener("click", (event) => {
      const termoId = Number(event.target.id.split("-").pop());
      removeItem(listadoTermos.find((termo) => termo.id === termoId));
    });
  }

  const btnPlusItemCart = document.getElementsByClassName("btn-plus-item-cart");
  for (const btn of btnPlusItemCart) {
    btn.addEventListener("click", (event) => {
      const termoId = Number(event.target.id.split("-").pop());
      addItemCart(listadoTermos.find((termo) => termo.id === termoId));
    });
  }

  const btnSubstractItemCart = document.getElementsByClassName(
    "btn-substract-item-cart"
  );
  for (const btn of btnSubstractItemCart) {
    btn.addEventListener("click", (event) => {
      const termoId = Number(event.target.id.split("-").pop());
      removeItem(listadoTermos.find((termo) => termo.id === termoId));
    });
  }
};

const mostrarTermos = (termosCatalogo) => {
  idContenedor.innerHTML = "";
  termosCatalogo.forEach((termo) => {
    idContenedor.innerHTML += `
      <article>
        <h2 class="entrada-blog">${termo.nome}</h2>
        <img src="${termo.imagen}" alt="termo ${termo.id}">
        <ul>
          <li><strong>Referencia: </strong>#0${termo.id}</li>
          <li><strong>Material: </strong>${termo.material}</li>
          <li><strong>Cor: </strong>${termo.cor}</li>
          <li><strong>Capacidade: </strong>${termo.capacidade}ml</li>
          <li><strong>R$ ${termo.preco}</strong></li>
        </ul>
        <button class="btn-add" id="btn-add-${termo.id}">Agregar em Carrinho</button>
      </article>
    `;
  });

  const btnAddList = document.getElementsByClassName("btn-add");

  for (const btnAdd of btnAddList) {
    btnAdd.addEventListener("click", (event) => {
      const termoId = Number(event.target.id.split("-").pop());
      addItemCart(listadoTermos.find((termo) => termo.id === termoId));
    });
  }
};

mostrarTermos(listadoTermos);

const termoHTML = document.getElementById("inputSearch");

termoHTML.addEventListener("input", () => {
  mostrarTermos(
    listadoTermos.filter((termo) =>
      termo.marca.toLowerCase().includes(termoHTML.value.toLowerCase())
    )
  );
});

// Inicializar o carrinho com dados do localStorage, se houver
carrito = getCartFromLocalStorage();

// Renderizar o carrinho na inicialização da página
renderizarCarrito(carrito);
