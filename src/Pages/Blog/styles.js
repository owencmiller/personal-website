import styled from 'styled-components'
import {contentFont} from '../../styles/fonts'
import {
    slideToLeft,
    slideToRight,
    scaleIn
} from '../../styles/animations'


export const BlogWrapper = styled.div`
    width: 100%;

    position: static;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`

export const BlogImage = styled.img`
    margin: 10px;
`

export const BlogHeader = styled.h1`
    font-size: 2em;
    font-weight: bold;
    padding-top: 1em;
`

export const BlogText = styled.p`
    width: 60%;
    padding: 2em 0em;
`