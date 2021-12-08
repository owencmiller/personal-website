import React from 'react';
import {TidbitContent, TidbitTitle, TidbitsContainer} from './styles'
import NavBar from '../../components/NavBar'
import {BasicPage} from '../BasicPage/styles'
import SideTitle from '../../components/SideTitle';

function Tidbits (props){
    return (
        <BasicPage>
            <NavBar />
            <SideTitle link="tidbits" title="TODBITS"/>
            <TidbitsContainer>
                <TidbitTitle>from: </TidbitTitle>
                <TidbitContent>philadelphia</TidbitContent>
                <TidbitTitle>likes: </TidbitTitle>
                <TidbitContent>hard problems and math</TidbitContent>
                <TidbitTitle>dislikes: </TidbitTitle>
                <TidbitContent>olives</TidbitContent>
                <TidbitTitle>good at: </TidbitTitle>
                <TidbitContent>code (julia, python, c, java) and asking a lot of questions</TidbitContent>
                <TidbitTitle>bad at: </TidbitTitle>
                <TidbitContent>painting and cooking (for now)</TidbitContent>
            </TidbitsContainer>
        </BasicPage>
    )
}

export default Tidbits