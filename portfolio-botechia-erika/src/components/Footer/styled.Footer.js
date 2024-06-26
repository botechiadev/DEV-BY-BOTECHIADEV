import styled from 'styled-components'

export const ContainerFooter = styled.footer`
    display: grid;
    position: fixed;
    left: 0;
    right: 0;
    max-width: 1fr;
    bottom: 0;
    height: 40px;
    background: black;

ul{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    list-style-type:none;
}

    a svg{
        color: #5bd1fb; 
    }

    a:hover svg{
        color: white;
    }
`