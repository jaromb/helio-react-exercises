import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { checkServerIdentity } from 'tls';
import { ENGINE_METHOD_NONE } from 'constants';

class App extends Component {
state = {
  text: 'Text is displayed here',
  num1: '',
  num2: '',
  sum: ' ______',
  listText: '',
  list: ['Bakersfield, CA', 'Sandy, UT', 'Orem, UT', 'Strasbourg, France', 'Geneva, Switzerland', 'Lyon, France', 'Provo, UT', 'Salt Lake City, UT', 'Santa Cruz, CA'],
  filteredList: []
}

//KEYLOGGER
mirrorText = (event) => this.setState({text: event.target.value});



//CITY LIST

updateListText = (event) => {
  this.setState({listText: event.target.value, filteredList: this.state.list.filter((city) => { return city.includes(event.target.value) })})
};

handleEnter = (event) => {
  if(event.key === 'Enter') {
    this.addToList();
    this.clearField();
  }
}

addToList = () => this.setState({
  list: [...this.state.list, this.state.listText], filteredList: [...this.state.filteredList, this.state.listText], listText: ''  }
);

 clearField = () => {
   this.refs.listField.value = '';
 }

 addToListAndClear = () => {
   this.addToList();
   this.clearField()
 }

//CALCULATOR - add two numbers

addTwoNumbers = () => {
  console.log('Function executed...');
  console.log('The state values are: ', + this.state.num1 + ' & ' + this.state.num2);
  this.setState({sum: this.state.num1 + this.state.num2})
};

handleChangeInput1 = (e) => {
  this.setState({num1: parseInt(e.target.value)})
};

handleChangeInput2 = (e) => {
  this.setState({num2: parseInt(e.target.value)})
};




  render() {
    return (
      <div className="App">
        <h1>Helio React Exercises</h1>
        <div id="keylogger" class="newExercise">
          <h2>Keylogger</h2>
          Enter text here: <input type="text" onChange={this.mirrorText}/>
          <br/>
          Your text mirrored below:<p>{this.state.text}</p> 
        </div>
        
        <div id="array-list" class="newExercise">
          <h2>List from Array</h2>
          <input type='text' ref='listField' onChange={this.updateListText} onKeyPress={this.handleEnter}></input>
          <button onClick={this.addToListAndClear}>Add to list</button>
          <ul>Some cities I've lived in: 
            <br/>
            {(this.state.listText==='' || this.state.listText===null) ? (this.state.list.map((item) => 
   <li>{item}</li>)) :
               (this.state.filteredList.length) ? this.state.filteredList.map((city) => { return ( <li>{city}</li> ) }) : 
               <li>No Results</li>
            }
            
          </ul>
        </div>
        
        <div id="add-numbers" class="newExercise">
          <h2>Add Two Numbers</h2>
            Input 1:<input id="number1" type="number" onChange={this.handleChangeInput1}></input>
            <br/>
            Input 2:<input id="number2" type="number" onChange={this.handleChangeInput2}></input>
            <br/>
            <button onClick={this.addTwoNumbers}>Add numbers</button>
            <p>Sum ={this.state.sum}</p>
        </div>
      </div>
    );
  }
}

export default App;












































