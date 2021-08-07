import React, {useState} from 'react';
import NavBar from '../../components/NavBar'
import {BasicPage} from '../BasicPage/styles'
import {acadia, cuyahoga} from './BlogPosts/posts'
import { BlogNav, BlogNavLink } from './styles';

const posts = [acadia, cuyahoga]

function Blog (props){
    const [page, setPage] = useState(0)

    return (
        <BasicPage>
            <NavBar />
            <BlogNav>
                <BlogNavLink onClick={() => setPage(0)}>
                    Acadia
                </BlogNavLink>
                <BlogNavLink onClick={() => setPage(1)}>
                    Cuyahoga
                </BlogNavLink>
            </BlogNav>
            {posts[page]}
        </BasicPage>
    )
}

export default Blog