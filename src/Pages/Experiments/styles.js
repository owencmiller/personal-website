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

    padding: 8vh 10vh;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
`

export const ExperimentElement = styled.a`
    height: 30%;
    width: 40vh;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 10vh;
    font-weight: 700;
    color: white;

    background: url(${props => props.imgurl || 'white'});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; 

    border-radius: 25px;
`

export const ExperimentText = styled.h2`
    transform: rotate(-19deg);

`