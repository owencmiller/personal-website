import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom';
import { Archive, ArchiveTitle, Blurb, BlurbTitle, BlurbDate, BlurbSummary } from "./styles";
import { post1 } from "./1"

const Center = styled.div`
    display: flex;
    justify-content: center;
`

// TODO: add unique key props to items
function wrap(content){
    if (typeof(content) == 'string'){
        return <p>{content}</p>
    }
    return <Center>{content}</Center>
}

export function build_post(post){
    return(
        <div>
            <h1>{post.title}</h1>
            <h3>{post.date}</h3>
            {post.content.map(x => (
                wrap(x)
            ))}
        </div>
    )
}

function build_post_blurb(post){
    return(
        <Link to={"/blog/"+post.id}>
            <Blurb>
                <BlurbTitle>{post.title}</BlurbTitle>
                <BlurbDate>{post.date}</BlurbDate>
                <BlurbSummary>{post.summary}</BlurbSummary>
            </Blurb>
        </Link>
    )
}

export function get_archive(){
    return(
        <Archive>
            <ArchiveTitle>Archive</ArchiveTitle>
            {visible_posts.map( (post) => (
                build_post_blurb(post)
            ))}
        </Archive>
    )
}


export const visible_posts = [
    post1
]