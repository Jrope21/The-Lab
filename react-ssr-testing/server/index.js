// import 'babel-polyfill';
import express from 'express';
import React from 'react';
import fetch from 'node-fetch';

import { matchRoutes } from 'react-router-config';

import Home from '../src/routes/home/home.route';
import PageRoutes from '../src/routes/page-routes.router';

import { render } from './helpers/_render';

const app = express();

app.use(express.static('client-build'))

app.get('*', async (req, res) => {
  
    const matchedRoutes = matchRoutes(PageRoutes, req.path)
        .map(({ route: { loadData }}) => {
            if(!loadData) return null;
            return loadData();
        });

    Promise.all(matchedRoutes).then(data => {
        const store = {
            users: data[0]
        }

        res.send(render(req, store));
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000');
}) 