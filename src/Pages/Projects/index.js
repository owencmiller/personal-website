import React from 'react';
import {ProjectsContainer} from './styles'
import { SideTitle } from '../../components/SideTitle';
import NavBar from '../../components/NavBar'
import ProjectElement from '../../components/ProjectElement'
import {BasicPage} from '../BasicPage/styles'

function Projects (props){
    return (
        <BasicPage>
            <NavBar />
            <SideTitle>PROJECTS</SideTitle>
            <ProjectsContainer>
                <ProjectElement summary="A neural network library written in Golang." link="https://github.com/owencmiller/gonet"> Gonet </ProjectElement>
                <ProjectElement summary="This personal website / blog written with React." link="https://github.com/owencmiller/personal-website"> Personal website </ProjectElement>
            </ProjectsContainer>
        </BasicPage>
    )
}

export default Projects