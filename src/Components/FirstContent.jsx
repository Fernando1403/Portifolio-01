import foto from '../images/foto-fernando.jpeg'

function FirstContent() {
    return ( 
        <>
            <section class="topo-do-site"> 
                <div class="flex">
                    <div class="txt-topo-site">
                        <h1>TRANSFORMANDO IDEIAS EM <span>REALIDADE DIGITAL</span>!</h1>
                        <p> Transformar ideias em Realidade Digital envolve a habilidade de capturar a essência de uma visão e traduzi-la em experiências digitais significativas e impactantes. Desde o design intuitivo até a implementação de funcionalidades inovadoras, cada detalhe é cuidadosamente elaborado para proporcionar aos usuários uma jornada envolvente e satisfatória. Nesse processo, combinamos criatividade, expertise técnica e uma compreensão profunda das necessidades e expectativas do público-alvo, transformando conceitos abstratos em soluções digitais tangíveis e bem-sucedidas.</p>
                        <div class="btn-contato">
                            <a href="https://web.whatsapp.com/send?phone=5511942149398" target="_blank">
                                <button>Entre em Contato</button>
                            </a>                
                        </div>
                    </div>
                    <div class="img-topo-site">
                        <img src={foto}  alt=""/>
                    </div>  
                </div>
            </section>
        </>
     );
}

export default FirstContent;