import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>      
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat/>
            </Route>
            <Route path="/">
            </Route>
          </Switch>
          {/* setting up router */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
