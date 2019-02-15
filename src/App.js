import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = {
  text: 'Have you typed yet?'
}

mirrorText = (event) => this.setState({text: event.target.value})

  render() {
    return (
      <div className="App">
        Enter text here: <input type="text" onChange={this.mirrorText}/>
        <br/>
        Your text mirrored here:<p>{this.state.text}</p> 
      </div>
    );
  }
}

export default App;












































