import React from 'react';
import { SideTitle } from '../../components/SideTitle';
import NavBar from '../../components/NavBar'
import {BasicPage} from '../BasicPage/styles'
import { visible_posts } from './BlogPosts';
import P5test from './BlogPosts/1/p5test';



function Blog (props){
    return (
        <BasicPage>
            <NavBar />
            <SideTitle>BLOG</SideTitle>
            {visible_posts.map(post => (
                <div>{post}</div>
            ))}
        </BasicPage>
    )
}

export default Blog