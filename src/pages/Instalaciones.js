import styled from "styled-components"
import { Div } from "../components/Basics"
import Gallery from "../components/Gallery"
import Colegio from "../assets/Images/colegio-transparente.png";

const Instalaciones = () => {
    const galleryImages = [
      Colegio,
      Colegio,
      Colegio,
      Colegio,
      Colegio,
      Colegio,
      Colegio,
      Colegio,
    ]
    return(
        <MainFrame>
            <Div margin={"10px 20px"} fontSize={"20px"}>
              <p>
                <Div bold>El Colegio San José de Villafranca de los Barros, un entorno ideal para encontrarse:</Div>
              </p>
              <p>
                El Colegio San José de Villafranca de los Barros, con <Div bold>más de 125 años de historia</Div>, acoge por primera vez un Encuentro musical que aglutinará a artistas, músicos, profesores y alumnos en sus instalaciones, que ofrecen confort y un clima idóneo para la práctica musical, el deporte, el ocio y el encuentro e intercambio generacional entre músicos.
              </p>
              <p>
                Cuenta con unas amplias instalaciones entre las que se incluyen <Div bold>Salón de Actos</Div> con un aforo de <Div bold>1000 personas, sala de conferencias, aulas, aulas de estudio, pistas deportivas</Div> (campos de fútbol, pistas de tenis, padel, frontón, baloncesto, balonmano, piscina…), <Div bold>salas de juegos</Div> con billares, futbolines, ping-pong, <Div bold>sala de ordenadores y audiovisual… jardines, comedor</Div>… y una <Div bold>residencia</Div> con capacidad para más de 250 personas.
              </p>
            </Div>
            <Gallery images={galleryImages}/>
        </MainFrame>
    )
}

const MainFrame = styled.div `
  max-width: 1024px;
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  img{
    max-width: 100%
  }
  @media(max-width: 1024px){
    max-width: initial;
    min-width: initial;
    width: initial;
  }
`

export default Instalaciones