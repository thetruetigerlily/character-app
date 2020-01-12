import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Characters from './components/Characters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Characters uri="http://localhost:3001/staticCharacters" />
      </div>
    )
  }
}

export default App;
