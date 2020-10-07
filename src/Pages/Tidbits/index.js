import React from 'react';
import {ExperimentsWrapper, ExperimentsPage, ExperimentTitle, ExperimentsContainer, ExperimentBlurb, ExperimentElement} from './styles'
import nnImage from '../../../assets/img/neural_net_fixed.png'
import NavBar from '../../components/NavBar'
import {BasicPage} from '../BasicPage/styles'

function Experiments (props){
    return (
        <BasicPage>
            <NavBar />
                <ExperimentTitle>TIDBITS</ExperimentTitle>
                <ExperimentsContainer>
                    <ExperimentElement href="https://github.com/owencmiller/gonet"> gonet </ExperimentElement>
                    <ExperimentElement href="https://github.com/owencmiller/personal-website"> personal website </ExperimentElement>
                </ExperimentsContainer>
        </BasicPage>
    )
}

export default Experiments