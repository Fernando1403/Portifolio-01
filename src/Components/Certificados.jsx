import cert1 from '../certificados/bigdata.png'
import cert2 from '../certificados/social.png'
import cert3 from '../certificados/design.png'


function Certificados() {
    return ( 
        <>
            <section className="py-8" id="container">
                <h2 className="titulo" style={{marginBottom:"40px"}}>MEUS <span>CERTIFICADOS</span>.</h2>
	            <div className="relative max-w-[48rem] mx-auto">
		            <div className="slider">
                        <img id="slide-1" src={cert1} alt="" />
                        <img id="slide-2" src={cert2} alt="" />
                        <img id="slide-3" src={cert3} alt="" />
                    </div>
                    <div className="flex gap-4 absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 bg-[#0e0c0cec] p-3 rounded-full">
                        <a href="#slide-1" className="w-2 h-2 rounded-full bg-[#3146ff] opacity-75 transition-opacity ease-in duration-250 hover:opacity-100"></a>
                        <a href="#slide-2" className="w-2 h-2 rounded-full bg-[#3146ff] opacity-75 transition-opacity ease-in duration-250 hover:opacity-100"></a>
                        <a href="#slide-3" className="w-2 h-2 rounded-full bg-[#3146ff] opacity-75 transition-opacity ease-in duration-250 hover:opacity-100"></a>
                    </div>
	            </div>
            </section>
        </>
     );
}

export default Certificados;