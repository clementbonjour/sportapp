import React from 'react';
import logo from './logo.svg';
import persona from './corps.svg';

import Pause from './pause.svg';
import Fleche from './fleche.svg';

import Play from './play.svg';
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
        <a className="ial" href="temps">Commercer l'entrainement<img src={Fleche} alt=">"/></a>
      </div>
      
    </div>
  );
}

export default App;

