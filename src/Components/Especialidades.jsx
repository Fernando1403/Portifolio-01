import { GoCodeSquare } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";

function Especialidades() {
    return ( 
        <>
            <section className="py-10 px-4" id="especialidades">
                <div className="max-w-[1280px] mx-auto">
                    <h2 className="titulo">Minhas <span>Especialidades</span>.</h2>
                    <div className="flex gap-[60px]">
                        <div className="especialidades-box text-white p-10 rounded-[10px] border-2 border-white mt-10 transition-transform duration-300 hover:scale-[1.04] hover:border-[#3146ff]">
                            <GoCodeSquare className="text-[65px] bg-[#3146ff] p-2 rounded-[15px]" />
                            <h3 className="text-[25px] mt-6 mb-2">Técnico</h3>
                            <p>
                                Possuo habilidades técnicas abrangentes, incluindo conhecimentos em HTML, CSS, JavaScript, Python e Banco de Dados SQL Server. Além disso, estou familiarizado com tecnologias como Ionic e TypeScript para o desenvolvimento de aplicativos. Também possuo habilidades em design gráfico utilizando Photoshop e Illustrator. Estou comprometido em aprimorar continuamente minhas habilidades para oferecer soluções de alta qualidade.
                            </p>
                        </div>

                        <div className="especialidades-box text-white p-10 rounded-[10px] border-2 border-white mt-10 transition-transform duration-300 hover:scale-[1.04] hover:border-[#3146ff]">
                            <BsGraphUpArrow className="text-[65px] bg-[#3146ff] p-2 rounded-[15px]" />
                            <h3 className="text-[25px] mt-6 mb-2">Marketing</h3>
                            <p>
                                O marketing é a espinha dorsal de qualquer empreendimento online, fornecendo as estratégias essenciais para impulsionar visibilidade, engajamento e conversão de um site. Desde a identificação do público-alvo até a criação de conteúdo envolvente e a implementação de técnicas de SEO, o marketing digital desempenha um papel vital na construção da marca e no alcance dos objetivos comerciais.
                            </p>
                        </div>

                        <div className="especialidades-box text-white p-10 rounded-[10px] border-2 border-white mt-10 transition-transform duration-300 hover:scale-[1.04] hover:border-[#3146ff]">
                            <IoBookOutline className="text-[65px] bg-[#3146ff] p-2 rounded-[15px]" />
                            <h3 className="text-[25px] mt-6 mb-2">Habilidades</h3>
                            <p>
                                Tenho habilidades avançadas no Pacote Office, incluindo Word, PowerPoint e Excel, o que me permite criar documentos, apresentações e planilhas com eficiência. Além disso, possuo fluência em português, inglês intermediário e conhecimentos básicos de francês e espanhol. Estou sempre disposto a expandir meu conhecimento linguístico e aprimorar minhas habilidades no ambiente de trabalho.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
     );
}

export default Especialidades;