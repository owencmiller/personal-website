import React from 'react';
import {TidbitTitle, TidbitsContainer} from './styles'
import NavBar from '../../components/NavBar'
import TidbitElement from '../../components/TidbitElement'
import {BasicPage} from '../BasicPage/styles'

function Tidbits (props){
    return (
        <BasicPage>
            <NavBar />
            <TidbitTitle>TIDBITS</TidbitTitle>
            <TidbitsContainer>
                <TidbitElement summary="A neural network library written in Golang." link="https://github.com/owencmiller/gonet"> Gonet </TidbitElement>
                <TidbitElement summary="This personal website / blog written with React." link="https://github.com/owencmiller/personal-website"> Personal website </TidbitElement>
            </TidbitsContainer>
        </BasicPage>
    )
}

export default Tidbits