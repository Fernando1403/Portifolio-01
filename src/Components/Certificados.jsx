import cert1 from '../certificados/bigdata.png'
import cert2 from '../certificados/social.png'
import cert3 from '../certificados/design.png'


function Certificados() {
    return ( 
        <>
            <section class="container" id="container">
                <h2 class="titulo" style={{marginBottom:"40px"}}>MEUS <span>CERTIFICADOS</span>.</h2>
	            <div class="slider-wrapper">
		            <div class="slider">
                        <img id="slide-1" src={cert1} alt="" />
                        <img id="slide-2" src={cert2} alt="" />
                        <img id="slide-3" src={cert3} alt="" />
                    </div>
                    <div class="slider-nav">
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