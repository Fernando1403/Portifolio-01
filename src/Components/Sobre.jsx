import foto from '../images/foto-fernando.jpeg'

function Sobre() {
    return ( 
        <>
            <section className="sobre" id="sobre">
                <div className="interface">
                    <div className="flex">
                        <div className="img-sobre">
                            <img src={foto} alt="" style={{width: '120%', height: '100%', borderRadius: '7px'}} />
                        </div>
                        <div className="txt-sobre">
                            <h2>MUITO PRAZER SOU <span>FERNANDO GONZALES ALEXANDRE</span></h2>
                            <p>
                                Com uma identificação clara com a informática ao longo dos anos, fortaleci meu compromisso com a excelência nesta área, impulsionando meu desejo de contribuir de forma significativa para o campo corporativo. Reconhecido pela minha amabilidade e facilidade em estabelecer relações interpessoais, características que facilitam a colaboração eficaz em ambientes profissionais, estou animado em encontrar uma equipe inovadora e colaborativa que valorize o crescimento profissional e o trabalho em equipe.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Sobre;