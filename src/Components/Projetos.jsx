import React from 'react';

// Exemplo de importação de imagens, caso necessário
import img1 from '../images/AGRA.jpeg';
import img2 from '../images/wrsc.jpeg';
import img3 from '../images/img3.jpg';

function Projetos() {
    return ( 
        <>
            <section className="portifolio" id="projetos">
            <div className="interface">
                <h2 className="titulo" style={{marginBottom:"40px"}}>MEU <span>PORTIFOLIO</span>.</h2>
                <div className="flex">
                    <div className="img-port" style={{ backgroundImage: `url(${img1})` }}>
                        <div className="overlay">AGRA</div>
                    </div>
                    <div className="img-port" style={{ backgroundImage: `url(${img2})` }}>
                        <div className="overlay">WRSC</div>
                    </div>
                    <div className="img-port" style={{ backgroundImage: `url(${img3})` }}>
                        <div className="overlay">Projeto</div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}

export default Projetos;