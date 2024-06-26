import icon0 from './../../assets/icons/icon_0.svg'
import icon1 from './../../assets/icons/icon_1.svg'
import icon2 from './../../assets/icons/icon_2.svg'
import icon3 from './../../assets/icons/icon_3.svg'
import icon4 from './../../assets/icons/icon_4.svg'
import icon5 from './../../assets/icons/icon_5.svg'
import icon6 from './../../assets/icons/icon_6.svg'
import icon7 from './../../assets/icons/icon_7.svg'
import icon8 from './../../assets/icons/icon_8.svg'
import icon9 from './../../assets/icons/icon_9.svg'
import icon10 from './../../assets/icons/icon_10.svg'
import icon11 from './../../assets/icons/icon_11.svg'
import icon12 from './../../assets/icons/icon_12.svg'
import { ContainerSkills } from "./styled.Skills";

export default function Skills(){
    
    const icons = [icon0, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10 , icon11, icon12]
    return(
        <ContainerSkills id="skills">
            <h2>SKILLS</h2>
            <div className="dFlex">
            {icons.map((skills, ix)=>(
       <div className="stackBox" key={ix}>
        <img src={skills} alt="icon da linguagem, framework ou habilidade"/>
       </div>  
            ))}
            </div>
        </ContainerSkills>
    )
}