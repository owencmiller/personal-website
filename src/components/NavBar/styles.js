import styled from 'styled-components'
import { contentFont, iconFont } from '../../styles/fonts'


export const NavBarStyled = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 140px;

    padding: 0vh 15vw;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavLinkStyled = styled.h4`
    font: ${contentFont};
    color: #4a4a4a;
    opactiy: 0.7;

    &:hover{
        color: #000;
        opacity: 1;
    }
`

export const NavPagesStyled = styled.div`
    width: 15em;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MainIcon = styled.h1`
    font-family: ${iconFont};
    font-size: 50px;

    color: #000;
`