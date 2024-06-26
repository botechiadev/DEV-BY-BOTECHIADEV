import {HeroContainer} from './styled.Hero'
import banner from  './../../assets/brand/banner.png'
export default function Hero() {
  return (
    <HeroContainer id="about">
        <h1 className='text-shadow-drop-center tracking-in-expand-fwd'>BotechiaDev</h1>
        <p>I'm <strong>devloper</strong> my theme are <strong>"Devloping to solve your problems!"</strong></p>
      <img src={banner} alt={'banner principal da api com tematica da pagina'}/>
    </HeroContainer>
  )
}
