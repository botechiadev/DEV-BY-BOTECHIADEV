import {BrowserRouter, Router, Route, Navigate, Routes} from 'react-router-dom'
import { ContainerAppRouter } from './style'
import HomePage from '../pages/HomePage/HomePage'
import Error404 from '../pages/Error404Page/Error404'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function AppRouter() {

  
    return (
    <ContainerAppRouter>
      <BrowserRouter>
        <Header/>
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/colab" element={<HomePage/>}/>
                <Route path="/results" element={<HomePage/>}/>
                <Route path="/error404" element={<Error404/>}/>
                <Route path="*" Navigate="/error404"/>

            </Routes>
        </main>
      </BrowserRouter>
      <Footer/>
    </ContainerAppRouter>
  )
}
