import React, { useContext, useState } from "react";

import { MainShop, SearchClient , ResponseSection} from './styled.ClubPage'
import { AuthContext } from "../../common/context/auth-context";
export function ClubPage({img1}){
    const {fullList} = useContext(AuthContext)
    console.log(fullList)
    const [modalView, setModalView] = useState(false)
    return(
        <MainShop>
                <>
            {modalView == false ? (<span></span>):(
            
            <SearchClient>
                <div>
                    <ul>
                        <li>Lista Vazia</li>
                    </ul>
                </div>
            </SearchClient>
   
        )}</>
            <ResponseSection>
                <form>
                    <fieldset>
                        <legend>ClubCliente</legend>
                        <p>
                            <label htmlFor="firstName">Primeiro Nome</label>
                            <input type="text" id="nickname" name="nickname" placeholder="joao-silva"/>
                        </p>
                        <p>
                            <label htmlFor="password">Último Sobrenome</label>
                            <input type="email" id="email" name="email" placeholder="Silva"/>
                        </p>
           
                    </fieldset>
                </form>
            </ResponseSection>
        </MainShop>
    )
}