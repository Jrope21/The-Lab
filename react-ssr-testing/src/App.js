import React from 'react';
import './App.css';

import PageRouter from './routes/page-router.router';
import UsersProvider from './context/users/users.provider';

function App() {

  return (
    <div className="App">
      <UsersProvider>
          <PageRouter />
      </UsersProvider> 
    </div>
  );
}

export default App;
