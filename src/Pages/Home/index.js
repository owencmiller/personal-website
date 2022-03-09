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
                <DescriptionStyled>Fullstack / Data Engineer and Leader<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style={{color:'white'}}>.</a></DescriptionStyled>
                <SocialNetworkStyled>
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
            <Resume>
                <ResumeSection>About</ResumeSection>
                <ResumeData>&mdash; Data focused fullstack software engineer.</ResumeData>
                <ResumeData>&mdash; Experience with AWS, CI/CD, JIRA, Jenkins, and React.</ResumeData>
                <ResumeData>&mdash; Have used Python, Julia, Java, and JavaScript.</ResumeData>
                <ResumeData>&mdash; Traveled across the USA for 5 months seeing 32 national parks.</ResumeData>
                
                <ResumeSection>Experience</ResumeSection>
                <ResumeItem>Software Engineering Intern &mdash; Intuit</ResumeItem>
                <ResumeData>&mdash; Designed and developed a secure Slack bot for development teams at Intuit. The bot streamed authentication processes and allowed development teams to integrate and increase productivity. </ResumeData>
                <ResumeData>&mdash; Gathered requirements from business and security stakeholders as well as collaborating with senior engineers, management, and security on bot design and implementation.</ResumeData>
                <ResumeItem>Software Engineering Co-Op &mdash; Intuit</ResumeItem>
                <ResumeData>&mdash; Designed and developed a data pipeline for an internal CI/CD deployment service. Including data ingress, cleaning, and visualization, stakeholders were able to gain greater insight into organizational deployment metrics and create data motivated change. </ResumeData>
                <ResumeData>&mdash; Migrated Java microservices from JBoss to SpringBoot.</ResumeData>
                <ResumeItem>Computer Science House President &mdash; RIT</ResumeItem>
                <ResumeData>&mdash; Lead a 70 member resident organization dedicated to disseminating advanced software topics, cultivating team environments, and working with industry professionals to create well rounded software and hardware engineers.</ResumeData>
                <ResumeData>&mdash; Worked with alumni from FAANG companies to help undergraduates gain important skills and knowledge applicable to the modern workforce.</ResumeData>
                <ResumeData>&mdash; Managed a full migration to remote culture in light of the recent pandemic.</ResumeData>
                <ResumeData>&mdash; Collaborated with university administration on cultural evolution and progressing the organization toward greater diversity and inclusion.</ResumeData>
                <ResumeItem>Go (Baduk) Club Member &mdash; RIT</ResumeItem>
                <ResumeData>&mdash; Gained long term strategy skills from stronger players.</ResumeData>
                <ResumeData>&mdash; "Trade plums for peaches but not gold for silver." - Go Proverb</ResumeData>
                <ResumeItem>AI Club Member &mdash; RIT</ResumeItem>
                <ResumeData>&mdash; Participated in seminars about cutting edge AI techniques including Transformers, Deep RL, and AI Ethics.</ResumeData>
                <ResumeData>&mdash; Hosted a seminar on Symbolic AI and the Semantic Web.</ResumeData>
                
                <ResumeSection>Passions</ResumeSection>
                <ResumeData>&mdash; Data analysis & communication</ResumeData>
                <ResumeData>&mdash; Explaining complex topics in simple terms</ResumeData>
                <ResumeData>&mdash; Clean & understandable UX</ResumeData>
                <ResumeData>&mdash; Solving hard problems</ResumeData>
            </Resume>
        </BasicPage>
    )
}

export default Home