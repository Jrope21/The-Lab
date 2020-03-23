import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
// import PageRouter from '../../src/routes/page-router.router';
import App from '../../src/App';
import InitialStateProvider from '../../src/context/initial-state/initial-state.provider';

export const render = (req, store) => {
    // contains results of static router render
    const context = {};

    const content = renderToString(
        <React.StrictMode>
            <InitialStateProvider initState={store}> 
                <StaticRouter location={req.path} context={context}>
                    <App />
                </StaticRouter>  
            </InitialStateProvider>
        </React.StrictMode>     
    );

    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__INITIALSTATE__ = ${JSON.stringify(store)};
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}