import styled from 'styled-components'
import {contentFont} from '../../styles/fonts'
import {
    slideToLeft,
    slideToRight,
    scaleIn
} from '../../styles/animations'


export const ProjectsContainer = styled.ul`

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