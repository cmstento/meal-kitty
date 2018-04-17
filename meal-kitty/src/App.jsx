import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <List items={[1,2,3,4]} />
      </div>
    )
  }
}

export default App;
