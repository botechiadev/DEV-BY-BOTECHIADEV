import styled from "styled-components";

export const HeroContainer = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding-top: 120px;

  h1 {
    position: relative;
    top: 200px;
    font-size: 3.5rem;
    color: white;
    font-family: "Montserrat", sans-serif;
    line-spacing: 20px;
  }

  img {
    object-fit: cover;
    max-width: 100%;
    min-height: 500px;
    margin-top: -230px;
    margin-bottom: 60px;
  }

  .heroSmall {
    display: none;
  }

  @media screen and (max-width: 420px) {
    .heroImg {
      display: none;
    }

    h1 {
      font-size: 2rem;
    }
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    color: white;
    position: relative;
    top: 40%;
    line-height: 2rem;
    text-align: center;
    width: 80%;
  }

  p strong {
    color: #5bd1fb;
  }

  .text-shadow-drop-center {
    -webkit-animation: text-shadow-drop-center 0.6s both;
    animation: text-shadow-drop-center 0.6s both;
  }

  .tracking-in-expand-fwd {
    -webkit-animation: tracking-in-expand-fwd 0.8s
      cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)
      both;
  }
`;