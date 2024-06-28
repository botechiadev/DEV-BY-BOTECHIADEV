import {BrowserRouter, Router, Route, Navigate, Routes} from 'react-router-dom'
import { ContainerAppRouter } from './style'
import HomePage from '../pages/HomePage/HomePage'
import ColabPage from '../pages/ColabPage/ColabPage'
import ResultsPage from '../pages/ResultsPage/ResultsPage'
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
                <Route path="/colab" element={<ColabPage/>}/>
                <Route path="/results" element={<ResultsPage/>}/>
                <Route path="/error404" element={<Error404/>}/>
                <Route path="*" Navigate="/error404"/>

            </Routes>
        </main>
      </BrowserRouter>
      <Footer/>
    </ContainerAppRouter>
  )
}
