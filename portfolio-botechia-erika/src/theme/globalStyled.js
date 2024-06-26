import { createGlobalStyle } from "styled-components";


export const GlobalStyled = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

:root{
    font-family: 'Poppins', sans-serif;
    
}
.section1{
    display: flex;
    justify-content: space-between;
}

.heroSmall{
    display: none;
}

@media screen and (max-width: 420px){
    .heroImg{
        display: none;
    }
}

`