import { HeaderNavbarContainer } from "./styled.HeaderNavbar"
import logoStore from './../../assets/logoStore.png'
import { LiaSearchPlusSolid } from "react-icons/lia";
import { LiaOpencart } from "react-icons/lia";
import { LiaUser } from "react-icons/lia";
import { GiTShirt } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
import { handleCart, handleClub, handleHome, handleProducts, handleSearch } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
export function HeaderNavbar(){
    const navigate = useNavigate()
    return(
        <HeaderNavbarContainer>
           <div className="container">
                <h1 onClick={()=>{handleHome(navigate)}}>
                <img className="logo" alt="logo alien store" src={logoStore}/>
                   </h1>
                    <div className="navigation" >                    
                            <button onClick={()=>{handleProducts(navigate)}}><GiTShirt /></button>
                            <button onClick={()=>{handleSearch(navigate)}} ><LiaSearchPlusSolid /></button>
                            <button onClick={()=>{handleClub(navigate)}} ><LiaUser/></button>
                            <button onClick={()=>{handleCart(navigate)}}><LiaOpencart /></button>
                    </div>
            </div>
        </HeaderNavbarContainer>
    )
}