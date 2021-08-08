import React from 'react';
import {BlogHeader, BlogImage, BlogText, BlogImageWrapper, BlogPost} from '../styles'

// TODO - clean up image imports
import img1 from '../../../../assets/img/acadia/IMG_0004.JPG'
import img2 from '../../../../assets/img/acadia/IMG_0100.JPG'
import img3 from '../../../../assets/img/acadia/IMG_0123.JPG'
import img4 from '../../../../assets/img/acadia/IMG_2303.JPG'
import img5 from '../../../../assets/img/acadia/IMG_0003.JPG'
import img6 from '../../../../assets/img/acadia/IMG_0021.JPG'
import img7 from '../../../../assets/img/acadia/IMG_0060.JPG'
import img8 from '../../../../assets/img/acadia/IMG_0093.JPG'
import img9 from '../../../../assets/img/acadia/IMG_0116.JPG'


export const acadia = 
<BlogPost>
    <BlogHeader>
    Acadia National Park
    </BlogHeader>
    <BlogText>
    &emsp; &emsp; First stop is Acadia National Park in Maine! Great hiking, awesome views, and I'm learning a lot about living in a van. So 
    far the hardest parts have been finding a place to park and dealing with smelly hiking shoes. Nonetheless, so far so good!
    </BlogText>
    <BlogImageWrapper>
        <BlogImage src= {img4}/>
        <BlogImage src= {img1}/>
        <BlogImage src= {img2}/>
        <BlogImage src= {img3}/>
        <BlogImage src= {img5}/>
        <BlogImage src= {img6}/>
        <BlogImage src= {img7}/>
        <BlogImage src= {img8}/>
        <BlogImage style={{maxWidth: "70%"}} src= {img9}/>
    </BlogImageWrapper>
</BlogPost>

import img10 from '../../../../assets/img/cuyahoga/IMG_0305.JPG'
import img11 from '../../../../assets/img/cuyahoga/IMG_0324.JPG'
import img12 from '../../../../assets/img/cuyahoga/IMG_0331.JPG'
import img13 from '../../../../assets/img/cuyahoga/IMG_0336.JPG'
import img14 from '../../../../assets/img/cuyahoga/IMG_0347.JPG'
import img15 from '../../../../assets/img/cuyahoga/IMG_0361.JPG'
import img16 from '../../../../assets/img/cuyahoga/IMG_0372.JPG'
import img17 from '../../../../assets/img/cuyahoga/IMG_0383.JPG'
import img18 from '../../../../assets/img/cuyahoga/IMG_0395.JPG'


export const cuyahoga = 
<BlogPost>
    <BlogHeader>
    Cuyahoga Valley National Park
    </BlogHeader>
    <BlogText>
    &emsp; &emsp; Second stop was Cuyahoga Valley National Park in Ohio! More good hiking and some interesting history. There was a beautiful stream 
    with only an couple of inches of water running through it which made the classic "babbling brook" sound. Two parks down and a lot more to go!
    </BlogText>
    <BlogImageWrapper>
        <BlogImage src= {img10}/>
        <BlogImage src= {img11}/>
        <BlogImage src= {img12}/>
        <BlogImage src= {img17}/>
        <BlogImage src= {img15}/>
        <BlogImage src= {img16}/>
        <BlogImage src= {img18}/>
        <BlogImage src= {img13}/>
        <BlogImage style={{maxWidth: "70%"}} src= {img14}/>
    </BlogImageWrapper>
</BlogPost>


import img20 from '../../../../assets/img/indianadunes/IMG_0399.jpeg'
import img21 from '../../../../assets/img/indianadunes/IMG_0410.jpeg'
import img22 from '../../../../assets/img/indianadunes/IMG_0412.jpeg'
import img23 from '../../../../assets/img/indianadunes/IMG_0416.jpeg'
import img24 from '../../../../assets/img/indianadunes/IMG_0417.jpeg'
import img25 from '../../../../assets/img/indianadunes/IMG_0421.jpeg'
import img26 from '../../../../assets/img/indianadunes/IMG_0424.jpeg'
import img27 from '../../../../assets/img/indianadunes/IMG_0436.jpeg'
import img28 from '../../../../assets/img/indianadunes/IMG_0445.jpeg'
import img29 from '../../../../assets/img/indianadunes/IMG_0452.jpeg'



export const indianadunes = 
<BlogPost>
    <BlogHeader>
    Indiana Dunes National Park
    </BlogHeader>
    <BlogText>
    &emsp; &emsp; Third stop was Indiana Dunes National Park! About an hour hike out to a beautiful quiet beach on Lake Michigan was totally worth it.
    The 90 degree heat made the trek difficult, but I learned a lot about the biomes in the area and that reapplying sunblock is essential.
    </BlogText>
    <BlogImageWrapper>
        <BlogImage src= {img20}/>
        <BlogImage src= {img21}/>
        <BlogImage src= {img22}/>
        <BlogImage src= {img29}/>
        <BlogImage src= {img24}/>
        <BlogImage src= {img25}/>
        <BlogImage src= {img26}/>
        <BlogImage src= {img27}/>
        <BlogImage src= {img28}/>
        <BlogImage src= {img23}/>
    </BlogImageWrapper>
</BlogPost>