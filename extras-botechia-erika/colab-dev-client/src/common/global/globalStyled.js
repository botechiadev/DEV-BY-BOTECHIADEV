import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  font-size: 16px;
  --light-300: #efefef;
  --dark-300: #2f302f;
  --dark-100: #232323;
  --light-400: #d9d9d9;
  --rounded-36: 36px;
  --dark-700: #242121;
  list-style-position: inside;  font-family: "Inter Tight", sans-serif;
}

body {
  display: block;
  padding: 1rem;
  outline: 2px solid black;
  font-family: "Catamaran", sans-serif;
  background: var(--dark-100);
}

h1{
color: white;
}

span{
color: gold;
}
`;
