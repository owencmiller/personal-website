import styled from 'styled-components';
import {
    slideToLeft,
    slideToTop,
    slideToBottom,
    scaleIn,
    fadeIn,
  } from '../../../styles/animations'

export const GotoButtonStyled = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 50vh;
    height: 10vh;
    margin-bottom: 10px;
    

    font-size: 20;
    text-decoration: none;
    animation: ${fadeIn} 1s ease;
`

export default {}