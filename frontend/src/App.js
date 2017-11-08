import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Main from './Component/Main'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-wrapper uk-container uk-flex">
            <h1 className="App-title uk-margin-remove-bottom">
              <Link to='/'>HAPBLOG</Link>
            </h1>
            <Link to='/_create' className="uk-button new-post">New Post</Link>
          </div>
        </header>
        <div className="body">
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;
