import { useEffect, useState } from "react"
import styled from "styled-components";
import Input from "../components/Input"

const Inscripcion = () => {
    const [values, setValues] = useState({});

    const questions = [
        [
            {
                label: "Nombre",
                name: "name",
                required: true,
                validatorRegex: /^\w+$/
            },
            {
                label: "Primer apellido",
                name: "surname1",
                required: true,
                validatorRegex: /^\w+$/
            },
            {
                label: "Segundo apellido",
                name: "surname2",
                required: false,
                validatorRegex: /^\w+$/
            },
        ],
        [
            {
                label: "NIF",
                name: "nif",
                required: true,
            },
            {
                label: "Teléfono del alumno",
                name: "stTlf",
                required: false,
                validatorRegex: /^\+?\d+$/
            },
            {
                label: "Fecha de nacimiento",
                name: "dateBirth",
                required: true,
                date: true
            },
        ],
        [
            {
            label: "Dirección",
            name: "address",
            required: true,
            big: true
            },
        ]
    ]

    const changeHandler = (field) => {
        let temp = Object.create(values)
        temp[field.name] = field.value
        setValues(temp)
    }
    
    return(
        <Container>
            {
                questions.map((row, index) => {
                    return (
                    <Row key={index}>
                        {row.map((question, subindex) => {
                            return(
                                <Input 
                                    key={subindex}
                                    name={question.name}
                                    setValue={changeHandler}
                                    value={values[question.name] || ""}
                                    label={question.label}
                                    type={question.type??"text"}
                                    required={question.required??false}
                                    date={question.date??false}
                                    big={question.big??false}
                                    validatorRegex={question.validatorRegex??null}
                                />
                            )
                        })}
                    </Row>
                    )
                })
            }
        </Container>
    )
}

const Container = styled.div `
    display: flex;
    flex-direction: column;

` 

const Row = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(max-width: 1024px){
        flex-direction: column;
    }
`

export default Inscripcion