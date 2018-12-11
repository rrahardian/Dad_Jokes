import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import DadJokes from './DadJokes';
import './css/bootstrap.css'
import './css/app.css'

class App extends Component {
  render() {
    return (
      <div className="app bg-danger py-5">
        <DadJokes />
      </div>
    );
  }
}

export default App;
