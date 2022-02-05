import styled from "styled-components";
import { iconFont } from "../../../styles/fonts";

export const Archive = styled.ul`
    width: 60%;
    padding: 7vh 3vw;
`

export const ArchiveTitle = styled.h1`
    font-size: 40px;
    font-weight: 300;
    margin-bottom: 30px
`

export const Blurb = styled.li`
    margin: 20px 0px;
    display: flex;
    align-items: flex-end;
`

export const BlurbTitle = styled.h1`
    margin-left: 1em;
    font-size: 20px;
    font-weight: 500;
    color: #4a4a4a;
`

export const BlurbDate = styled.h1`
    color: gray;
`

export const PostTitle = styled.h1`
    font-size: 40px;
    font-weight: 300;
    margin-bottom: 10px
`

export const PostDate = styled.h1`
    color: gray;
    margin-bottom: 30px;
`

export const PostPara = styled.p`
    font-family: ${iconFont};
    font-size: 20px;
    text-indent: 40px;
    margin-top: 15px;
    margin-bottom: 15px;
`