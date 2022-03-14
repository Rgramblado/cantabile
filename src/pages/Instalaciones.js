import styled from "styled-components"
import { Span } from "../components/Basics"


const Instalaciones = () => {
    return(
        <MainFrame>
            <Span>
                El Colegio San José de Villafranca de los Barros, un entorno ideal para encontrarse:

                El Colegio San José de Villafranca de los Barros, con más de 125 años de historia, acoge por primera vez un Encuentro musical que aglutinará a artistas, músicos, profesores y alumnos en sus instalaciones, que ofrecen confort y un clima idóneo para la práctica musical, el deporte, el ocio y el encuentro e intercambio generacional entre músicos.

                Cuenta con unas amplias instalaciones entre las que se incluyen Salón de Actos con un aforo de 1000 personas, sala de conferencias, aulas, aulas de estudio, pistas deportivas (campos de fútbol, pistas de tenis, padel, frontón, baloncesto, balonmano, piscina…), salas de juegos con billares, futbolines, ping-pong, sala de ordenadores y audiovisual… jardines, comedor… y una residencia con capacidad para más de 250 personas
            </Span>
        </MainFrame>
    )
}

const MainFrame = styled.div `
  max-width: 1024px;
  min-width: 1024px;
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