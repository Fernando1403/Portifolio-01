import Footer from "../Components/Footer";
import Projetos from "../Components/Projetos";
import img1 from '../images/AGRA.jpeg';
import img3 from '../images/img3.jpg';
import img2 from '../images/wrsc.jpeg';

function PageProjetos() {

    const projetos = [
        { tittle: "AGRA", image:  img1  },
        { tittle: "WRSC", image:  img2  },
        { tittle: "Projeto", image:  img3  }
    ]

    return (
        <>
            <main>
                <Projetos projetos={projetos} />
                <Footer />
            </main>
        </>
    );
}

export default PageProjetos;