import React from 'react';
// import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import InitialStateProvider from './context/initial-state/initial-state.provider';

ReactDOM.hydrate(
    <React.StrictMode>
        <InitialStateProvider initState={window.__INITIALSTATE__}>         
            <BrowserRouter>
                <App />
            </BrowserRouter> 
        </InitialStateProvider> 
    </React.StrictMode>,
document.getElementById('root'));