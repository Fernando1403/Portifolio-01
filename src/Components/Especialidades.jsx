import { GoCodeSquare } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";

function Especialidades() {
    return ( 
        <>
            <section className="especialidades" id="especialidades">
                <div className="interface">
                <h2 className="titulo">Minhas <span>Especialidades</span>.</h2>
                <div className="flex">
                    <div className="especialidades-box">
                        <GoCodeSquare style={{fontSize:"65px", backgroundColor: "#3146ff", padding:"10px", borderRadius:"15px"}}/>
                        <h3>Técnico</h3>
                        <p>Possuo habilidades técnicas abrangentes, incluindo conhecimentos em HTML, CSS, JavaScript, Python e Banco de Dados SQL Server. Além disso, estou familiarizado com tecnologias como Ionic e TypeScript para o desenvolvimento de aplicativos. Também possuo habilidades em design gráfico utilizando Photoshop e Illustrator. Estou comprometido em aprimorar continuamente minhas habilidades para oferecer soluções de alta qualidade.</p>
                    </div>

                <div className="especialidades-box">
                    <BsGraphUpArrow style={{fontSize:"65px", backgroundColor: "#3146ff", padding:"10px", borderRadius:"15px"}}/>
                    <h3>marketing</h3>
                    <p>
                        O marketing é a espinha dorsal de qualquer empreendimento online, fornecendo as estratégias essenciais para impulsionar visibilidade, engajamento e conversão de um site. Desde a identificação do público-alvo até a criação de conteúdo envolvente e a implementação de técnicas de SEO, o marketing digital desempenha um papel vital na construção da marca e no alcance dos objetivos comerciais. 
                    </p>
                </div>
                
                <div className="especialidades-box">
                    <IoBookOutline style={{fontSize:"65px", backgroundColor: "#3146ff", padding:"10px", borderRadius:"15px"}}/>
                    <h3>Habilidades</h3>
                    <p>
                        Tenho habilidades avançadas no Pacote Office, incluindo Word, PowerPoint e Excel, o que me permite criar documentos, apresentações e planilhas com eficiência. Além disso, possuo fluência em português, inglês intermediário e conhecimentos básicos de francês e espanhol.Estou sempre disposto a expandir meu conhecimento linguístico e aprimorar minhas habilidades no ambiente de trabalho.
                    </p>
                </div>
                </div>
                </div>   
            </section>
        </>
     );
}

export default Especialidades;