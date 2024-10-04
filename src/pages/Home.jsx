import FirstContent from '../Components/FirstContent'
import Especialidades from '../Components/Especialidades'
import Sobre from '../Components/Sobre'
import Projetos from '../Components/Projetos'
import Certificados from '../Components/Certificados'
import Footer from '../Components/Footer'
import img1 from '../images/AGRA.jpeg';
import img3 from '../images/img3.jpg';
import img2 from '../images/wrsc.jpeg';

function Home() {

  const projetos = [
    { tittle: "AGRA", image:  img1  },
    { tittle: "WRSC", image:  img2  },
    { tittle: "Projeto", image:  img3  }
]

  return (
    <>
      <main>
        <FirstContent/>
        <Especialidades/>
        <Sobre/>
        <Projetos projetos={projetos} />
        <Certificados/>
        <Footer/>
      </main>
    </>
  )
}

export default Home
