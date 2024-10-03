import React from 'react';

// Exemplo de importação de imagens, caso necessário
import img1 from '../images/AGRA.jpeg';
import img2 from '../images/wrsc.jpeg';
import img3 from '../images/img3.jpg';

function Projetos() {
    return ( 
        <>
            <section className="py-20 px-4 shadow-[0_0_40px_10px_rgba(255,255,255,0.09)]" id="projetos">
            <div className="max-w-[1280px] mx-auto">
                <h2 className="titulo mb-10">MEU <span>PORTIFOLIO</span>.</h2>
                <div className="flex justify-around">
                    <div
                        className="img-port w-[360px] h-[460px] bg-cover rounded-[10px] transition-[background-position_0.8s] relative hover:bg-[100%_100%]"
                        style={{ backgroundImage: `url(${img1})`, backgroundPosition: '100% 0%' }}
                    >
                        <div className="overlay">AGRA</div>
                    </div>
                    <div
                        className="img-port w-[360px] h-[460px] bg-cover rounded-[10px] transition-[background-position_0.8s] relative hover:bg-[100%_100%]"
                        style={{ backgroundImage: `url(${img2})`, backgroundPosition: '100% 0%' }}
                    >
                        <div className="overlay">WRSC</div>
                    </div>
                    <div
                        className="img-port w-[360px] h-[460px] bg-cover rounded-[10px] transition-[background-position_0.8s] relative hover:bg-[100%_100%]"
                        style={{ backgroundImage: `url(${img3})`, backgroundPosition: '100% 0%' }}
                    >
                        <div className="overlay">Projeto</div>
                    </div>
                </div>
            </div>
        </section>

        </>
     );
}

export default Projetos;