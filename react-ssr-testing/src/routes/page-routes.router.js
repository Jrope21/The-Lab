// import React from 'react';
// import { Route } from 'react-router';

import Home from './home/home.route';
import UserList, {loadData} from './user-list/user-list.route';

const PageRoutes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/user-list',
        component: UserList,
        loadData
    }
]

export default PageRoutes