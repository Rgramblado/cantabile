import { useRef, useState } from "react"
import styled from "styled-components"
import { Div } from "./Basics"

const Input = ({
    label,
    type,
    value="",
    name,
    required,
    date,
    big,
    validatorRegex,
    errorMessage,
    setValue=() => {}
}) => {
    const inputRef = useRef(null)
    const [focused, setFocused] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const changeHandler = () => {
        if(validatorRegex){
            setIsValid(validatorRegex.test(inputRef.current.value))
        }else{
            setIsValid(true)
        }
        setValue({
            name: name,
            value: inputRef.current.value
        })
    }
 
    return(
        <Container>
            <div className="field">
                <StyledInput 
                    type={type ? type : "text"} 
                    ref={inputRef} 
                    className={value.length !== 0 ? "contains": null}
                    value={value}
                    onChange={() => changeHandler()}
                    onFocus={ () => {setFocused(true)}}
                    onBlur={() => {setFocused(false)}}
                    placeholder={date && focused ? "dd/mm/yyyy" : null }
                    big={big??false}
                    isValid={isValid}
                    />
                <StyledSpan label={label} required={required} onClick={() => {
                    if(focused){
                        inputRef.current.blur()
                    }else{
                        inputRef.current.focus()
                    }
                }}/>
            </div>
            {required ?
            <StyledAsterisco>*</StyledAsterisco>
            : null}
            {!isValid && inputRef.current.value.length > 0 && errorMessage? <Div color="#FF0000">{errorMessage}</Div> : null}
            {required && !isValid && inputRef.current.value.length === 0 ? <Div color="#FF0000">Este campo es requerido</Div> : null}
        </Container>
    )
}

const StyledAsterisco = styled.span `
    position: absolute;
    right: -10px;
    top: -10px;
    color: #FF0000;
    font-size: 20px;
    transform: translate(-50%, -50%);
`

const StyledSpan = styled.span`
    position: absolute;
    top: 50%;
    bottom: 0;
    left: 10px;
    display: flex;
    align-items: center;
    height: 1em;
    width: ${props => props.big ? "600px" : "300px"};
    color: #000;
    font-size: 18px;
    z-index: 1;
    cursor: text;
    transition: all linear .2s;
    transform: translate(0, -50%);
    &:before{
        content: '${props => props.label}';
        overflow: visible;
    }

    @media(max-width: 800px){
        width: 300px;
    }
`

const StyledInput = styled.input `
    width: ${props => props.big ? "560px" : "280px"};
    padding: 5px 10px;
    border: none;
    font-size: 18px;
    border-radius: 10px;
    outline: none;
    ${props => !props.isValid ? 'border: solid 2px #FF0000;' : null}
    @media(max-width: 1024px){
        width: 80vw;
    }
`

const Container = styled.div `
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 20px;
    .field{
        display: inline;
        position: relative;
    }
    ${StyledInput}:focus ~ ${StyledSpan}, ${StyledInput}.contains ~ ${StyledSpan} {
        top: -25px;
        left: 0;
        cursor: initial;
        transform: none;
    }
`


export default Input