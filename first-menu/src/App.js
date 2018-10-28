import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './todos/input';
import Zach from './zach';
import { Router, Link } from '@reach/router';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <p>Check it out you did it dood</p>
    <Link to="/zach">Go to zach</Link>
    <Link to="/todos">Go to input</Link>
  </header>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Input path="/todos" />
          <Zach initialCount={20} path="/zach" />
        </Router>
      </div>
    );
  }
}

export default App;
