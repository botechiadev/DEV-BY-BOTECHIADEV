import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderNavbar } from './../components/HeaderNavbar/HeaderNavbar';
import { Footer } from './../components/Footer/Footer';
import HomePage from '../pages/HomePage/HomePage';
import { ContainerAppRouter } from './styled.AppRouter';
import { ClubPage } from './../pages/ClubPage/ClubPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import CartPage from '../pages/CartPage/CartPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';

export default function AppRouter() {
  return (
    <ContainerAppRouter>
    <BrowserRouter>
      <HeaderNavbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/club" element={<ClubPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
    </ContainerAppRouter>
  )
}
