import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
html {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  font-size: 16px;
  --light-300: #efefef;
  --dark-300: #2f302f;
  --light-400: #d9d9d9;
  --rounded-36: 36px;
  --dark-700: #242121;
  list-style-position: inside;  font-family: "Inter Tight", sans-serif;
}

/* Resets */

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Base Style */


  background: var(--dark-300);
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  display: block;
  padding: 1rem;
  min-height: 100vh;
  max-width: 1fr;

header {
  display: flex;
  flex-flow: column wrap;
  padding: 0.5rem;
  justify-content: space-around;
  color: rgb(255, 255, 255);
  font-size: 1.2rem;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  font-size: 16px;
  --principal-orange: #fca555;
  --danger-fuchsia: #de41c6;
  --primary-purple: #6320c7;
  --dark-100: #0c001c;
  --gray-100: #282836;
  --yellow-100: rgb(255, 248, 167);
  --green-light:  #DBFA59;
}

body {
  display: block;
  padding: 1rem;
  outline: 2px solid black;
  font-family: "Catamaran", sans-serif;
  background: var(--dark-100);
}

header.A1 {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100px;
  align-content: space-around;
  justify-content: space-around;
  background: var(--dark-100);
  color: snow;
}

.A1-a {
  display: flex;
  max-width: 250px;
  max-height: 70px;
  border-radius: 80px;
  object-fit: cover;
  align-content: center;
  justify-content: center;
  padding: 0.3rem;
}

.A1-b {
}

.A1-c {
  display: flex;
  flex-flow: row wrap;
  min-width: 90px;
  max-height: 70px;
  object-fit: cover;
  justify-content: space-around;
  align-content: center;
}

.span-A1-c {
  padding: 0.51rem;
  border-radius: 28px;
  margin: auto 10px;
  background-color:gold;
  -webkit-border-radius: 28px;
  -moz-border-radius: 28px;
  -ms-border-radius: 28px;
  -o-border-radius: 28px;
}
.span-A1-c:hover{
  background: var(--principal-orange);
}
.h1Title {
  color: gold;
}

.h1Title-White {
  color: white;
}

.span-A1-c:hover {
  border: 2px solid darkorange;
  background: gold;
  color: #000000;
}

.headerBox {
  display: flex;
  flex-flow: row wrap;
}

.brandLogo {
  border-radius: 50px;
}

input {
  font-size: 0.7rem;
}

.left-side {
  background-color: var(--dark-700);
}

.left-side button {
  border: 3.92px rgb(125, 123, 118) groove;
  border-radius: var(--rounded-36);
  -webkit-border-radius: var(--rounded-36);
  -moz-border-radius: var(--rounded-36);
  -ms-border-radius: var(--rounded-36);
  -o-border-radius: var(--rounded-36);
  background: var(--light-300);
  width: 80%;
  height: 33px;
  margin: 20px 8%;
}

.left-side button:hover {
  background: rgb(3, 1, 0);
  font-size: 1.4rem;
  color: white;
  font-weight: bolder;
}

main {
  color: rgb(254, 232, 232);
  padding: 20px 16px;
  background: #2f302f;
  overflow-y: scroll;
}


.right-side {
  background: gold;
  margin: 30px;
  padding: 1rem;
  border-radius: var(--rounded-36);
}

footer p {
  color: gold;
}

.gold {
  color: gold;
}

/* Mobile Styles */

.parent {
  min-height: 96vh;
  height: 100%;
  display: grid;
  grid-template-areas: "head" "left" "main" "right" "foot";
}

.parent > header,
footer {
  display: flex;
  align-items: center;
}

header {
  grid-area: head;
}

.left-side {
  grid-area: left;
}

main {
    min-height: 70vh;
  grid-area: main;
  overflow-y: scroll;
}

.right-side {
  grid-area: right;
}

footer {
  grid-area: foot;
  color: white;
  font-size: 1rem;
}

/* Tablet styles */

@media screen and (min-width: 500px) {
  .parent {
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: 100px 1fr 1fr 50px;
    grid-template-areas: "head head" "left main" "right main" "foot foot";
  }
}

/* laptop and desktop styles */

@media screen and (min-width: 960px) {
  .parent {
    max-height: 80vh;
    max-width: 0.8fr;
    margin: 0 auto;
    grid-template-columns: 173px 1fr 373px;
    grid-template-areas: "head head head" "left main right" "left main right" "foot foot foot";
    @media and (min-width: 920px) {
      min-height: 95vh;
      min-height: 95vh;
    }
  
}

.article-products {
  width: 260px;
  height: 250px;
  background-color: #d9d9d9;
  margin: 20px auto;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 26px;
  -webkit-border-radius: 26px;
  -moz-border-radius: 26px;
  -ms-border-radius: 26px;
  -o-border-radius: 26px;
}

`;
