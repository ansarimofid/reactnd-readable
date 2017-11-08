import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Main from './Component/Main'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">HAPBLOG</h1>
        </header>
        <div className="body">
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;
