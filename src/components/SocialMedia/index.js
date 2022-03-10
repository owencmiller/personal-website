import React from 'react'
import {
  SocialButton as SocialButtonStyled,
  ButtonText as ButtonTextStyled,
} from './styles'

function SocialMedia (props) {
  return (
    <SocialButtonStyled href={props.link} target="_blank" rel="noopener noreferrer">
      <i className={`fa fa-${props.type}`}/>
      <ButtonTextStyled>{props.children}</ButtonTextStyled>
    </SocialButtonStyled>
  )
}

export default SocialMedia
