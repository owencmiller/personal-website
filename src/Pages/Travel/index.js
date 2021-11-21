import React, {useState} from 'react';
import NavBar from '../../components/NavBar';
import {BasicPage} from '../BasicPage/styles';
import {acadia, badlands, big5, cuyahoga, indianadunes, rockymountains, rushmore, theodore, voyaguer} from './Travel\Posts/posts';
import { TravelNav, TravelNavLink } from './styles';

const posts = [acadia, cuyahoga, indianadunes, voyaguer, theodore, badlands, rushmore, rockymountains, big5]

function Travel (props){
    const [page, setPage] = useState(0)

    return (
        <BasicPage>
            <NavBar />
            <TravelNav>
                <TravelNavLink onClick={() => setPage(0)}>
                    Acadia
                </TravelNavLink>
                <TravelNavLink onClick={() => setPage(1)}>
                    Cuyahoga
                </TravelNavLink>
                <TravelNavLink onClick={() => setPage(2)}>
                    Indiana Dunes
                </TravelNavLink>
                <TravelNavLink onClick={() => setPage(3)}>
                    Voyaguer
                </TravelNavLink>
                <TravelNavLink onClick={() => setPage(4)}>
                    Theodore Roosevelt
                </TravelNavLink>
                <TravelNavLink onClick={() => setPage(5)}>
                    Badlands
                </TravelNavLink>
                <TravelNavLink onClick={() => setPage(6)}>
                    Mount Rushmore
                </TravelNavLink>
                <TravelNavLink onClick={() => setPage(7)}>
                    Rocky Mountains
                </TravelNavLink>
                <TravelNavLink onClick={() => setPage(8)}>
                    Big 5
                </TravelNavLink>
            </TravelNav>
            {posts[page]}
        </BasicPage>
    )
}

export default Travel