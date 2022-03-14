import styled from 'styled-components';
import Logo from './assets/Images/logo.png'
import './App.css';
import './assets/Fonts/index.css';
import { H2, Span } from './components/Basics';
import Modal from './components/Modal';
import { useEffect, useRef, useState } from 'react';
import Home from './pages/Home';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import Encuentro from './pages/Encuentro';
import Profesorado from './pages/Profesorado';
import Actividades from './pages/Actividades';
import Instalaciones from './pages/Instalaciones';
import Inscripcion from './pages/Inscripcion';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [queEsCantabilexActive, setQueEsCantabilexActive] = useState(false)
  const homeRef = useRef(null)
  const [homeVisible, setHomeVisible] = useState(false)
  const encuentroRef = useRef(null)
  const [encuentroVisible, setEncuentroVisible] = useState(false)
  const profesoradoRef = useRef(null)
  const [profesoradoVisible, setProfesoradoVisible] = useState(false)
  const actividadesRef = useRef(null)
  const [actividadesVisible, setActividadesVisible] = useState(false)
  const instalacionesRef = useRef(null)
  const [instalacionesVisible, setInstalacionesVisible] = useState(false)
  const inscripcionRef = useRef(null)
  const [inscripcionVisible, setInscripcionVisible] = useState(false)

  useEffect(() => {
    setHomeVisible(true)
    const onScrollHandler = window.addEventListener('scroll', () => scrollHandler())
    return window.removeEventListener('resize', onScrollHandler)
  }, [])

  const scrollHandler = () => {
    let innerHeight = window.innerHeight;
    if(homeRef.current && homeRef.current?.getBoundingClientRect().top <= innerHeight) setHomeVisible(true); else setHomeVisible(false)
    if(encuentroRef.current && encuentroRef.current?.getBoundingClientRect().top <= innerHeight) setEncuentroVisible(true); else setEncuentroVisible(false)
    if(profesoradoRef.current && profesoradoRef.current?.getBoundingClientRect().top <= innerHeight) setProfesoradoVisible(true); else setProfesoradoVisible(false)
    if(actividadesRef.current && actividadesRef.current?.getBoundingClientRect().top <= innerHeight) setActividadesVisible(true); else setActividadesVisible(false)
    if(instalacionesRef.current && instalacionesRef.current?.getBoundingClientRect().top <= innerHeight) setInstalacionesVisible(true); else setInstalacionesVisible(false)
    if(inscripcionRef.current && inscripcionRef.current?.getBoundingClientRect().top <= innerHeight) setInscripcionVisible(true); else setInscripcionVisible(false)
  }

  const queEsCantabilex = () => {
    return(<>“
    <Span italic color="#000" fontSize="23px">Que la música pertenezca a todos</Span>”  (Z. Kodaly).
    <p>Cantabile Extremadura es una asociación cultural para el desarrollo, difusión y apoyo del arte, especialmente de la música, a través de la acción artística, la organización de eventos y el apoyo a iniciativas que tienen como fundamento el aprendizaje y la práctica de la música y de disciplinas artísticas.</p>
    <p>Ya lo dice Eliot Eisner: “hay conocimientos que sólo el arte puede proporcionar”. Desde la fuerza asociativa intentemos también apoyar y fomentar las actividades culturales como herramienta para la igualdad, espacio para la convivencia y contribuir con actos que construyan una sociedad más rica, una sociedad mejor.</p>
    </>)
  }

  return (
      <div className="App">
        <Header>
          <nav>
            <div className='head'>
              <div className='menuIcon'>
                <MenuIcon onClick={() => {setMenuOpen(true)}} style={{cursor: 'pointer'}}/>
              </div>
              <div className='logo'>
                <a href="/" onClick={() => setMenuOpen(false)}><img src={Logo}/></a>
              </div>
              <div className='another'></div>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
              <li className='closeIcon' onClick={() => setMenuOpen(false)}>
                <CloseIcon/>
              </li>
              <a href="/" onClick={() => setMenuOpen(false)}>
                <li>
                  Home
                </li>
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/ }
              <a href="#" onClick={() => {setQueEsCantabilexActive(true); setMenuOpen(false)}}>
                <li>
                  <div>¿Qué es <Span bold>Cantabilex</Span>?</div>
                </li>
              </a>
              <a href="#encuentro" onClick={() => setMenuOpen(false)}>
                <li>
                  Encuentro 2022
                </li>
              </a>
              <a href="#profesorado" onClick={() => setMenuOpen(false)}>
                <li>
                  Profesorado
                </li>
              </a>
              <a href="#actividades" onClick={() => setMenuOpen(false)}>
                <li>
                  Actividades
                </li>
              </a>
              <a href="#instalaciones" onClick={() => setMenuOpen(false)}>
                <li>
                  Instalaciones
                </li>
              </a>
              <a href="#inscripcion" onClick={() => setMenuOpen(false)}>
                <li>
                  Inscripción
                </li>
              </a>
            </ul>
          </nav>
        </Header>
        <Modal active={queEsCantabilexActive} setActive={setQueEsCantabilexActive}>
          {queEsCantabilex()}
        </Modal>
          
        <AnimatedEntrance ref={homeRef} visible={homeVisible}><Home/></AnimatedEntrance>
        <StyledH2 id="encuentro" ref={encuentroRef}>Encuentro</StyledH2>
        <AnimatedEntrance visible={encuentroVisible}><Encuentro/></AnimatedEntrance>
        <StyledH2 id="profesorado" ref={profesoradoRef}>Profesorado</StyledH2>
        <AnimatedEntrance visible={profesoradoVisible}><Profesorado/></AnimatedEntrance>
        <StyledH2 id="actividades" ref={actividadesRef}>Actividades</StyledH2>
        <AnimatedEntrance visible={actividadesVisible}><Actividades/></AnimatedEntrance>
        <StyledH2 id="instalaciones" ref={instalacionesRef}>Instalaciones</StyledH2>
        <AnimatedEntrance visible={instalacionesVisible}><Instalaciones/></AnimatedEntrance>
        <StyledH2 id="inscripcion" ref={inscripcionRef}>Inscripcion</StyledH2>
        <AnimatedEntrance visible={inscripcionVisible}><Inscripcion/></AnimatedEntrance>
      </div>
  );
}

const StyledH2 = styled(H2)`
  width: calc(100% - 40px);
  background-color:#2680A9;
  padding: 20px;
`;

const Header = styled.header `
  background-color:#2680A9;
  height: 110px;
  width: 100%;
  a{
    width: 100%;
  }
  &, a{
    color: #FFF;
  }
  .menuIcon, .closeIcon{
    display: none;
  }
  .head{
    height: 50px;
    max-width: 100%;
    object-fit: contain;
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    grid-template-rows: 50px;
    grid-template-areas: "menu-icon logo another";
    .menu-icon{
      grid-area: menu-icon
    }
    .logo{
      grid-area: logo;
      max-width: 80vw;
      img{
        max-height: 100%;
        width: auto;
      }
    }
    .another{
      grid-area: another;
    }
  }
  nav ul {
    height: 60px;
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    li{
      cursor: pointer;
      padding: 15px 20px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      &:hover{
        transition: all ease .3s;
        background-color: #06AAC7;
        box-shadow: 0px 0px 20px #06AAC7;
      }
      &:not(:hover){
        transition: all ease .3s;
      }
    }
    a{
      text-decoration: none;
    }
    
  }
  @media(max-width: 1024px){
    height: 60px;
    .menuIcon, .closeIcon{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .menuIcon{
      padding-left: 25px;
      height: 60px;
    }
    nav{
      display: flex;
      justify-content: flex-start;
    }
    nav ul {
      margin-left: -100vh;
      &.open{
        margin-left: 0;
      }
      transition: all ease .3s;
      position: fixed;
      top: 0;
      height: 100vh;
      background-color:#2680A9;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0;
      li{
        width: calc(100% - 40px);
        height: auto;
      }
      li.closeIcon{
        display: flex;
        justify-content: flex-end;
      }
    }
    
  }
`
const AnimatedEntrance = styled.div`
  opacity: ${props => props.visible ? 1 : 0};
  transition: all linear .5s;
`


export default App;
