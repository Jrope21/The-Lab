import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Home from '../src/routes/Home';

const app = express();

app.use(express.static('client-build'))

app.get('/', (req, res) => {
    const content = ReactDOMServer.renderToString(<Home />);

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    res.send(html);
})

app.listen(3000, () => {
    console.log('listening on port 3000');
}) 