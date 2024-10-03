import cert1 from '../certificados/bigdata.png'
import cert2 from '../certificados/social.png'
import cert3 from '../certificados/design.png'


function Certificados() {
    return ( 
        <>
            <section className="container" id="container">
                <h2 className="titulo" style={{marginBottom:"40px"}}>MEUS <span>CERTIFICADOS</span>.</h2>
	            <div className="slider-wrapper">
		            <div className="slider">
                        <img id="slide-1" src={cert1} alt="" />
                        <img id="slide-2" src={cert2} alt="" />
                        <img id="slide-3" src={cert3} alt="" />
                    </div>
                    <div className="slider-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                    </div>
	            </div>
            </section>
        </>
     );
}

export default Certificados;