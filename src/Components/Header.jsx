import { useEffect, useRef } from 'react';
import logo from '../images/FGA-logo.png';
import { FaList } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const btnMenuRef = useRef(null);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const btnMenu = btnMenuRef.current;
    const menu = menuRef.current;
    const overlay = overlayRef.current;

    const openMenu = () => {
      menu.classList.add('abrir-menu');
      overlay.classList.remove('hidden'); // Exibe o overlay
    };

    const closeMenu = () => {
      menu.classList.remove('abrir-menu');
      overlay.classList.add('hidden'); // Esconde o overlay
    };

    btnMenu.addEventListener('click', openMenu);
    menu.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    return () => {
      btnMenu.removeEventListener('click', openMenu);
      menu.removeEventListener('click', closeMenu);
      overlay.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <>
      <header>
        <div className="flex items-center justify-between">
          <div>
            <a href="/">
              <img className="w-[125px] h-[120px]" src={logo} alt="logo" />
            </a>
          </div>

          <nav className='menu-desktop'>
            <ul className='flex space-x-12'>
              <li><a href="/">Inicio</a></li>
              <li><a href="/especialidades">Especialidades</a></li>
              <li><a href="/sobre">Sobre</a></li>
              <li><a href="/projetos">Projetos</a></li>
              <li><a href="/certificados">Certificados</a></li>
            </ul>
          </nav>

          <div className="btn-contato">
            <a href="/contato">
              <button>Contato</button>
            </a>
          </div>

          <div className="btn-abrir-menu" id="btn-menu" ref={btnMenuRef}>
            <i className=""><FaList/></i>
          </div>

          <div className="menu-mobile" id="menu-mobile" ref={menuRef}>
            <div className="btn-fechar">
              <i className=""><IoCloseSharp/></i>
            </div>
            <nav>
                <ul className="flex flex-col items-start space-y-2">
                    <li><a href="/" className="text-left">Inicio</a></li>
                    <li><a href="/especialidades" className="text-left">Especialidades</a></li>
                    <li><a href="/sobre" className="text-left">Sobre</a></li>
                    <li><a href="/projetos" className="text-left">Projetos</a></li>
                    <li><a href="/container" className="text-left">Certificados</a></li>
                    <li><a href="/contato" className="text-left">Contate-me</a></li>
                </ul>
            </nav>
          </div>

          <div className="overlay-menu" id="overlay-menu" ref={overlayRef}></div>
        </div>
      </header>
    </>
  );
}

export default Header;
