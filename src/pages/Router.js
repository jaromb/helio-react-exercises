import React, {Component} from 'react';
import Keylogger from './Keylogger';
import ArrayList from './ArrayList';
import AddTwoNumbers from './AddTwoNumbers';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";




class Routing extends Component {
render() {
    return (
      
        <Router>
          <div>
            <nav>
              <ul class="project-list">
                <li><Link to="/Keylogger">Keylogger</Link></li>
                <li><Link to="/ArrayList">Listmaker/Listfinder</Link></li>
                <li><Link to="/AddTwoNumbers">Add Two Numbers</Link></li>
              </ul>
            </nav>

            <hr/>
            <Route path="/Keylogger" component={Keylogger}/>
            <Route path="/ArrayList" component={ArrayList}/>
            <Route path="/AddTwoNumbers" component={AddTwoNumbers}/>
          </div>
        </Router>
    )
  }
}

export default Routing;