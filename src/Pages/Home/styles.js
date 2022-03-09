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
  width: 45%;
  top: calc(50% - 200px);
  position: fixed;
  padding: 20px;
  text-align: center;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 5em;
  line-height: 1;
  animation: ${scaleIn} 1s ease;

`


export const Description = styled.h3`
  margin: 1.2em 0 .8em 0;
  padding: 0 5px;
  font-weight: 300;
  font-size: 1.75em;
  animation: ${fadeIn} 2s ease;

`

export const SocialNetwork = styled.div`
  > a {
    margin: 0 .5em;
    animation: ${scaleIn} 1s ease;
    &:first-child {
      margin-left: 0
    }
    &:last-child {
      margin-right: 0;
    }
  }
`


export const Resume = styled.div`
  width: 55%;
  left: 45%;
  padding: 60px 0px;

  display: flex;
  flex-direction: column;
  position: relative;
`

export const ResumeSection = styled.h1`
  font-size: 45px;
  font-weight: 100;
  margin-top: 30px;
  margin-bottom: 10px;
  animation: ${fadeIn} 1s ease;
`
export const ResumeItem = styled.h2`
  font-family: ${iconFont};
  font-size: 20px;
  font-weight: 700;
  padding: 1vh 2em;
  animation: ${slideToLeft} 1s ease;
`
export const ResumeData = styled.p`
  font-family: ${iconFont};
  font-size: 18px;
  padding: 5px 80px;
  animation: ${slideToLeft} 1s ease;

`

export default {}
