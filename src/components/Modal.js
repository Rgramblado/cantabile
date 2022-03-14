import styled from "styled-components"
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";

const Modal = ({
    active,
    setActive,
    maxWidth="400",
    children
}) => {
    const [hidding, setHidding] = useState(false)

    const closeModal = () => {
        setHidding(true)
        setActive(false)
        setTimeout(() => {
            setHidding(false)
        }, 500)
    }
    return(
    <ModalContainer
        className={active ? 'active' : hidding ? 'hidding' : ''}>
        <StyledModal maxWidth={maxWidth}>
            <div className="children">{children}</div>
            <StyledCloseIcon
                breakpoint={maxWidth+50}
                onClick={() => closeModal()}/>
        </StyledModal>
    </ModalContainer>
    )
}

const StyledModal = styled.div `
    max-width: ${props => props.maxWidth}px;
    position: relative;
    background-color: #FFF;
    border-radius: 20px;
    max-height: 75vh;
    & .children{
        padding: 20px;
        max-height: calc(75vh - 40px);
        overflow-y: auto;
    }
`

const ModalContainer = styled.div `
    display: none;
    &.active, &.hidding{display: flex;}
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    &.active{
        animation: modalAnimation .5s linear;
        @keyframes modalAnimation{
            0%{
                opacity: 0;
            }
            100%{
                opacity: 1;
            }
        }
    }
    &.hidding{
        opacity: 0;
        animation: modalAnimationOut .5s linear;
        @keyframes modalAnimationOut{
            0%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }
    }
    
`

const StyledCloseIcon = styled(CloseIcon)`
    position: absolute;
    right: -25px;
    top: -25px;
    width: 15px; 
    height: 15px;
    background-color: #FFF;
    padding: 5px;
    border-radius: 15px;
    &:hover{
        transition: .3s all ease;
        background-color: #CCC;
        cursor: pointer;
    }
    &:not(:hover){
        transition: .3s all ease;
    }
    @media(max-width: ${props => props.breakpoint??"425"}px){
        top: -40px;
        right: 10px;
    }
`

export default Modal