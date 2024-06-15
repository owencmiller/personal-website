import React from 'react'
import {
    NavBarStyled,
    NavLinkStyled,
    NavPagesStyled,
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
            <NavPagesStyled>
                <Link to="/projects">
                    <NavLinkStyled>
                        PROJECTS
                    </NavLinkStyled>
                </Link>
                <Link to="/travel">
                    <NavLinkStyled>
                        TRAVEL
                    </NavLinkStyled>
                </Link>
                <Link to="/tidbits">
                    <NavLinkStyled>
                        TIDBITS
                    </NavLinkStyled>
                </Link>
                <Link to="/blog">
                    <NavLinkStyled>
                        BLOG
                    </NavLinkStyled>
                </Link>
            </NavPagesStyled>
        </NavBarStyled>
    )
}

export default NavBar