import React from 'react';
import {ExperimentsWrapper, ExperimentsPage, ExperimentTitle, ExperimentsContainer, ExperimentElement, ExperimentText, ExperimentElementBackground} from './styles'
import nnImage from '../../../assets/img/neural_net_fixed.png'

function Experiments (props){
    return (
        <ExperimentsPage id='experiments'>
            <ExperimentsWrapper>
                <ExperimentTitle>EXPERIMENTS</ExperimentTitle>
                <ExperimentsContainer>
                    <ExperimentElement href="https://github.com/owencmiller/gonet">
                        <ExperimentElementBackground imgurl={nnImage} ></ExperimentElementBackground>
                        <ExperimentText>GONET</ExperimentText>
                    </ExperimentElement>
                </ExperimentsContainer>
            </ExperimentsWrapper>
        </ExperimentsPage>
    )
}

export default Experiments