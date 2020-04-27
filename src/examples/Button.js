import styled from 'styled-components'

const Button = styled.button`
    color: ${props => props.textColor};
    background: ${props => props.bgColor};
    font-size: ${props => props.big? '3rem':'1rem'};
    padding: 1rem;
    margin: 1rem;
`

export default Button
