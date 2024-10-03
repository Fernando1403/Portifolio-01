import foto from '../images/foto-fernando.jpeg'

function Sobre() {
    return ( 
        <>
            <section className="py-10 mx-4 my-4" id="sobre">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex items-center gap-[60px]">
                        <div className="img-sobre">
                        <img src={foto} alt="" className="relative w-full h-auto ml-[-40px] rounded-[7px]" />
                        </div>
                        <div className="txt-sobre text-white ml-[60px]">
                            <h2 className="text-[40px] leading-[40px]">
                                MUITO PRAZER SOU <span className="text-[#3146ff] block">FERNANDO GONZALES ALEXANDRE</span>
                            </h2>
                            <p className="my-5 text-justify">
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