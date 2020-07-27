import styled from 'styled-components'
import { contentFont } from '../../styles/fonts'

export const SocialButton = styled.a`
  opacity: 0.7;
  margin: 0em 1em;

  vertical-align: top;
  color: #4a4a4a;
  text-decoration: none;
  transition: all .3s ease;
  &:hover {
    color: #000;
    opacity: 1;
  }
  > i {
    margin-right: .1em;
    font-size: 1.75em;
  }
`

export const ButtonText = styled.span`
  display: inline-block;
  vertical-align: super;
  
  font-size: 1em;
  font-family: ${contentFont};
  font-weight: 300;
`
