import React from 'react';
import './App.css';

import { renderRoutes } from 'react-router-config';

import PageRoutes from './routes/page-routes.router';
import { Switch } from 'react-router';

function App() {

  return (
    <div className="App">
      <Switch>
          {renderRoutes(PageRoutes)}
      </Switch>   
    </div>
  );
}

export default App;
