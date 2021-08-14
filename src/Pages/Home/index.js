import React from 'react';
import styled from 'styled-components'
import {BasicPage} from '../BasicPage/styles'
import {
    Info as InfoStyled,
    Name as NameStyled,
    Slogan as SloganStyled,
    Description as DescriptionStyled,
    SocialNetwork as SocialNetworkStyled,
    Action as ActionStyled,
} from './styles'
import SocialMedia from '../../components/SocialMedia'
import NavBar from '../../components/NavBar'
import {contentFont} from '../../styles/fonts'



function Home (props){
    return(
        <BasicPage>
            <NavBar />
            <InfoStyled>
                <NameStyled>Owen Miller</NameStyled>
                <DescriptionStyled>Your friendly neighborhood fullstack developer and vanlife traveller<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style={{color:'white'}}>.</a></DescriptionStyled>
                <SocialNetworkStyled>
                    <SocialMedia link="https://twitter.com/owen_c_miller" type="twitter">
                        owen_c_miller
                    </SocialMedia>
                    <SocialMedia link="https://github.com/owencmiller" type="github">
                        owencmiller
                    </SocialMedia>
                    <SocialMedia link="https://www.linkedin.com/in/owen-c-miller/" type="linkedin">
                        owen-c-miller
                    </SocialMedia>
                    <SocialMedia link="" type="envelope">
                        mail [at] owenmiller [dot] me
                    </SocialMedia>
                </SocialNetworkStyled>
            </InfoStyled>
        </BasicPage>
    )
}

export default Home