import { ContainerAsideNavbar } from "./styled.AsideNavbar";
import { MdOutlineContactSupport } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";


export default function AsideNavbar() {
  return (
    <ContainerAsideNavbar>
        <nav>
      <button>
        <GrProjects/>
        <span>Projects</span>
        </button>
      <button>
        <MdOutlineContactSupport/>
        <span>About</span>
      </button>
      <button>
       <GiSkills/>
        <span>Skills</span>
      </button>
      <button>
        <LuContact/>
        <span>Contact</span>
      </button>
      </nav>
    </ContainerAsideNavbar>
  )
}
