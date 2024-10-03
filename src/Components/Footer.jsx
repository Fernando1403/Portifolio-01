import logo from '../images/FGA-logo.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BsEnvelopePaper } from "react-icons/bs";

function Footer() {
    return ( 
        <>
            <footer>
                <div className="linkedin-button">
                    <a href="https://www.linkedin.com/in/fernandogalexandre/" target="_blank"><FaLinkedin style={{fontSize:"50px", color: "#3146ff"}}/></a>
                </div>
                <div className="instagram-button">
                    <a href="https://github.com/Fernando1403" target="_blank"><FaGithub style={{fontSize:"50px", color: "#3146ff"}}/></a>
                </div>

                <div id="footer_content">
                    <div id="footer_contacts">
                        <div className="logo-footer">
                            <a href="/">        
                                <img src={logo} alt="logo" width="90px" height="90px" style={{marginBottom:"10px"}}/>
                            </a>
                        </div>
                        <p>Transformando ideias em realidade digital</p>

                        <div id="footer_social_media">
                            <a href="https://www.instagram.com/_boliviaaa/" className="footer-link" id="instagram" target="_blank">
                                <FaInstagram style={{fontSize:"22px"}}/>
                            </a>
        
                            <a href="https://www.linkedin.com/in/fernandogalexandre/" className="footer-link" id="facebook" target="_blank">
                                <FaLinkedin style={{fontSize:"22px"}}/>
                            </a>

                            <a href="https://github.com/Fernando1403" className="footer-link" id="facebook" target="_blank">
                                <FaGithub style={{fontSize:"22px"}}/>
                            </a>
        
                            <a href="https://web.whatsapp.com/send?phone=5511942149398" className="footer-link" id="whatsapp" target="_blank">
                                <FaWhatsapp style={{fontSize:"22px"}}/>
                            </a>
                        </div>
                    </div>
                    <ul className="footer-list">
                        <li>
                            <h3>Menu</h3>
                        </li>
                        <li>
                            <a href="/" className="footer-link" >Inicio</a>
                        </li>
                        <li>
                            <a href="/especialidades" className="footer-link">Especialidades</a>
                        </li>
                        <li>
                            <a href="/sobre" className="footer-link">Sobre</a>
                        </li>
                    </ul>
    
                    <ul className="footer-list">
                        <li>
                            <h3>Projetos</h3>
                        </li>
                        <li>
                            <a href="/projetos" className="footer-link" >Projetos</a>
                        </li>
                        <li>
                            <a href="/certificados" className="footer-link">Certificados</a>
                        </li>
                        
                    </ul>
    
                    <div id="footer_subscribe">
                        <h3>Envie seu e-mail</h3>
        
                        <p>
                        Envie o seu e-mail para entrarmos em contato!
                        </p>
        
                        <div className="line-footer borda">
                            <p> <BsEnvelopePaper style={{fontSize:"22px", color:"#3146ff"}}/><a href="mailto:fergalexandre@gmail.com" target="_blank"> fergalexandre@gmail.com</a> </p>   
                        </div>
                    </div>
                </div>
            </footer>
            <div className="global-footer">
                <div className="copywriter borda">
                    <p><span>Fernando Gonzales Alexandre</span> • Todos os direitos reservados.</p>
                </div>
            </div>
        </>
     );
}

export default Footer;