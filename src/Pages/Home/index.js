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
    Resume,
    ResumeSection,
    ResumeItem,
    ResumeData,
    ProfilePic,
} from './styles'
import SocialMedia from '../../components/SocialMedia'
import NavBar from '../../components/NavBar'
import {contentFont} from '../../styles/fonts'
import profilepic from '../../../assets/img/IMG_2093.png'


function Home (props){
    return(
        <BasicPage>
            <InfoStyled>
                <ProfilePic src={profilepic}/>
                <NameStyled>Owen Miller</NameStyled>
                <DescriptionStyled>Fullstack Engineer & Leader<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style={{color:'white'}}>.</a></DescriptionStyled>
                <SocialNetworkStyled>
                    <SocialMedia link="https://github.com/owencmiller" type="github">
                        owencmiller
                    </SocialMedia>
                    <SocialMedia link="https://www.linkedin.com/in/owen-c-miller/" type="linkedin">
                        owen-c-miller
                    </SocialMedia>
                    <div>
                    <SocialMedia link="" type="envelope">
                        mail [at] owenmiller [dot] me
                    </SocialMedia>
                    </div>
                </SocialNetworkStyled>
            </InfoStyled>
            <Resume>
                <ResumeSection>About</ResumeSection>
                <ResumeData>Fullstack software engineer open to positions in Seattle.</ResumeData>
                <ResumeData>AWS, CI/CD, JIRA, Jenkins, and React work experience.</ResumeData>
                <ResumeData>Python, Julia, Java, and JavaScript intermediate experience.</ResumeData>
                <ResumeData>Explored the National Parks solo for 5 months. #vanlife</ResumeData>
                
                <ResumeSection>Experience</ResumeSection>

                <ResumeItem>Software Engineering Co-Op &mdash; Intuit</ResumeItem>
                <ResumeData>Designed and developed a data pipeline for an internal CI/CD deployment service. Including data ingress, cleaning, and visualization, stakeholders were able to gain greater insight into organizational deployment metrics and create data motivated change. </ResumeData>
                <ResumeData>Migrated Java microservices from JBoss to SpringBoot.</ResumeData>
                
                <ResumeItem>Software Engineering Intern &mdash; Intuit</ResumeItem>
                <ResumeData>Designed and developed a secure Slack bot for development teams at Intuit. The bot streamed authentication processes and allowed development teams to integrate and increase productivity. </ResumeData>
                <ResumeData>Gathered requirements from business and security stakeholders as well as collaborating with senior engineers, management, and security on bot design and implementation.</ResumeData>
                
                <ResumeItem>Computer Science House President &mdash; RIT</ResumeItem>
                <ResumeData>Led a 70 member resident organization dedicated to exploring and teaching advanced software topics, cultivating team environments, and working with industry professionals to create well rounded software and hardware engineers.</ResumeData>
                <ResumeData>Partnered with alumni from FAANG companies to help undergraduates gain important skills and knowledge applicable to the modern workforce.</ResumeData>
                <ResumeData>Navigated the sudden shift to a remote culture and maintained the organization operations on a day to day basis.</ResumeData>
                <ResumeData>Primary university administrative liaison driving cultural evolution and progressing the organization toward greater diversity and inclusion during a difficult time.</ResumeData>
                
                <ResumeItem>Go (Baduk) Club Member &mdash; RIT</ResumeItem>
                <ResumeData>Gained long term strategy skills from stronger players.</ResumeData>
                <ResumeData>"Trade plums for peaches but not gold for silver." - Go Proverb</ResumeData>
                
                <ResumeItem>AI Club Member &mdash; RIT</ResumeItem>
                <ResumeData>Engaged in seminars about cutting edge AI techniques including Transformers, Deep RL, and AI Ethics.</ResumeData>
                <ResumeData>Hosted a seminar on Symbolic AI and the Semantic Web.</ResumeData>
                
                <ResumeSection>Passions</ResumeSection>
                <ResumeData>Theory of Computation</ResumeData>
                <ResumeData>Foundations of Mathematics</ResumeData>
                <ResumeData>Aesthetic Design</ResumeData>
                <ResumeData>Distilling complex topics in simple terms</ResumeData>
                <ResumeData>Clean & understandable UX</ResumeData>
            </Resume>
        </BasicPage>
    )
}

export default Home