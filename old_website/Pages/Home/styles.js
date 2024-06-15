import styled from 'styled-components'
import {
  slideToLeft,
  slideToTop,
  slideToBottom,
  scaleIn,
  fadeIn,
  slideToRight,
} from '../../styles/animations'
import { titleFont, contentFon, iconFont } from '../../styles/fonts'


export const Info = styled.div`
  width: 33%;
  top: calc(50% - 200px);
  position: fixed;
  padding: 20px;
  text-align: center;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:500px) {
    position: relative;
    width: 100%;
    top: 0px;
    padding-top: 50px;
  }
`

export const ProfilePic = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin-bottom: 30px;
  animation: ${slideToBottom} 1s ease;
`

export const Name = styled.h1`
  margin: 0;
  font-family: ${titleFont};
  font-weight: 200;
  font-size: 4em;
  line-height: 1;
  animation: ${scaleIn} 1s ease;


  @media screen and (max-width:500px) {
    font-size: 3em;
  }

`


export const Description = styled.h3`
  margin: 1.2em 0 .8em 0;
  padding: 0 5px;
  font-weight: 300;
  font-size: 1.75em;
  animation: ${fadeIn} 2s ease;

  @media screen and (max-width:500px) {
    font-size: 1.5em;
  }
`

export const SocialNetwork = styled.div`
  > a {
    margin: 0 .5em;
    animation: ${fadeIn} 1s ease;
    &:first-child {
      margin-left: 0
    }
    &:last-child {
      margin-right: 0;
    }
  }
`


export const Resume = styled.div`
  width: 66%;
  left: 35%;
  padding: 30px 0px;

  display: flex;
  flex-direction: column;
  position: relative;


  @media screen and (max-width:500px) {
    position: relative;
    width: 100%;
    left: 0px;
    padding-left: 40px;
    padding-top: 0px;
  }
`

export const ResumeSection = styled.h1`
  font-size: 45px;
  font-weight: 100;
  margin-top: 30px;
  margin-bottom: 10px;
  animation: ${fadeIn} 1s ease;

  @media screen and (max-width:500px) {
    font-size: 30px;
  }
`
export const ResumeItem = styled.h2`
  font-family: ${iconFont};
  font-size: 20px;
  font-weight: 700;
  padding: 1vh 0px;
  animation: ${slideToLeft} 1s ease;
`
export const ResumeData = styled.p`
  font-family: ${iconFont};
  font-size: 18px;
  padding: 5px 50px;
  animation: ${slideToLeft} 1s ease;

  @media screen and (max-width:500px) {
    font-size: 15px;
    padding-left: 35px;
  }
`

export default {}
