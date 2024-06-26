import {ContainerFooter} from './styled.Footer'
import { FaGithub } from "react-icons/fa";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function Footer(){
    return(
        <ContainerFooter>
            <ul>
                <li>
                    <a href="https://github.com/botechiadev" target='blank'>
                        <FaGithub/>
                    </a>
                </li>
                    <li>
                    <a href="https://linkedin.com/in/botechia-erika" target="blank">
                        <FaLinkedin/>
                    </a>
                </li>
                    <li>
                    <a href="mailto:botechiadev@gmail.com" target="blank">
                        <FaEnvelopeCircleCheck/>
                    </a>
                </li>
            </ul>    
        </ContainerFooter>
    )
}