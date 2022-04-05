import { useRef } from "react"
import styled from "styled-components"


const Gallery = ({
    images
}) => {
    const galleryRef = useRef(null);

    const scroll = (px) => {
        galleryRef.current.scrollLeft += px;
    }
    return (
        <StyledGallery>
            <div className="arrow">
                <ArrowContainer onClick={() => {scroll(-galleryRef.current.clientWidth*2/3)}} left>&lt;</ArrowContainer>
            </div>
            <StyledGalleryImages ref={galleryRef}>
                {images.map((image, index) => {
                    return(
                        <img src={image} alt="Instalaciones" key={index}/>
                    )
                })}
            </StyledGalleryImages>
            <div className="arrow">
                <ArrowContainer onClick={() => {scroll(galleryRef.current.clientWidth*2/3)}}>&gt;</ArrowContainer>
            </div>
        </StyledGallery>
    )
}

const ArrowContainer = styled.div `
    background-color: #CCC;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    cursor: pointer;
    transition: all ease .3s;
    :hover{
        transform: ${props => props.left ? "translate(-10px, 0)" : "translate(10px, 0)"};
        @media(max-width: 1024px){
            transform: translate(0, 0);
        }
    }
`

const StyledGallery = styled.div `
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    grid-gap: 10px;
    margin-left: 5px;
    margin-right: 5px;
    .arrow{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const StyledGalleryImages = styled.div `
    max-height: 200px;
    width: auto;
    display: flex;
    justify-content: flex-start;
    overflow-x: hidden;
    scroll-behavior: smooth;
    img{
        height: 200px;
        width: auto;
    }
`

export default Gallery