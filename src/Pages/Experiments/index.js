import React from 'react';
import {ExperimentsWrapper, ExperimentsPage, ExperimentTitle, ExperimentsContainer, ExperimentBlurb, ExperimentElement} from './styles'
import nnImage from '../../../assets/img/neural_net_fixed.png'
import NavBar from '../../components/NavBar';

function Experiments (props){
    return (
        <ExperimentsPage id='experiments'>
            <NavBar />
            <ExperimentsWrapper>
                <ExperimentTitle>EXPERIMENTS</ExperimentTitle>
                <ExperimentsContainer>
                    <ExperimentBlurb>
                        Sometimes I mess around with stuff, this is that...
                    </ExperimentBlurb>
                    <ul>
                        <li><ExperimentElement>Gonet</ExperimentElement></li>
                    </ul>
                </ExperimentsContainer>
            </ExperimentsWrapper>
        </ExperimentsPage>
    )
}

export default Experiments