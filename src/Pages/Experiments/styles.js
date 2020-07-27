import styled from 'styled-components'
import {contentFont} from '../../styles/fonts'

export const ExperimentsPage = styled.div`
    min-height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ${contentFont};
`

export const ExperimentsWrapper = styled.div`
    height: 80vh;
    width: 80%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ExperimentTitle = styled.h1`
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
    
    font-size: 90;
    font-weight: 500;
`

export const ExperimentsContainer = styled.div`
    height: 100%;
    width: 100%;

    padding: 3% 5%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
`

export const ExperimentElement = styled.a`
    height: 30%;
    width: 40%;
    position: relative;
    min-width: 20em;
`

export const ExperimentElementBackground = styled.div`
    height: 100%;
    width: 100%;

    background: url(${props => props.imgurl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; 
    border-radius: 20px;

    ${ExperimentElement}:hover & {
        filter: blur(3px);
    }

    z-index: 0;
`

export const ExperimentText = styled.h2`
    height:100%;
    width: 100%;
    display: none;

    ${ExperimentElement}:hover & {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        z-index: 10;
        color: white;
        font-size: 6em;
        font-weight: 700;
        z-index: 2;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.4);
        border-radius: 20px;
    }
`