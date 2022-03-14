import styled from "styled-components"
import { Span } from "../components/Basics"


const Actividades = () => {
    return(
        <MainFrame>
            <Span>
                <p>Clases individuales según modalidad*</p>
                <p>Se contará con pianos de estudio a disposición del alumnado.</p>
                <p>Todos los participantes recibirán clases de: </p> 
                <ul>
                  <li>Música antigua</li>
                  <li>Música contemporánea</li>
                  <li>Improvisación y educación auditiva</li>
                  <li>Lenguaje musical</li>
                  <li>Armonía y análisis</li>
                  <li>Música de cámara</li>
                  <li>Repertorio con pianista acompañante*</li>
                  <li>Orquesta</li>
                  <li>Pilates para músicos y educación postural</li>
                  <li>Piscina y actividades de ocio y tiempo libre</li>
                </ul>
                <p>Además, podrán participar en conciertos durante la semana en Villafranca y en localidades cercanas para promoción del alumnado.</p>
                <p>*Los alumnos que quieran tocar sus obras con pianista acompañante deben enviar las partituras de la parte de piano en formato pdf al email: cantabilecm@gmail.com antes del inicio del curso.</p>
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

export default Actividades