import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../main/Home';
import Recommend from '../main/Recommend';
import Singer from '../main/Singer';
import Rank from '../main/Rank';

const route = [
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/',
                exact: true,
                render: () => (
                    <Redirect to={'/recommend'} />
                ),
            },
            {
                path: '/recommend',
                component: Recommend,
            },
            {
                path: '/singer',
                component: Singer,
            },
            {
                path: '/rank',
                component: Rank,
            }
        ],
    }
];

export default route;
