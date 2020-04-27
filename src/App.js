import React from 'react';
import logo from './logo.svg';
import persona from './corps.svg';

import './App.css';
import './Timer.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="margium">
        <img src={persona} className="persona" alt="persona" />
      </div>
    </div>
  );
}

export default App;

