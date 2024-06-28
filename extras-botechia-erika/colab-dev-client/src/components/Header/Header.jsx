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

        <div className="A1-b">
          <h1 className="h1Title" id="title">
            UP<span className="h1Title-White">4DEV</span>    <img src={logoBrand} className="A1-a" width={45} height={45} />
    </h1>
        </div>

        <div className="A1-c">
          <span>Bem-Vindo ao meu Projeto Interativo</span>

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
