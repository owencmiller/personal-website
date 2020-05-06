import React from 'react';
import {ExperimentsWrapper, ExperimentsPage, ExperimentTitle, ExperimentsContainer, ExperimentElement, ExperimentText} from './styles'
import nnImage from '../../../assets/img/neural_net_fixed.png'

function Experiments (props){
    return (
        <ExperimentsPage id='experiments'>
            <ExperimentsWrapper>
                <ExperimentTitle>EXPERIMENTS</ExperimentTitle>
                <ExperimentsContainer>
                    <ExperimentElement imgurl={nnImage} href="https://github.com/owencmiller/gonet">
                        <ExperimentText>GoNET</ExperimentText>
                    </ExperimentElement>
                </ExperimentsContainer>
            </ExperimentsWrapper>
        </ExperimentsPage>
    )
}

export default Experiments