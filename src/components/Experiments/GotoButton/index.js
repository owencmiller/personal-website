import React from 'react';
import {
    GotoButtonStyled
} from './styles';

function GotoButton (props){
    return (
        <GotoButtonStyled href='#experiments'>
            <h3>{props.children}</h3>
            <i className="fa fa-arrow-down" style={{fontSize: 25}}></i>
        </GotoButtonStyled>
    )
}

export default GotoButton