import styled from 'styled-components'
import {contentFont} from '../../styles/fonts'
import {
    slideToLeft,
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

    @media (max-width: 700px) {
        visibility: hidden;
    }
    @media (max-height: 500px) {
        top: 150px;
    }
`

export const TidbitsContainer = styled.ul`

    padding: 7vh 5vw;
    width: 50%;

    display: flex;
    flex-direction: column;

    animation: ${slideToLeft} 1s ease;

    @media (max-width: 700px) {
        width: 85%;
    }
    @media (max-height: 550px){
        padding-top: 100px;
    }
`