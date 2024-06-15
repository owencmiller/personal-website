import styled from 'styled-components'
import { contentFont, iconFont } from '../../styles/fonts'


export const NavBarStyled = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 140px;

    padding: 0vh 20vw;
    flex: 0 0 140px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavLinkStyled = styled.h4`
    padding: 0em .75em;
    font: ${contentFont};
    color: #4a4a4a;
    opactiy: 0.7;

    &:hover{
        color: #000;
        opacity: 1;
    }
`

export const NavPagesStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MainIcon = styled.h1`
    font-family: ${iconFont};
    font-size: 50px;
    font-weight: 200;

    color: #000;
`