import styled from 'styled-components'
import { GlobalStyled } from './theme/globalStyled'
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'
const FundoGradiente = styled.div`
display: grid;
min-height: 100vh;
max-width: 1fr;
/*background:  linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);*/
/*background: linear-gradient(to right, #434343 0%, black 100%);*/
background: black;
`


function App() {


  return (
    <>
    <GlobalStyled/>
    <FundoGradiente>
      <HeaderNavbar
      />
    
        <section className='section1'>
   
      <Hero/>
      </section>
      <Gallery/>
         <Skills/> 
         <Contact/>
  <Footer/>
    </FundoGradiente>
 </>
  )
}

export default App
