import React from 'react';
import logo from './logo.svg';
import './App.css';

import Facebook from './components/Facebook'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='App-title'>Facebook Auth Example with React</h1>
        <p className='App-intro'>
          To get started, get Authenticated with Facebook
        </p>
        <Facebook />
      </header>
    </div>
  );
}

export default App;
