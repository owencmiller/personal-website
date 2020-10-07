import React from 'react'
import {
    NavBarStyled,
    NavLinkStyled
} from './styles'
import {
    Link
} from 'react-router-dom'
import icon from '../../../assets/img/initials_black2.svg'


function NavBar(props){
    return (
        <NavBarStyled>
            <Link to="/">
                <img src={icon} alt="Main Icon Image" width="100px"/>
            </Link>
            <Link to="/experiments">
                <NavLinkStyled>
                    Tidbits
                </NavLinkStyled>
            </Link>
        </NavBarStyled>
    )
}

export default NavBar