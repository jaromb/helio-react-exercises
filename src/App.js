import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { checkServerIdentity } from 'tls';
import { ENGINE_METHOD_NONE } from 'constants';
import Keylogger from './pages/Keylogger';
import ArrayList from './pages/ArrayList';
import AddTwoNumbers from './pages/AddTwoNumbers';
import Playground from './pages/Playground';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Helio React Exercises</h1>
        <Router>
          <div>
            <nav>
              <ul class="project-list">
                <li><Link to="/Keylogger">Keylogger</Link></li>
                <li><Link to="/ArrayList">Listmaker/Listfinder</Link></li>
                <li><Link to="/AddTwoNumbers">Add Two Numbers</Link></li>
                <li><Link to="/Playground">Playground</Link></li>
              </ul>
            </nav>

            <hr/>
            <Route path="/Keylogger" component={Keylogger}/>
            <Route path="/ArrayList" component={ArrayList}/>
            <Route path="/AddTwoNumbers" component={AddTwoNumbers}/>
            <Route path="/Playground" component={Playground}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;












































