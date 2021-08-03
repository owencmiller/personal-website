import React from 'react';
import {BlogHeader, BlogImage, BlogText, BlogWrapper} from './styles'
import NavBar from '../../components/NavBar'
import {BasicPage} from '../BasicPage/styles'

// TODO - clean up image imports
import img1 from '../../../assets/img/IMG_0004.png'
import img2 from '../../../assets/img/IMG_0100.png'
import img3 from '../../../assets/img/IMG_0123.png'
import img4 from '../../../assets/img/IMG_2304.png'
import img5 from '../../../assets/img/IMG_0003.png'
import img6 from '../../../assets/img/IMG_0021.png'
import img7 from '../../../assets/img/IMG_0060.png'
import img8 from '../../../assets/img/IMG_0093.png'
import img9 from '../../../assets/img/IMG_0116.png'

function Blog (props){
    return (
        <BasicPage>
            <NavBar />
            <BlogHeader>
                Acadia National Park
            </BlogHeader>
            <BlogText>
                &emsp; &emsp; First stop is Acadia National Park in Maine! Great hiking, awesome views, and I'm learning a lot about living in a van. So 
                far the hardest parts have been finding a place to park and dealing with smelly hiking shoes. Nonetheless, so far so good!
            </BlogText>
            <BlogWrapper>
                <BlogImage src= {img4}/>
                <BlogImage src= {img1}/>
                <BlogImage src= {img2}/>
                <BlogImage src= {img3}/>
                <BlogImage src= {img5}/>
                <BlogImage src= {img6}/>
                <BlogImage src= {img7}/>
                <BlogImage src= {img8}/>
                <BlogImage src= {img9}/>
            </BlogWrapper>
        </BasicPage>
    )
}

export default Blog