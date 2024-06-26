import styled from "styled-components"
export const HeaderStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  background: black;

  a {
    border: none;
    background: none;
    color: white;
    margin-left: 20px;
  }

  a svg {
    margin-right: 10px;
    color: whitesmoke;
    width: 24px;
    height: 24px;
  }

  a:hover {
    color: #5bd1fb;
  }

  @media screen and (max-width: 720px) {
    a {
      width: 60px;
      height: 60px;
    }
    span {
      display: none;
    }

    a:hover svg {
      color: #5bd1fb;
    }
  }
`;