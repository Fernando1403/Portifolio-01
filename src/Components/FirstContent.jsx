import foto from '../images/foto-fernando.jpeg'

function FirstContent() {
    return ( 
        <>
            <section className="py-10 px-12">
                <div className="flex items-center justify-center gap-[90px]">
                    <div className="txt-topo-site">
                        <h1 className="text-white text-[42px] leading-[48px]">
                            TRANSFORMANDO IDEIAS EM <span className="text-[#3146ff]">REALIDADE DIGITAL</span>!
                        </h1>
                        <p className="text-white my-10">
                            Transformar ideias em Realidade Digital envolve a habilidade de capturar a essência de uma visão e traduzi-la em experiências digitais significativas e impactantes. Desde o design intuitivo até a implementação de funcionalidades inovadoras, cada detalhe é cuidadosamente elaborado para proporcionar aos usuários uma jornada envolvente e satisfatória. Nesse processo, combinamos criatividade, expertise técnica e uma compreensão profunda das necessidades e expectativas do público-alvo, transformando conceitos abstratos em soluções digitais tangíveis e bem-sucedidas.
                        </p>
                        <div className="btn-contato">
                            <a href="https://web.whatsapp.com/send?phone=5511942149398" target="_blank" rel="noopener noreferrer">
                                <button className="btn">Entre em Contato</button>
                            </a>
                        </div>
                    </div>
                    <div className="img-topo-site">
                    <img src={foto} alt="" className="relative w-full h-auto ml-[-40px] rounded-[7px]" />
                    </div>
                </div>
            </section>
        </>
     );
}

export default FirstContent;