import { useState } from 'react'
import styled from 'styled-components'
import ProfileImage from '../assets/Images/Profile.png'
import { H2, Span } from '../components/Basics'
import Modal from '../components/Modal'


const data = [
    {
    name: 'Fulanito',
    surname: 'De Tal',
    bio: <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lacinia tortor, commodo sollicitudin est. Integer eu turpis vel ex facilisis euismod ut eu purus. Proin justo est, molestie vitae mauris vel, commodo commodo orci. Nunc pellentesque felis sem, nec placerat ligula dictum nec. Fusce vel rhoncus lectus. Quisque eget felis elit. Proin vel imperdiet lectus.</p>

        <p>Donec suscipit scelerisque dui, vitae porta augue. Integer ut eros blandit, efficitur ante eu, pretium libero. Maecenas fringilla tellus tempor neque bibendum, tincidunt sagittis eros cursus. Nulla vel ante tempus, tempus sem et, congue lectus. Pellentesque sed lectus aliquam nibh mattis vulputate. Vivamus imperdiet imperdiet lectus, quis fermentum tortor auctor vel. Sed ultricies libero sed urna vulputate pharetra.</p>
        
        <p>Mauris porta eleifend tortor, quis hendrerit velit malesuada eu. Praesent vitae neque at purus mollis sodales. Suspendisse blandit lacinia rhoncus. Donec eu finibus velit. Sed scelerisque turpis mattis feugiat maximus. Etiam sed metus risus. Proin molestie varius magna, in pulvinar dolor congue vel. Mauris eu nunc metus. Integer pulvinar aliquam pretium. Suspendisse bibendum sagittis imperdiet. Nam nec justo rhoncus, dignissim odio quis, gravida lacus.</p>
    </>,
    image: ProfileImage
    },
    {
    name: 'Fulanito',
    surname: 'De Tal',
    bio: <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lacinia tortor, commodo sollicitudin est. Integer eu turpis vel ex facilisis euismod ut eu purus. Proin justo est, molestie vitae mauris vel, commodo commodo orci. Nunc pellentesque felis sem, nec placerat ligula dictum nec. Fusce vel rhoncus lectus. Quisque eget felis elit. Proin vel imperdiet lectus.</p>

        <p>Donec suscipit scelerisque dui, vitae porta augue. Integer ut eros blandit, efficitur ante eu, pretium libero. Maecenas fringilla tellus tempor neque bibendum, tincidunt sagittis eros cursus. Nulla vel ante tempus, tempus sem et, congue lectus. Pellentesque sed lectus aliquam nibh mattis vulputate. Vivamus imperdiet imperdiet lectus, quis fermentum tortor auctor vel. Sed ultricies libero sed urna vulputate pharetra.</p>
        
        <p>Mauris porta eleifend tortor, quis hendrerit velit malesuada eu. Praesent vitae neque at purus mollis sodales. Suspendisse blandit lacinia rhoncus. Donec eu finibus velit. Sed scelerisque turpis mattis feugiat maximus. Etiam sed metus risus. Proin molestie varius magna, in pulvinar dolor congue vel. Mauris eu nunc metus. Integer pulvinar aliquam pretium. Suspendisse bibendum sagittis imperdiet. Nam nec justo rhoncus, dignissim odio quis, gravida lacus.</p>
    </>,
    image: ProfileImage
    },
    {
    name: 'Fulanito',
    surname: 'De Tal',
    bio: <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lacinia tortor, commodo sollicitudin est. Integer eu turpis vel ex facilisis euismod ut eu purus. Proin justo est, molestie vitae mauris vel, commodo commodo orci. Nunc pellentesque felis sem, nec placerat ligula dictum nec. Fusce vel rhoncus lectus. Quisque eget felis elit. Proin vel imperdiet lectus.</p>

        <p>Donec suscipit scelerisque dui, vitae porta augue. Integer ut eros blandit, efficitur ante eu, pretium libero. Maecenas fringilla tellus tempor neque bibendum, tincidunt sagittis eros cursus. Nulla vel ante tempus, tempus sem et, congue lectus. Pellentesque sed lectus aliquam nibh mattis vulputate. Vivamus imperdiet imperdiet lectus, quis fermentum tortor auctor vel. Sed ultricies libero sed urna vulputate pharetra.</p>
        
        <p>Mauris porta eleifend tortor, quis hendrerit velit malesuada eu. Praesent vitae neque at purus mollis sodales. Suspendisse blandit lacinia rhoncus. Donec eu finibus velit. Sed scelerisque turpis mattis feugiat maximus. Etiam sed metus risus. Proin molestie varius magna, in pulvinar dolor congue vel. Mauris eu nunc metus. Integer pulvinar aliquam pretium. Suspendisse bibendum sagittis imperdiet. Nam nec justo rhoncus, dignissim odio quis, gravida lacus.</p>
    </>,
    image: ProfileImage
    },
    {
    name: 'Zutanito',
    surname: 'De Cual',
    bio: <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lacinia tortor, commodo sollicitudin est. Integer eu turpis vel ex facilisis euismod ut eu purus. Proin justo est, molestie vitae mauris vel, commodo commodo orci. Nunc pellentesque felis sem, nec placerat ligula dictum nec. Fusce vel rhoncus lectus. Quisque eget felis elit. Proin vel imperdiet lectus.</p>

        <p>Donec suscipit scelerisque dui, vitae porta augue. Integer ut eros blandit, efficitur ante eu, pretium libero. Maecenas fringilla tellus tempor neque bibendum, tincidunt sagittis eros cursus. Nulla vel ante tempus, tempus sem et, congue lectus. Pellentesque sed lectus aliquam nibh mattis vulputate. Vivamus imperdiet imperdiet lectus, quis fermentum tortor auctor vel. Sed ultricies libero sed urna vulputate pharetra.</p>
        
        <p>Mauris porta eleifend tortor, quis hendrerit velit malesuada eu. Praesent vitae neque at purus mollis sodales. Suspendisse blandit lacinia rhoncus. Donec eu finibus velit. Sed scelerisque turpis mattis feugiat maximus. Etiam sed metus risus. Proin molestie varius magna, in pulvinar dolor congue vel. Mauris eu nunc metus. Integer pulvinar aliquam pretium. Suspendisse bibendum sagittis imperdiet. Nam nec justo rhoncus, dignissim odio quis, gravida lacus.</p>
    </>,
    image: ProfileImage
    },
    {
    name: 'Fulanito',
    surname: 'De Tal',
    bio: <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lacinia tortor, commodo sollicitudin est. Integer eu turpis vel ex facilisis euismod ut eu purus. Proin justo est, molestie vitae mauris vel, commodo commodo orci. Nunc pellentesque felis sem, nec placerat ligula dictum nec. Fusce vel rhoncus lectus. Quisque eget felis elit. Proin vel imperdiet lectus.</p>

        <p>Donec suscipit scelerisque dui, vitae porta augue. Integer ut eros blandit, efficitur ante eu, pretium libero. Maecenas fringilla tellus tempor neque bibendum, tincidunt sagittis eros cursus. Nulla vel ante tempus, tempus sem et, congue lectus. Pellentesque sed lectus aliquam nibh mattis vulputate. Vivamus imperdiet imperdiet lectus, quis fermentum tortor auctor vel. Sed ultricies libero sed urna vulputate pharetra.</p>
        
        <p>Mauris porta eleifend tortor, quis hendrerit velit malesuada eu. Praesent vitae neque at purus mollis sodales. Suspendisse blandit lacinia rhoncus. Donec eu finibus velit. Sed scelerisque turpis mattis feugiat maximus. Etiam sed metus risus. Proin molestie varius magna, in pulvinar dolor congue vel. Mauris eu nunc metus. Integer pulvinar aliquam pretium. Suspendisse bibendum sagittis imperdiet. Nam nec justo rhoncus, dignissim odio quis, gravida lacus.</p>
    </>,
    image: ProfileImage
    },
    {
    name: 'Fulanito',
    surname: 'De Tal',
    bio: <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lacinia tortor, commodo sollicitudin est. Integer eu turpis vel ex facilisis euismod ut eu purus. Proin justo est, molestie vitae mauris vel, commodo commodo orci. Nunc pellentesque felis sem, nec placerat ligula dictum nec. Fusce vel rhoncus lectus. Quisque eget felis elit. Proin vel imperdiet lectus.</p>

        <p>Donec suscipit scelerisque dui, vitae porta augue. Integer ut eros blandit, efficitur ante eu, pretium libero. Maecenas fringilla tellus tempor neque bibendum, tincidunt sagittis eros cursus. Nulla vel ante tempus, tempus sem et, congue lectus. Pellentesque sed lectus aliquam nibh mattis vulputate. Vivamus imperdiet imperdiet lectus, quis fermentum tortor auctor vel. Sed ultricies libero sed urna vulputate pharetra.</p>
        
        <p>Mauris porta eleifend tortor, quis hendrerit velit malesuada eu. Praesent vitae neque at purus mollis sodales. Suspendisse blandit lacinia rhoncus. Donec eu finibus velit. Sed scelerisque turpis mattis feugiat maximus. Etiam sed metus risus. Proin molestie varius magna, in pulvinar dolor congue vel. Mauris eu nunc metus. Integer pulvinar aliquam pretium. Suspendisse bibendum sagittis imperdiet. Nam nec justo rhoncus, dignissim odio quis, gravida lacus.</p>
    </>,
    image: ProfileImage
    },
    {
    name: 'Fulanito',
    surname: 'De Tal',
    bio: <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lacinia tortor, commodo sollicitudin est. Integer eu turpis vel ex facilisis euismod ut eu purus. Proin justo est, molestie vitae mauris vel, commodo commodo orci. Nunc pellentesque felis sem, nec placerat ligula dictum nec. Fusce vel rhoncus lectus. Quisque eget felis elit. Proin vel imperdiet lectus.</p>

        <p>Donec suscipit scelerisque dui, vitae porta augue. Integer ut eros blandit, efficitur ante eu, pretium libero. Maecenas fringilla tellus tempor neque bibendum, tincidunt sagittis eros cursus. Nulla vel ante tempus, tempus sem et, congue lectus. Pellentesque sed lectus aliquam nibh mattis vulputate. Vivamus imperdiet imperdiet lectus, quis fermentum tortor auctor vel. Sed ultricies libero sed urna vulputate pharetra.</p>
        
        <p>Mauris porta eleifend tortor, quis hendrerit velit malesuada eu. Praesent vitae neque at purus mollis sodales. Suspendisse blandit lacinia rhoncus. Donec eu finibus velit. Sed scelerisque turpis mattis feugiat maximus. Etiam sed metus risus. Proin molestie varius magna, in pulvinar dolor congue vel. Mauris eu nunc metus. Integer pulvinar aliquam pretium. Suspendisse bibendum sagittis imperdiet. Nam nec justo rhoncus, dignissim odio quis, gravida lacus.</p>
    </>,
    image: ProfileImage
    },
    {
    name: 'Fulanito',
    surname: 'De Tal',
    bio: <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lacinia tortor, commodo sollicitudin est. Integer eu turpis vel ex facilisis euismod ut eu purus. Proin justo est, molestie vitae mauris vel, commodo commodo orci. Nunc pellentesque felis sem, nec placerat ligula dictum nec. Fusce vel rhoncus lectus. Quisque eget felis elit. Proin vel imperdiet lectus.</p>

        <p>Donec suscipit scelerisque dui, vitae porta augue. Integer ut eros blandit, efficitur ante eu, pretium libero. Maecenas fringilla tellus tempor neque bibendum, tincidunt sagittis eros cursus. Nulla vel ante tempus, tempus sem et, congue lectus. Pellentesque sed lectus aliquam nibh mattis vulputate. Vivamus imperdiet imperdiet lectus, quis fermentum tortor auctor vel. Sed ultricies libero sed urna vulputate pharetra.</p>
        
        <p>Mauris porta eleifend tortor, quis hendrerit velit malesuada eu. Praesent vitae neque at purus mollis sodales. Suspendisse blandit lacinia rhoncus. Donec eu finibus velit. Sed scelerisque turpis mattis feugiat maximus. Etiam sed metus risus. Proin molestie varius magna, in pulvinar dolor congue vel. Mauris eu nunc metus. Integer pulvinar aliquam pretium. Suspendisse bibendum sagittis imperdiet. Nam nec justo rhoncus, dignissim odio quis, gravida lacus.</p>
    </>,
    image: ProfileImage
    },
    {
    name: 'Fulanito',
    surname: 'De Tal',
    bio: <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lacinia tortor, commodo sollicitudin est. Integer eu turpis vel ex facilisis euismod ut eu purus. Proin justo est, molestie vitae mauris vel, commodo commodo orci. Nunc pellentesque felis sem, nec placerat ligula dictum nec. Fusce vel rhoncus lectus. Quisque eget felis elit. Proin vel imperdiet lectus.</p>

        <p>Donec suscipit scelerisque dui, vitae porta augue. Integer ut eros blandit, efficitur ante eu, pretium libero. Maecenas fringilla tellus tempor neque bibendum, tincidunt sagittis eros cursus. Nulla vel ante tempus, tempus sem et, congue lectus. Pellentesque sed lectus aliquam nibh mattis vulputate. Vivamus imperdiet imperdiet lectus, quis fermentum tortor auctor vel. Sed ultricies libero sed urna vulputate pharetra.</p>
        
        <p>Mauris porta eleifend tortor, quis hendrerit velit malesuada eu. Praesent vitae neque at purus mollis sodales. Suspendisse blandit lacinia rhoncus. Donec eu finibus velit. Sed scelerisque turpis mattis feugiat maximus. Etiam sed metus risus. Proin molestie varius magna, in pulvinar dolor congue vel. Mauris eu nunc metus. Integer pulvinar aliquam pretium. Suspendisse bibendum sagittis imperdiet. Nam nec justo rhoncus, dignissim odio quis, gravida lacus.</p>
    </>,
    image: ProfileImage
    },
    {
    name: 'Fulanito',
    surname: 'De Tal',
    bio: <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lacinia tortor, commodo sollicitudin est. Integer eu turpis vel ex facilisis euismod ut eu purus. Proin justo est, molestie vitae mauris vel, commodo commodo orci. Nunc pellentesque felis sem, nec placerat ligula dictum nec. Fusce vel rhoncus lectus. Quisque eget felis elit. Proin vel imperdiet lectus.</p>

        <p>Donec suscipit scelerisque dui, vitae porta augue. Integer ut eros blandit, efficitur ante eu, pretium libero. Maecenas fringilla tellus tempor neque bibendum, tincidunt sagittis eros cursus. Nulla vel ante tempus, tempus sem et, congue lectus. Pellentesque sed lectus aliquam nibh mattis vulputate. Vivamus imperdiet imperdiet lectus, quis fermentum tortor auctor vel. Sed ultricies libero sed urna vulputate pharetra.</p>
        
        <p>Mauris porta eleifend tortor, quis hendrerit velit malesuada eu. Praesent vitae neque at purus mollis sodales. Suspendisse blandit lacinia rhoncus. Donec eu finibus velit. Sed scelerisque turpis mattis feugiat maximus. Etiam sed metus risus. Proin molestie varius magna, in pulvinar dolor congue vel. Mauris eu nunc metus. Integer pulvinar aliquam pretium. Suspendisse bibendum sagittis imperdiet. Nam nec justo rhoncus, dignissim odio quis, gravida lacus.</p>
    </>,
    image: ProfileImage
    },
]



const Profesorado = () => {
    const [selectedProf, setSelectedProf] = useState(null)
    const [modalActive, setModalActive] = useState(false)
    return(
        <StyledProfesorado>
            <Modal
                active={modalActive}
                setActive={setModalActive}
                maxWidth='800'>
                    <ModalProfesor>
                        <div className='title'>
                            <Img 
                                src={data[selectedProf]?.image}
                                width={'150'}
                                height={'150'}
                                margin={0}
                                mobileMargin={0}/>
                            <H2>
                                <Span bold color="#000">{data[selectedProf]?.name}</Span> <Span color={"#F4B95F"} bold>{data[selectedProf]?.surname}</Span>
                            </H2>
                        </div>
                        <div className='biography'>
                            <Span textAlign={"justify"} color='#000'>{data[selectedProf]?.bio}</Span>
                        </div>
                    </ModalProfesor>
            </Modal>
            <Span margin={"10px 20px"} fontSize={"20px"}>
                <p>El V Encuentro Musical Cantabilex cuenta con un equipo de profesores muy comprometidos con la enseñanza de la música, además de monitores cuidadosamente seleccionados para que la experiencia de esta semana sea única.</p>

                <p><Span bold>Aquí</Span> te contamos un poquito sobre ellos:</p>
            </Span>
            {data.map((profesor, index) => {
                return(
                <CuadroProfesor key={index} onClick={() => {
                    setSelectedProf(index)
                    setModalActive(true)
                }}>
                    <Img src={profesor.image}/>
                    <H2><Span bold>{profesor.name}</Span> <Span color={"#F4B95F"} bold>{profesor.surname}</Span></H2>
                </CuadroProfesor>
                )
            })}
        </StyledProfesorado>
    )
}

const StyledProfesorado = styled.section `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1024px;
    min-width: 1024px;
    @media (max-width: 1024px){
        max-width: initial;
        min-width: initial;
        width: initial;
    }
`

const CuadroProfesor = styled.div `
    width: 200px;
    margin: 20px;
    cursor: pointer;
    @media (max-width: 480px){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0 20px;
    }
`

const Img = styled.img`
    width: ${props => props.width??"150"}px;
    height: ${props => props.height??"150"}px;
    border-radius: 150px;
    margin: ${props => props.margin??"20px"};
    @media (max-width: 480px){
        width: ${props => props.mobileWidth??"50"}px;
        height: ${props => props.mobileHeight??"50"}px;
        margin: ${props => props.mobileMargin??"auto 20px"};
    }
`

const ModalProfesor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
`
export default Profesorado