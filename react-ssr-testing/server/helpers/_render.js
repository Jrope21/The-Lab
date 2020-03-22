import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
// import PageRouter from '../../src/routes/page-router.router';
import App from '../../src/App';

export const render = (req) => {
    // contains results of static router render
    const context = {};

    const content = renderToString(
        <StaticRouter location={req.path} context={context}>
            <App />
        </StaticRouter>       
    );

    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}