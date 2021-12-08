import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
    slideToRight
} from '../../styles/animations'

const SideTitleStyled = styled.h1`
    top: calc(50% - 170px);
    left: 9vw;

    writing-mode: vertical-lr;
    transform: rotate(-180deg);
    
    position: fixed;
    
    font-size: 80px;
    font-weight: 700;
    letter-spacing: 20px;
    color: #4a4a4a;

    animation: ${slideToRight} 1s ease;

    @media (max-width: 700px) {
        visibility: hidden;
    }
    @media (max-height: 500px) {
        top: 150px;
    }
`

function SideTitle(props){
    return(
        <Link to={"/" + props.link}>
            <SideTitleStyled>
                {props.title}
            </SideTitleStyled>
        </Link>
    )
}

export default SideTitle;