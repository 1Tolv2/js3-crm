import React from 'react'
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
justify-self: end;
color: white;
background-color: #33cccc;
font-weight: 600;
padding: 5px;
margin: 5px 0;
width: 80px;
border-radius: 2px;
border: none;
cursor: pointer;

${(props) => props.delete && css`background-color: #ff3300;`}
`

const GridButton = styled(StyledButton)`
grid-column-start: ${props => props.colStart};
grid-column-end: ${props => props.colEnd};
width: ${props => props.width}%;
box-sizing: border-box;
margin-top: 20px;
${(props) => props.delete && css`background-color: #ff3300;`}

@media (max-width: 1000px) {
    align-self: flex-end;
    }
@media (max-width: 550px) {
width: 100%;

}
`

export default function Button(props) {
    return (
        <>
        {props.gridButton ? <GridButton type="submit" {...props}>
            {props.children}
        </GridButton> : <StyledButton onClick={props.onClick} delete={props.delete}>{props.children}</StyledButton>}
        </>
    )
}
