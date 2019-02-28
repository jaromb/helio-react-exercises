import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { checkServerIdentity } from 'tls';
import { ENGINE_METHOD_NONE } from 'constants';
import Keylogger from './Keylogger';
import ArrayList from './ArrayList';
import AddTwoNumbers from './AddTwoNumbers';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Helio React Exercises</h1>
        <Router>
    <div>
      <ul class="project-list">
        <li><Link to="/Keylogger">Keylogger</Link></li>
        <li><Link to="/ArrayList">Listmaker/Listfinder</Link></li>
        <li><Link to="/AddTwoNumbers">Add Two Numbers</Link></li>
      </ul>

      <hr/>

      <Route exact path="/Keylogger" component={Keylogger}/>
      <Route path="/ArrayList" component={ArrayList}/>
      <Route path="/AddTwoNumbers" component={AddTwoNumbers}/>
    </div>
  </Router>
      </div>
    );
  }
}

export default App;












































