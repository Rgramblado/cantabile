import styled from "styled-components";

export const H1 = styled.h1 `
    color: ${props => props.color ?? "#FFF"};
    letter-spacing: 4px;
    font-size: ${props => props.fontSize ?? "2em"}
`
export const H2 = styled.h2 `
    color: ${props => props.color ?? "#FFF"};
    letter-spacing: 4px;
`
export const H3 = styled.h3 `
    color: ${props => props.color ?? "#FFF"};
    letter-spacing: 4px;
`

export const Span = styled.span `
    color: ${props => props.color ?? "#FFF"};
    font-weight: ${props => props.bold ? "bold" : "normal"};
    ${props => props.fontSize ? "font-size: " + props.fontSize : ""};
    font-style: ${props => props.italic ? "italic" : props.oblique ? "oblique" :"normal"};
    margin: ${props => props.margin ?? "initial"};
    text-align: ${props => props.textAlign ?? "initial"}
`