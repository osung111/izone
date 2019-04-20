import React, { Component } from 'react';
import Logo from './components/Logo';
import Board from './components/Board';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <Board/>
      </div>
    );
  }
}

export default App;
