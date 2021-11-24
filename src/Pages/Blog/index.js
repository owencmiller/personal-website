import React from 'react';
import { SideTitle } from '../../components/SideTitle';
import NavBar from '../../components/NavBar'
import {BasicPage} from '../BasicPage/styles'

function Blog (props){
    return (
        <BasicPage>
            <NavBar />
            <SideTitle>BLOG</SideTitle>
        </BasicPage>
    )
}

export default Blog