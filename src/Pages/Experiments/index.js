import React from 'react';
import {ExperimentsWrapper, ExperimentsPage, ExperimentTitle, ExperimentsContainer, ExperimentBlurb, ExperimentElement} from './styles'
import NavBar from '../../components/NavBar'
import {BasicPage} from '../BasicPage/styles'

function Experiments (props){
    return (
        <BasicPage>
            <NavBar />
                <ExperimentTitle>EXPERIMENTS</ExperimentTitle>
                <ExperimentsContainer>
                    <ExperimentElement href="https://github.com/owencmiller/gonet"> gonet </ExperimentElement>
                    <ExperimentElement href="https://github.com/owencmiller/personal-website"> personal website </ExperimentElement>
                </ExperimentsContainer>
        </BasicPage>
    )
}

export default Experiments