import { useState } from 'react'
import p001 from './../../assets/cards/p001.png'
import p002 from './../../assets/cards/p002.png'
import p003 from './../../assets/cards/p003.png'
import p004 from './../../assets/cards/p004.png'
import p005 from './../../assets/cards/p005.png'
import p006 from './../../assets/cards/p006.png'
import p007 from './../../assets/cards/p007.png'

import { GalleryContainer } from './styled.Gallery'
import { TbBrandGithubFilled } from "react-icons/tb";
import { TbWorldWww } from "react-icons/tb";

export default function Gallery() {

const [list, setList] = useState([
  {
    id: "card1",
    title: "Mercadinho Simples Api Frontend",
    description:
      "Projeto que permite integracao completa entre conceitos de react e consumo de apis propria ",
    stack: "REACT",
    imgUrl: p002,
    tags: [
      "REACT",
      "API",
      "CUSTOM HOOKS",
      "react-router-dom",
      "axios",
      "styled-components",
    ],
    url: "https://mercadinho-simples.surge.sh",
    repo: "https://github.com/botechiadev/arquitetura-css#README.md",
  },

  {
    id: "card2",
    title: "Rick and Morty VUEJS",
    description:
      "Projeto para consumo de api externa usando FETCH, componentizado e criado com VUE3 e SASS",
    stack: "VUE JS + SASS",
    imgUrl: p001,
    tags: ["VUE", "VUEJS", "VUE3", "SASS`"],
    url: "https://rick-and-morty-vue.surge.sh",
    repo: "https://github.com/botechiadev/ricky-and-morty-vue.git#README.md",
  },

  {
    id: "card3",
    title: "Rick and Morty React",
    description:
      "Projeto para consumo de api externa usando AXIOS, react-router-dom, styled-components, custom hooks...",
    stack: "REACT",
    imgUrl: p003,
    tags: [
      "REACT",
      "API",
      "CUSTOM HOOKS",
      "react-router-dom",
      "axios",
      "styled-components",
    ],
    url: "https://rick-and-morty-react.surge.sh",
    repo: "https://github.com/botechiadev/ricky-and-morty.git#README.md",
  },

  {
    id: "card4",
    title: "TASK API VAINILLA",
    description:
      "Projeto feito com HTML CSS e JS Vainilla para treinamento de logica e manipulacao de dom com local storage",
    stack: "Fundamentos-WEB",
    imgUrl: p004,
    tags: ["HTML", "CSS", "JS", "Vainilla"],
    url: "https://botechiadev.github.io/javascript-task-app/",
    repo: "https://github.com/botechiadev/javascript-task-app",
  },
  {
    id: "card5",
    title: "SNAKE GAME JS",
    description:
      "Projeto feito com HTML CSS e JS Vainilla para treinar logica em jogos resultando em um divertido SNAKE GAME CLASSICO",
    stack: "Fundamentos-WEB",
    imgUrl: p005,
    tags: ["HTML", "CSS", "JS", "Vainilla"],
    url: "https://botechiadev.github.io/javascript-snake-game/",
    repo: "https://github.com/botechiadev/javascript-snake-game",
  },

  {
    id: "card6",
    title: "Lojinha do React",
    description: "Projeto React para praticar filtros e renderizacao condicional, em breve sera implementado melhorias",
    stack: "REACT",
    imgUrl: p006,
    tags: ["REACT"],
    url: "https://lojinha-do-react.surge.sh",
    repo: "https://github.com/botechiadev/projeto-frontendreact",
  },
  {
    id: "card7",
    title: "My Pokedex Api",
    description:
      "Projeto feito com React para treinamento de react-router-dom, renderizacao condicional e fetch API",
    stack: "REACT",
    imgUrl: p007,
    tags: ["REACT"],
    url: "https://my-pokedex-api.surge.sh",
    repo: "https://github.com/botechiadev/my-pokedex-api",
  },
]);



  return (
    <GalleryContainer>
      <h2 id="projects">PROJECTS</h2>
      {[...list].map((item)=>(
        <article key={item.id}>
            <img src={item.imgUrl} alt="img do projeto"/>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.stack}</p>

            <div className='flex'>
                <a href={item.url} target='_blank'>
                    <TbWorldWww/>
                </a>
                <a href={item.repo} target='_blank'>
                    <TbBrandGithubFilled/>
                </a>
            </div>
        </article>
      ))}
    </GalleryContainer>
  )
}
