import express from 'express';
import React from 'react';

import Home from '../src/routes/home/home.route';
import { render } from './helpers/_render';

const app = express();

app.use(express.static('client-build'))

app.get('*', (req, res) => {
    res.send(render(req));
})

app.listen(3000, () => {
    console.log('listening on port 3000');
}) 