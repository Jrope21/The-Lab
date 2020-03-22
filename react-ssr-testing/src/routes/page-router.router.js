import React from 'react';
import { Route } from 'react-router';

import Home from './home/home.route';

function PageRouter() {

    return (
        <>
            <Route exact path="/" component={Home}/>
        </>
    )
}

export default PageRouter