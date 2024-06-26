import styled from "styled-components";

export const MainShop = styled.div`
    display: flex;
    width: 90%;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    min-height: 65vh;
`

export const SearchClient = styled.aside`
    position: fixed;
    display: grid;
    max-width: 80vw;
    left: 10vw;
    right: 10vw;
    top: 20vh;
     bottom: 20vh;
    background: #efefef;
    border-radius: 8px;
    padding: 1rem;
`

export const ResponseSection = styled.article`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background: orange;
    min-height: 90%;
    `