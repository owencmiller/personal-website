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
    
    font-size: 90px;
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

export const ExperimentBlurb = styled.i`
    width: 100%;
    height: 2em;
    min-width: 20em;

    font-size: 1.15em;
    text-align: center;
    border-bottom: 2px dotted;
`

export const ExperimentElement = styled.a`
    width: 100%;
    text-decoration: none;
    color: #4a4a4a;


`