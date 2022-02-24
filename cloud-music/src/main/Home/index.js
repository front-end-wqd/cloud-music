import React from 'react';
import { renderRoutes } from 'react-router-config';
import '../../fontawesome/fontawesome-free-5.15.4-web/css/all.min.css';
import './index.scss';

function Home(props) {
    const { route } = props;
    return (
        <div>
            <i className="fab fa-app-store"></i>
            { renderRoutes(route.routes) }
        </div>
    );
}

export default React.memo(Home);
