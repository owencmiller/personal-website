import React from 'react';
import {TidbitContent, TidbitsContainer, TidbitTitle} from './styles'
import { SideTitle } from '../../components/SideTitle';
import NavBar from '../../components/NavBar'
import ProjectElement from '../../components/ProjectElement'
import {BasicPage} from '../BasicPage/styles'

function Tidbits (props){
    return (
        <BasicPage>
            <NavBar />
            <SideTitle>TIDBITS</SideTitle>
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