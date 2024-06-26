import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import  {PokedexProvider}  from './globals/Context';
import { AppRouter } from './router/AppRouter';
import {GlobalStyled} from './theme/globalStyled';
import { NavbarComponent } from './components/Navbar/NavbarComponent';
import './theme/normalize.css'
import { PokemonsProvider } from './common/context/pokemons-context';


export function App() {
  
  
  return ( 

  <ChakraProvider>   

  <PokemonsProvider>

    <GlobalStyled/>  

      <AppRouter/>     
  </PokemonsProvider> 

  </ChakraProvider>
);
}

