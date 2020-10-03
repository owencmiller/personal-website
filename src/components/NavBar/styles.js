import styled from 'styled-components'
import { contentFont } from '../../styles/fonts'


export const NavBarStyled = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 4em;

    position: absolute;
    padding: 2.5em 15vw;

    display: flex;
    justify-content: space-between;
`

export const NavLinkStyled = styled.h4`
    font: ${contentFont};
    color: grey;
`