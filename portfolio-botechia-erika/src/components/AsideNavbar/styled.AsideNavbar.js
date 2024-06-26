import styled from "styled-components";

export const ContainerAsideNavbar = styled.aside`
 display: flex;
 flex-flow: row wrap;
 height: 100%;
 max-height : 200px;
z-index: 100;

button{
    width: 150px;
    margin: 10px auto;
    margin-left: 10px;
    background: none;
    border: none;
    color: white;
    z-index: 110;
    
}

button svg{
    margin-right: 10px;
    color: whitesmoke;
    width: 24px;
    height: 24px;

}

button:hover{
  
    color: ; black;


}



@media screen and (max-width: 769px){
    max-width:60px;
    
    
    button span{
        display: none;
    }
}
`