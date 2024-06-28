import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}


.content{
    display: grid ;
    grid-template-rows: 60px auto 45px;
    min-height: 100vh;
    max-width: 1fr;
}

`