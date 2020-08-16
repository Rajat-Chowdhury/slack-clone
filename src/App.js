import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      {/* header */}
      
      <div className="app__body">
        {/* sidebar */}
        {/* React router to switch chat screens*/}
        {/* chat screens inside router */}
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
