import styled from 'styled-components'
import {contentFont} from '../../styles/fonts'
import {
    slideToLeft,
    slideToRight,
    scaleIn
} from '../../styles/animations'


export const TidbitTitle = styled.h1`
    font-weight: bolder;
`

export const TidbitContent = styled.p`
    padding-left: 2em;
    padding-top: .25em;
    padding-bottom: .5em;
`

export const TidbitsContainer = styled.ul`

    padding: 11vh 8vw;
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