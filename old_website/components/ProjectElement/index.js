import React from 'react'
import {
    ProjectElementContainer,
    ProjectElementTitle,
    ProjectElementSummary,
    ProjectElementReadMore
} from './styles'


function ProjectElement(props){

    return (
        <ProjectElementContainer>
            <ProjectElementTitle href={props.link}>
                {props.children}
            </ProjectElementTitle>
            <ProjectElementSummary>
                {props.summary}
            </ProjectElementSummary>
            <ProjectElementReadMore href={props.link}>
                READ MORE
            </ProjectElementReadMore>
        </ProjectElementContainer>
    )
}

export default ProjectElement