import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faBars,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Home(props) {
    const { route } = props;

    useEffect(() => {
        const header = document.querySelector('#header');
        window.headerOffsetHeight = header.offsetHeight;
    }, []);

    return (
        <div id='header'>
            <div className='header'>
                <span>
                    <FontAwesomeIcon icon={faBars} />
                </span>
                <span>云音乐</span>
                <span>
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
            <div className='nav'>
                <NavLink to='/recommend' activeClassName='active'>推荐</NavLink>
                <NavLink to='/singer' activeClassName='active'>歌手</NavLink>
                <NavLink to='/rank' activeClassName='active'>排行榜</NavLink>
            </div>
            { renderRoutes(route.routes) }
        </div>
    );
}

export default React.memo(Home);
