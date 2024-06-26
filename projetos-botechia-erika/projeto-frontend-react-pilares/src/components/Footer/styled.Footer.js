import React from 'react';
import styled from 'styled-components'


export const FooterContainer = styled.footer`
position: fixed;
bottom:0;
left: 0; 
right: 0;
display: grid;
max-width: 1fr;

ul{
flex-flow: row wrap;
justify-content: space-around;
align-items: center;
height: 67px;
background: var(--gray-10);
color: white;
list-style: none;
}



ul{
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: center;
}

 a{
    margin-right: 20px;
    font-size: 1.5rem;
    color: aliceblue;

 }

 li , a{
    background-color: transparent;
    border: none;
    transition-duration: 0.5ms;
    color: aliceblue;
}

a:hover{

color: greenyellow;
}

img{
    width: 30px;
    margin-left: 20px;
}


.container{
    display: flex;
    width: 95%;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
}`