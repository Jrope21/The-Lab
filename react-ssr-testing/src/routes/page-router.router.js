import React, { useContext } from 'react';
import { Route } from 'react-router';

import Home from './home/home.route';
// import { UserContext } from '../context/users/users.context';
import { getUsers } from '../context/users/users.actions';

function PageRouter() {

    console.log(getUsers());

    return (
        <>
            <Route exact path="/" component={Home}/>
        </>
    )
}

export default PageRouter