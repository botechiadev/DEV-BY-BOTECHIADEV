let partial00A = `
  <nav class="menu" id="idMenu">
    <h1><img src="IMG/logo.png" alt="logo BraDEV" class="logoBrand" /></h1>
    <ul class="menu__item">
      <li class="item">
        <input type="text" id="inputSearch" placeholder="MARCA BUSCADA">
        <button>Buscar</button>
        <button class="btnMenu" id="buttonMenu"><i class="fa-solid fa-bars"></i></button>
      </li>
    </ul>
  </nav>
  <aside class="asideNavBar" id="menuBar">
    <div class="switchBar">
      <button class="btnSwitch" id="btnSwitch-01">HOME</button>    
      <button class="btnSwitch" id="btnSwitch-02">PROJETOS</button>      
      <button class="btnSwitch" id="btnSwitch-03">MODULOS</button>    
      <button class="btnSwitch" id="btnSwitch-04">TEMAS</button>   
      <button class="btnSwitch" id="btnSwitch-05">LOGIN</button>     
    </div>  
    <div class="wishList">


    </div>
  </aside>
`;

const templateEmptyList=[...templateInicial]


const templateWishList =`


`


const template_course_content = `
        <h4>Conteúdo do Curso</h4>
        <ul>
          <li>
            <h2>Módulo 1</h2>
            <ul>
              <li><em>Fundamentos JS</em></li>
              <li>Introdução ao desenvolvimento Web</li>
            </ul>
          </li>
          <li>
            <h2>Módulo 2</h2>
            <ul>
              <li><strong>Front-end com React</strong></li>
            </ul>
          </li>
          <li>
            <h2>Módulo 3</h2>
            <ul>
              <li><u>Backend</u></li>
            </ul>
          </li>
          <li>
            <h2>Módulo 4</h2>
            <ul>
              <li>Testes e <strong>deploy</strong></li>
            </ul>
          </li>
        </ul>
      </article>

`

let partial00B = `
  <footer class="fixed2">
    <p>&copy; MADE BY <a href="https://github.com/botechiaDev" target="_blank">@BotechiaDev</a></p>
  </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  let id00 = document.getElementById('id00A');
  let id01 = document.getElementById('id00B');
  id00.innerHTML += partial00A;
  id01.innerHTML += partial00B;

  let x = document.querySelector('#buttonMenu');
  let y = document.querySelector('#menuBar');

  x.addEventListener('click', () => {
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
  });

  const myFunction1 = () => { console.log('hello1'); }
  const myFunction2 = () => {
    document.getElementById('mainPage').innerHTML = `
      <main>
        <section>
          <h2 class="h2">Aulas</h2>
          <ul id="list"></ul>
        </section>
      </main>`;
    renderCourses(document.getElementById('list'));
  }
  const myFunction3 = () => { console.log('hello3'); }
  const myFunction4 = () => { console.log('hello4'); }
  const myFunction5 = () => { console.log('hello5'); }

  document.getElementById("btnSwitch-01").addEventListener("click", myFunction1);
  document.getElementById("btnSwitch-02").addEventListener("click", myFunction2);
  document.getElementById("btnSwitch-03").addEventListener("click", myFunction3);
  document.getElementById("btnSwitch-04").addEventListener("click", myFunction4);
  document.getElementById("btnSwitch-05").addEventListener("click", myFunction5);
});

const section2 = `
<section>
  <h4>Conteúdo do Curso</h4>
  <ol>
    <li>
      <h2>Javascript</h2>
      <ul>
        <li>Váriaveis</li>
        <li>Operadores</li>
        <li>Funções</li>
        <li>Laços e Condicionais</li>
      </ul>
    </li>
    <li>
      <h2>HTML</h2>
      <ul>
        <li>Elementos</li>
        <li>Atributos</li>
        <li>Textos</li>
        <li>Listas</li>
      </ul>
    </li>
    <li>
      <h2>CSS</h2>
      <ul>
        <li>Seletores e Posições</li>
        <li>Classes e Ids</li>
        <li>Flex</li>
        <li>Grid</li>
      </ul>
    </li>
  </ol>
</section>
`;

const curso1 = {
  idCurso: 1,
  curso: "HTML e CSS",
  descricao: "Aprenda a estrutura e a estilização",
  duracaoMeses: 6,
  valorNormal: 800,
  requisitos: "NAO REQUER Conhecimentos Previos de Programacao",
}

let c1 = curso1;
let idC1 = c1.idCurso;
let nC1 = c1.curso;
let t1 = c1.duracaoMeses;
let dC1 = c1.descricao;
let vNC1 = c1.valorNormal;
let rC1 = c1.requisitos;

const c2 = {
  ...c1,
  idCurso: 2,
  curso: "Especializacao DOM",
  descricao: "Aprofunde seus conhecimentos em DOM para melhor manipulacao da logica e aplicacao de JS e frameworks derivados",
  duracaoMeses: 3,
  valorNormal: 1200,
  requisitos: "REQUER Conhecimentos Previos de JAVASCRIPT en FRONT-END e de estruturacao de paginas web com CSS e JS",
}

const c3 = {
  ...c2,
  idCurso: 3,
  curso: "Especializacao REACT",
  descricao: "Construa paginas com a metodologia SPA e o framework queridinho das empresas na ESPECIALIZACAO REACT PLENO",
  duracaoMeses: 4,
  valorNormal: vNC1 * 2,
  requisitos: "REQUER Conhecimentos Previos de JAVASCRIPT en FRONT-END e de estruturacao de paginas web com CSS e JS e nocoes de SPA",
}

const c4 = {
  ...c3,
  idCurso: 4,
  curso: "API REST PLENO",
  descricao: "FOCADO EM FULLSTACK DEVLOPERS JR",
  duracaoMeses: 4,
  valorNormal: vNC1 * 2,
  requisitos: "conocimento equivalente a desenvolvedor web fullstack JR",
}

const listaCursos = [c1, c2, c3, c4];

class Projeto{
  constructor(id, titulo, deploy, repo, pitch, descricao, modulo, imgUrl){
    this.id=id
    this.titulo=titulo
    this.deploy=deploy
    this.pitch=pitch
    this.repo=repo
    this.descricao=descricao
    this.modulo = modulo
    this.imgUrl = imgUrl
  }


  cardBuilder(){
    template = `
      <article class="card">
      <div>
        <h2>${this.titulo}</h2>
        <span>${this.modulo}</span>
      </div>
        <img src=${this.imgUrl} alt="img do projeto"/>
        <div>
        <a href=${this.deploy}><i class="fa-solid fa-globe"></i></a>
        <a href=${this.repo}><i class="fa-brands fa-github"></i></a>
        <a href=${this.pitch}><i class="fa-solid fa-video"></i></a>
        </div>
      </article>
    
    `
  }

}

const template = `
<div class="template1">
  <header>
    <h2 class="titlePage">Bra.DEV</h2>
    <span>DEVs colaborando para aprender e melhorar suas skills</span>
  </header>
  <section class="container">
    <div class="banner">
      <h3></h3>
    </div>
  </section>
</div>
`

function renderCourses(list) {
  for (let i = 0; i < listaCursos.length; i++) {
    list.innerHTML += `<article class="card">
      <p>Curso #00${listaCursos[i].idCurso}</p>
      <img src="IMG/cursos/tipo-${listaCursos[i].idCurso}.png" alt="Imagem card curso ${listaCursos[i].curso}">
      <h3>${listaCursos[i].descricao}</h3>
      <p>${listaCursos[i].requisitos}</p>
      <a class="card__botao" href="../bra-dev/cursos/tipo-${listaCursos[i].idCurso}">ver más</a>
    </article>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let mainHtml = document.getElementById('mainPage');
  mainHtml.innerHTML += template;
});
