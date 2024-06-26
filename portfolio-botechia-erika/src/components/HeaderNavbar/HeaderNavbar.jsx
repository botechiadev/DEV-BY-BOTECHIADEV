import { HeaderStyled } from "./styled.HeaderNavbar"
import logo from './../../assets/brand/logo.svg'
import { MdOutlineContactSupport } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";

export default function HeaderNavbar({searchName, setSearchName, handleSearchName}) {
  return (
    <HeaderStyled>

        <nav>
          <a href="#about">
        <MdOutlineContactSupport/>
        <span>About</span>
      </a> 
      <a href="#projects">
        <GrProjects/>
        <span>Projects</span>
        </a>
 
      <a href="#skills">
       <GiSkills/>
        <span>Skills</span>
      </a>
      <a href="#contact">
        <LuContact/>
        <span>Contact</span>
      </a>
      </nav>
    </HeaderStyled>
  )
}
