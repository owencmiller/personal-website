import React from 'react'
import {
    TidbitElementContainer,
    TidbitElementTitle,
    TidbitElementSummary,
    TidbitElementReadMore
} from './styles'


function TidbitElement(props){

    return (
        <TidbitElementContainer>
            <TidbitElementTitle href={props.link}>
                {props.children}
            </TidbitElementTitle>
            <TidbitElementSummary>
                {props.summary}
            </TidbitElementSummary>
            <TidbitElementReadMore href={props.link}>
                READ MORE
            </TidbitElementReadMore>
        </TidbitElementContainer>
    )
}

export default TidbitElement