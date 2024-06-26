import styled from "styled-components";

export const HeaderNavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  height: 67px;
  background: var(--gray-10);
  color: white;

  .navigation {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }

  button {
    margin-right: 20px;
    font-size: 1.5rem;
    color: aliceblue;
    background-color: transparent;
    border: none;
    transition-duration: 0.5ms;
  }

  button:hover {
    color: greenyellow;
  }

  img {
    width: 30px;
    margin-left: 20px;
  }

  .container {
    display: flex;
    width: 95%;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
  }
`;
