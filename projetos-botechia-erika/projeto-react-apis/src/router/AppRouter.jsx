import React from 'react'

import {  BrowserRouter, Routes, Route} from 'react-router-dom'
import { PokemonsPage } from '../pages/PokemonsPage/PokemonsPage'
import {PokedexPage} from '../pages/PokedexPage/PokedexPage'

import { DetailsPokePage } from '../pages/DetailsPoke/DetailsPokePage'
import { NavbarComponent } from '../components/Navbar/NavbarComponent'
import { HomePage } from '../pages/HomePage/HomePage'
export function AppRouter() {

  return (
<>
    <BrowserRouter>
   <NavbarComponent/>
         <Routes>
      <Route path="/" element={<HomePage/>}/>
    <Route path="/pokemons" element={<PokemonsPage />}/>
    <Route path="/pokemon/:pokeName" element={<DetailsPokePage/>} />    
    <Route path="/pokedex" element={<PokedexPage/>} />

 </Routes>    
    </BrowserRouter>
 </>
  )
}