import styled from 'styled-components'
import {
    slideToRight
} from '../../styles/animations'

export const SideTitle = styled.h1`
    top: calc(50% - 150px);
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