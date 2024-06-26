import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom';
import { Archive, ArchiveTitle, Blurb, BlurbTitle, BlurbDate, PostTitle, PostDate, PostPara } from "./styles";
import { post1 } from "./1"
import { post2 } from "./2";

const Center = styled.div`
    display: flex;
    justify-content: center;
`

// TODO: add unique key props to items
function wrap(content){
    if (typeof(content) == 'string'){
        return <PostPara>{'\t' + content}</PostPara>
    }
    return <Center>{content}</Center>
}

export function build_post(post){
    return(
        <div>
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
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
                <BlurbDate>{post.date}</BlurbDate>
                <BlurbTitle>{post.title}</BlurbTitle>
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
    post2,
    post1
]