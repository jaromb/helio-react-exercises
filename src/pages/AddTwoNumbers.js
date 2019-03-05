import React, {Component} from 'react';
import Button from '../Components/Button'

class AddTwoNumbers extends Component {
    state = {
        num1: '',
        num2: '',
        sum: ' ______',
      }
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
            <div id="add-numbers" class="newExercise">
          <h2>Add Two Numbers</h2>
            Input 1:<input id="number1" type="number" onChange={this.handleChangeInput1}></input>
            <br/>
            Input 2:<input id="number2" type="number" onChange={this.handleChangeInput2}></input>
            <br/>
            <Button onClick={this.addTwoNumbers}>Add numbers</Button>
            <p>Sum = {this.state.sum}</p>
        </div>
        )
    }
}

export default AddTwoNumbers