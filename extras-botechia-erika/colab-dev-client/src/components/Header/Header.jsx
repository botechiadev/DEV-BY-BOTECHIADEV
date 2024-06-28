import { useNavigate } from 'react-router-dom';
import { ContainerHeader } from './styled.Header';
import { handle2Slash, handle2Colab} from './../../router/coordinator';
import { IoHome } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import logoBrand from './../../assets/img/logoBrand.svg'
export default function Header() {
  const navigate = useNavigate();

  return (
    <ContainerHeader className="A1">
        <img src={logoBrand} className="A1-a" />

        <div className="A1-b">
          <h1 className="h1Title" id="title">
            UP<span className="h1Title-White">DEV</span>       </h1>
          <p>Bem-Vindo ao meu Projeto Interativo</p>
        </div>

        <div className="A1-c">
          <button className="span-A1-c"
           onClick={()=>{handle2Slash(navigate)}} ><IoHome />
          </button>
          <button className="span-A1-b"
           onClick={()=>{handle2Colab(navigate)}} ><FaGraduationCap />
          </button>
        </div>

    </ContainerHeader>
  );
}
