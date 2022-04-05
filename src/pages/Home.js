import Colegio from '../assets/Images/colegio-transparente.png'
import { H1, H2, H3, Div } from '../components/Basics';
import styled from 'styled-components';

const Home = () => {
    return(
        <MainFrame>
            <Underlined>
                <H1 fontSize={"25px"}><Div bold textAlign="center">VI ENCUENTRO MUSICAL <Div color={"#F4B95F"} bold>CANTABIL</Div><Div color={"#000000"} bold>EX</Div></Div></H1>
                <H1><Div color={"#F4B95F"} bold fontSize={"50px"}>VERANO 2022</Div></H1>
            </Underlined>
            <Img src={Colegio}/>
            <EsRefrescanteContainer>
                <EsRefrescante>
                    <Div bold fontSize="25px">Lo mires por donde lo mires</Div>
                    <Div bold fontSize="47px">¡Es <Div bold fontSize="47px" color={"#F4B95F"} >refrescante!</Div></Div>
                </EsRefrescante>
            </EsRefrescanteContainer>
        </MainFrame>
    )
}

const MainFrame = styled.section `
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

const Img = styled.img `
  border-radius: 10px;
  margin-bottom: 30px;
`

const Underlined = styled.div `
    border-bottom: 2px solid black;
`

const EsRefrescanteContainer = styled.div `
  width: 100%;
  background: linear-gradient(#000, #000);
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
`

const EsRefrescante = styled.div `
  background-color: #06AAC7;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`

export default Home