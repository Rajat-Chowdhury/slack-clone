import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>      
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              {/* <Chat/> */}
              <h2>Chat Screen</h2>
            </Route>
            <Route path="/">
              <h1>Welcome screen</h1>
            </Route>
          </Switch>
          {/* setting up router */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
