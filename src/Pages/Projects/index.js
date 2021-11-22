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
                <ProjectElement summary="a neural network library written in Golang." link="https://github.com/owencmiller/gonet"> gonet </ProjectElement>
                <ProjectElement summary="this personal website / blog written with React." link="https://github.com/owencmiller/personal-website"> owenmiller.me </ProjectElement>
            </ProjectsContainer>
        </BasicPage>
    )
}

export default Projects