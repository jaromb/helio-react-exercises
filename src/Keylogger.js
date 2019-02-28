import React, { Component } from 'react';

class Keylogger extends Component {
    state = {
        text: 'Text is displayed here',
        listText: '',
      }

    //KEYLOGGER
    mirrorText = (event) => this.setState({text: event.target.value});

    render() {
        return (
            <div id="keylogger" class="newExercise">
          <h2>Keylogger</h2>
          Enter text here: <input type="text" onChange={this.mirrorText}/>
          <br/>
          Your text mirrored below:<p>{this.state.text}</p> 
        </div>
        )
    }
}

export default Keylogger;