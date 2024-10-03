import logo from '../images/FGA-logo.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BsEnvelopePaper } from "react-icons/bs";

function Footer() {
    return ( 
        <>
            <footer className="py-16 px-4">
                <div className="fixed bottom-10 right-5 w-12 h-24 transition-transform duration-300 linkedin-button">
                    <a href="https://www.linkedin.com/in/fernandogalexandre/" target="_blank">
                        <FaLinkedin className="text-blue-600 text-5xl"/>
                    </a>
                </div>
                <div className="fixed bottom-5 right-6 w-12 h-14 transition-transform duration-300 instagram-button">
                    <a href="https://github.com/Fernando1403" target="_blank">
                        <FaGithub className="text-blue-600 text-5xl"/>
                    </a>
                </div>

                <div className="bg-[#171717] rounded-2xl grid grid-cols-4 gap-4 p-12" id="footer_content">
                    <div className="text-center">
                        <div className="flex justify-center mb-4 mt-[-10px]">
                            <a href="/">
                                <img src={logo} alt="logo" className="w-24 h-24"/>
                            </a>
                        </div>
                        <p className="text-neutral-400">Transformando ideias em realidade digital</p>
                        <div className="flex gap-8 justify-center mt-6" id="footer_social_media">
                            <a href="https://www.instagram.com/_boliviaaa/" className="bg-blue-600 flex items-center justify-center w-10 h-10 rounded-full text-neutral-100 hover:opacity-80 transition-opacity" target="_blank">
                                <FaInstagram className="text-lg"/>
                            </a>
                            <a href="https://www.linkedin.com/in/fernandogalexandre/" className="bg-blue-600 flex items-center justify-center w-10 h-10 rounded-full text-neutral-100 hover:opacity-80 transition-opacity" target="_blank">
                                <FaLinkedin className="text-lg"/>
                            </a>
                            <a href="https://github.com/Fernando1403" className="bg-blue-600 flex items-center justify-center w-10 h-10 rounded-full text-neutral-100 hover:opacity-80 transition-opacity" target="_blank">
                                <FaGithub className="text-lg"/>
                            </a>
                            <a href="https://web.whatsapp.com/send?phone=5511942149398" className="bg-blue-600 flex items-center justify-center w-10 h-10 rounded-full text-neutral-100 hover:opacity-80 transition-opacity" target="_blank">
                                <FaWhatsapp className="text-lg"/>
                            </a>
                        </div>
                    </div>

                    <ul className="space-y-3 text-neutral-400">
                        <li><h3 className="text-lg font-bold text-white">Menu</h3></li>
                        <li><a href="/" className="hover:text-blue-600 transition-colors">Inicio</a></li>
                        <li><a href="/especialidades" className="hover:text-blue-600 transition-colors">Especialidades</a></li>
                        <li><a href="/sobre" className="hover:text-blue-600 transition-colors">Sobre</a></li>
                    </ul>

                    <ul className="space-y-3 text-neutral-400">
                        <li><h3 className="text-lg font-bold text-white">Projetos</h3></li>
                        <li><a href="/projetos" className="hover:text-blue-600 transition-colors">Projetos</a></li>
                        <li><a href="/certificados" className="hover:text-blue-600 transition-colors">Certificados</a></li>
                    </ul>

                    <div className="space-y-6" id="footer_subscribe">
                        <h3 className="text-lg font-bold text-white">Envie seu e-mail</h3>
                        <p className="text-neutral-400">Envie o seu e-mail para entrarmos em contato!</p>
                        <div className="border-t-2 border-blue-600 pt-4 line-footer">
                            <p>
                                <BsEnvelopePaper className="inline-block text-blue-600 text-lg"/>
                                <a href="mailto:fergalexandre@gmail.com" className="text-neutral-400 ml-2 hover:text-blue-600">fergalexandre@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-[#171717] text-center py-5 border-t-2 border-blue-600">
                    <p className="text-white"> <span className="text-blue-600">Fernando Gonzales Alexandre</span> • Todos os direitos reservados.</p>
            </div>
        </>
     );
}

export default Footer;