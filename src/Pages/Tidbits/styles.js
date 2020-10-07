import styled from 'styled-components'
import {contentFont} from '../../styles/fonts'
import {
    slideToRight,
    scaleIn
} from '../../styles/animations'


export const TidbitsWrapper = styled.div`
    min-height: 70vh;
    width: 100%;
    padding: 0vh 15vw;

    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const TidbitTitle = styled.h1`
    top: calc(50% - 100px);
    left: 15vw;

    writing-mode: vertical-lr;
    transform: rotate(-180deg);
    
    position: fixed;
    
    font-size: 80px;
    font-weight: 500;

    animation: ${slideToRight} 1s ease;

    @media (max-width: 500px) {
        visibility: hidden;
    }
`

export const TidbitsContainer = styled.ul`
    padding: 3vh 10vw;
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TidbitElement = styled.a`
    margin: 5vh 3vw;

    font-size: 30px;
    text-align: center;

    color: #888888;
    text-decoration: none;

    border-bottom: 2px solid;

    animation: ${scaleIn} 1s ease;

    &:hover{
        color: #000;
    }
`