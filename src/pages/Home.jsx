import FirstContent from '../Components/FirstContent'
import Especialidades from '../Components/Especialidades'
import Sobre from '../Components/Sobre'
import Projetos from '../Components/Projetos'
import Certificados from '../Components/Certificados'
import Footer from '../Components/Footer'

function Home() {

  return (
    <>
      <main>
        <FirstContent/>
        <Especialidades/>
        <Sobre/>
        <Projetos/>
        <Certificados/>
        <Footer/>
      </main>
    </>
  )
}

export default Home
