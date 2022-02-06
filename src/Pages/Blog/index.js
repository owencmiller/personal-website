import React from 'react';
import SideTitle from '../../components/SideTitle';
import { useParams } from 'react-router';
import NavBar from '../../components/NavBar'
import { BasicPage } from '../BasicPage/styles'
import { get_archive, visible_posts } from './BlogPosts';
import { BlogPost } from './styles';
import { build_post_blurb, build_post} from './BlogPosts';


function Blog (props){
    let blog_num = useParams();
    console.log("Blog Number: ", blog_num)
    if(Object.keys(blog_num).length === 0){
        let visible = get_archive()
    }else{
        let visible = <BlogPost>{build_post([...visible_posts].reverse()[blog_num.id-1])}</BlogPost>
    }
    return (
        <BasicPage>
            <NavBar />
            {/* <SideTitle link={"blog"} title={"BLOG"}/> */}
            {visible}
        </BasicPage>
    )
}

export default Blog