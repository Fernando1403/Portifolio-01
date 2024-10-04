import React from 'react';
import CardProjeto from './CardProjeto';

function Projetos({ projetos }) {
    return (
        <>
            <section className="py-20 px-4 shadow-[0_0_40px_10px_rgba(255,255,255,0.09)]" id="projetos">
                <div className="max-w-[1280px] mx-auto">
                    <h2 className="titulo mb-10">MEU <span>PORTIFOLIO</span>.</h2>
                    <div className="flex justify-around">
                        {
                            projetos.map(projeto => <CardProjeto
                                key={projeto}
                                nome={projeto.tittle}
                                imagem={projeto.image}
                            />
                            )
                        }
                    </div>
                </div>
            </section>

        </>
    );
}

export default Projetos;