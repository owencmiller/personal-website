import React from 'react';
import styled from 'styled-components'
import {
    Info as InfoStyled,
    Name as NameStyled,
    Slogan as SloganStyled,
    Description as DescriptionStyled,
    SocialNetwork as SocialNetworkStyled,
    Action as ActionStyled,
} from './styles'
import SocialMedia from '../../components/SocialMedia'
import GoToButton from '../../components/Experiments/GotoButton'
import {contentFont} from '../../styles/fonts'

const HomeWrapper = styled.div`
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: ${contentFont};
`

function Home (props){
    return(
        <HomeWrapper id='home'>
            <InfoStyled>
                <NameStyled>Owen Miller</NameStyled>
                <DescriptionStyled>Your friendly neighborhood math student and fullstack developer<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style={{color:'white'}}>.</a></DescriptionStyled>
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
                </SocialNetworkStyled>
            </InfoStyled>
            <GoToButton>Experiments</GoToButton>
        </HomeWrapper>
    )
}

export default Home