import React from 'react'
import {
    NavBarStyled,
    NavLinkStyled,
    MainIcon
} from './styles'
import {
    Link
} from 'react-router-dom'


function NavBar(props){
    return (
        <NavBarStyled>
            <Link to="/">
                <MainIcon>OM</MainIcon>
            </Link>
            <Link to="/tidbits">
                <NavLinkStyled>
                    TIDBITS
                </NavLinkStyled>
            </Link>
        </NavBarStyled>
    )
}

export default NavBar