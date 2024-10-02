import logo from '../images/FGA-logo.png'

function Footer() {
    return ( 
        <>
            <footer>
                <div class="linkedin-button">
                    <a href="https://www.linkedin.com/in/fernandogalexandre/" target="_blank"><i class="bi bi-linkedin"></i></a>
                </div>
                <div class="instagram-button">
                    <a href="https://github.com/Fernando1403" target="_blank"><i class="bi bi-github"></i></a>
                </div>

                <div id="footer_content">
                    <div id="footer_contacts">
                        <div class="logo-footer">
                            <a href="/">        
                                <img src={logo} alt="logo" width="90px" height="90px" style={{marginBottom:"10px"}}/>
                            </a>
                        </div>
                        <p>Transformando ideias em realidade digital</p>

                        <div id="footer_social_media">
                            <a href="https://www.instagram.com/_boliviaaa/" class="footer-link" id="instagram" target="_blank">
                                <i class="bi bi-instagram"></i>
                            </a>
        
                            <a href="https://www.linkedin.com/in/fernandogalexandre/" class="footer-link" id="facebook" target="_blank">
                                <i class="bi bi-linkedin"></i>
                            </a>

                            <a href="https://github.com/Fernando1403" class="footer-link" id="facebook" target="_blank">
                                <i class="bi bi-github"></i>
                            </a>
        
                            <a href="https://web.whatsapp.com/send?phone=5511942149398" class="footer-link" id="whatsapp" target="_blank">
                                <i class="bi bi-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                    <ul class="footer-list">
                        <li>
                            <h3>Menu</h3>
                        </li>
                        <li>
                            <a href="/" class="footer-link" >Inicio</a>
                        </li>
                        <li>
                            <a href="/especialidades" class="footer-link">Especialidades</a>
                        </li>
                        <li>
                            <a href="/sobre" class="footer-link">Sobre</a>
                        </li>
                    </ul>
    
                    <ul class="footer-list">
                        <li>
                            <h3>Projetos</h3>
                        </li>
                        <li>
                            <a href="/projetos" class="footer-link" >Projetos</a>
                        </li>
                        <li>
                            <a href="/certificados" class="footer-link">Certificados</a>
                        </li>
                        
                    </ul>
    
                    <div id="footer_subscribe">
                        <h3>Envie seu e-mail</h3>
        
                        <p>
                        Envie o seu e-mail para entrarmos em contato!
                        </p>
        
                        <div class="line-footer borda">
                            <p> <i class="bi bi-envelope-paper"></i><a href="mailto:fergalexandre@gmail.com" target="_blank"> fergalexandre@gmail.com</a> </p>   
                        </div>
                    </div>
                </div>
            </footer>
            <div class="global-footer">
                <div class="copywriter borda">
                    <p><span>Fernando Gonzales Alexandre</span> • Todos os direitos reservados.</p>
                </div>
            </div>
        </>
     );
}

export default Footer;