import styled from 'styled-components'
import {
    slideToLeft,
    slideToTop,
    slideToBottom,
    scaleIn,
    fadeIn,
  } from '../../styles/animations'

export const BlogPost = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const BlogImageWrapper = styled.div`
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
    max-width:35%;
    height: auto;
`

export const BlogHeader = styled.h1`
    font-size: 2.5em;
    font-weight: bold;
    padding-top: 1em;
`

export const BlogText = styled.p`
    width: 60%;
    padding: 2em 0em;
`

export const BlogNav = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    padding: 1em 2em;
    border-bottom: grey;
    border-top: grey;
    border-left: white;
    border-right: white;
    border-style: solid;
`

export const BlogNavLink = styled.button`
    background-color: white;
    border: white;
    padding: 0em 3em;
    font-size: 1.25em;
    color: grey;
    text-decoration: underline;
    font-weight: 800;

    &:hover{
        cursor: pointer;
    }

`