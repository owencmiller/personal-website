import styled from 'styled-components'
import {contentFont} from '../../styles/fonts'
import {
    slideToLeft,
    slideToRight,
    scaleIn
} from '../../styles/animations'


export const TidbitsContainer = styled.div`

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

export const TidbitTitle = styled.h1`
    font-weight: bolder;
    padding-top: 1em;
`

export const TidbitContent = styled.h1`
    padding-left: 1.5em;
`