import React from 'react';
<<<<<<< HEAD
import {TidbitContent, TidbitsContainer, TidbitTitle} from './styles'
import { SideTitle } from '../../components/SideTitle';
import NavBar from '../../components/NavBar'
import ProjectElement from '../../components/ProjectElement'
=======
import {TidbitTitle, TidbitsContainer} from './styles'
import NavBar from '../../components/NavBar'
import TidbitElement from '../../components/TidbitElement'
>>>>>>> 91315887820f3b7744b02b2f113a43ac8970685d
import {BasicPage} from '../BasicPage/styles'

function Tidbits (props){
    return (
        <BasicPage>
            <NavBar />
<<<<<<< HEAD
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
=======
            <TidbitTitle>TIDBITS</TidbitTitle>
            <TidbitsContainer>
                <TidbitElement summary="A neural network library written in Golang." link="https://github.com/owencmiller/gonet"> Gonet </TidbitElement>
                <TidbitElement summary="This personal website / blog written with React." link="https://github.com/owencmiller/personal-website"> Personal website </TidbitElement>
>>>>>>> 91315887820f3b7744b02b2f113a43ac8970685d
            </TidbitsContainer>
        </BasicPage>
    )
}

export default Tidbits