import { BrowserRouter , Routes, Route} from "react-router-dom";

import { ContainerAppRouter } from "./styled.AppRouter";

import HomePage from "../pages/HomePage/HomePage";
import GalleryPage  from "../pages/GalleryPage/GalleryPage";
import DashPage from './../pages/DashPage/DashPage'
import FeedPage from './../pages/FeedPage/FeedPage'


import Header from "../components/partials/Header/Header";
import Footer from "../components/partials/Footer/Footer";


export default function AppRouter() {
  return (
    <BrowserRouter>
    <Header/>

    <ContainerAppRouter>

        <Routes>
           <Route  path={"/"} element={<HomePage/>}/>
           <Route  path={"/gallery"} element={<GalleryPage/>}/>
           <Route  path={"/feed"} element={<FeedPage/>}/>

        </Routes>
    </ContainerAppRouter>
    <Footer/>
    </BrowserRouter>
  )
}
