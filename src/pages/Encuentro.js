import styled from "styled-components"
import { H1, H2, H3, Span } from '../components/Basics';

const Encuentro = () => {
    return ( <MainFrame>
        <Span>
          <p>
            El encuentro se organiza en dos modalidades: una modalidad dirigida a estudiantes de Grado Elemental y Profesional y otra a últimos cursos de Grado Profesional y Superior. 
          </p> 
          <p> 
            Como novedad, aumentamos la oferta de especialidades instrumentales y, además de las clases y la gran variedad de actividades musicales y de ocio complementarias, disfrutaremos de las magníficas instalaciones del Colegio San José de Villafranca de los Barros y de noches repletas de música: conciertos, experiencias musicales y mucho más. 
          </p>

          <p> 
            Un espacio intergeneracional para compartir experiencias entre profesionales y estudiantes que contribuye al fortalecimiento de una cantera musical y aporta una plataforma para la creación de nuevo público de música clásica. 
          </p>

          <p> 
            No hagas planes del 17 al 24 de julio. 
          </p>

          <p> 
            En el Colegio San José de Villafranca de los Barros. 
          </p> 
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

export default Encuentro