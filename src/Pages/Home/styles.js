import styled from 'styled-components'
import {
  slideToLeft,
  slideToTop,
  slideToBottom,
  scaleIn,
  fadeIn,
} from '../../styles/animations'
import { titleFont, contentFont } from '../../styles/fonts'

export const Info = styled.div`
  width: 70vw;
  text-align: center;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Name = styled.h1`
  margin: 0;
  margin-top: 1em;
  font-family: ${titleFont};
  font-weight: 200;
  font-size: 5em;
  line-height: 1;
  animation: ${slideToBottom} 1s ease;

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

export default {}
