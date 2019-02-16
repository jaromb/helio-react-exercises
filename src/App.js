import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { checkServerIdentity } from 'tls';
import { ENGINE_METHOD_NONE } from 'constants';

class App extends Component {
state = {
  text: 'Have you typed yet?'
}

cities = ['Bakersfield, CA', 'Sandy, UT', 'Orem, UT', 'Strasbourg, France', 'Geneva, Switzerland', 'Lyon, France', 'Provo, UT', 'Salt Lake City, UT', 'Santa Cruz, CA']
listItems = this.cities.map((city) =>
  <li>{city}</li>
);




mirrorText = (event) => this.setState({text: event.target.value})

  render() {
    return (
      <div className="App">
        <div class="keylogger">
          Enter text here: <input type="text" onChange={this.mirrorText}/>
          <br/>
          Your text mirrored here:<p>{this.state.text}</p> 
        </div>
        <div class="array-list">
          <ul>Some cities I've lived in:
            {this.listItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;












































