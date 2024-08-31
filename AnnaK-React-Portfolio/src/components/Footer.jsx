import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <footer>
            <div className="container">
                <ul>
                    <li><a href="https://github.com/explorer7733"><AiFillGithub size={40} /></a></li>
                    <li><a href="https://www.linkedin.com/in//"><FaLinkedin size={40} /></a></li>        
                </ul>
            </div>
            <div className='signature'>Designed by AnnaK, 2024</div>
        </footer>
    )
}

export default Footer;