import React, {Component} from 'react';

class ArrayList extends Component {
    state = {
        listText: '',
        list: ['Bakersfield, CA', 'Sandy, UT', 'Orem, UT', 'Strasbourg, France', 'Geneva, Switzerland', 'Lyon, France', 'Provo, UT', 'Salt Lake City, UT', 'Santa Cruz, CA'],
        filteredList: []
      }
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

       //delete button
    //    this.setState({list: this.state.list.filter(element => element === {item}), filteredList: this.state.list.filter(element => element === {item}), listText: '' })

    render () {
        return (
            <div id="array-list" class="newExercise">
          <h2>List from Array</h2>
          <input type='text' ref='listField' onChange={this.updateListText} onKeyPress={this.handleEnter}></input>
          <button onClick={this.addToListAndClear}>Add to list</button>
          <ul>Some cities I've lived in: 
            <br/>
            {(this.state.listText==='' || this.state.listText===null) ? (this.state.list.map((item) => 
            <div class="item-with-buttons">
              <li id={item}>{item}</li>
              <button onClick={null}>&uarr;</button>
              <button onClick={null}>&darr;</button>
              <button onClick={null}>&#128465;</button>
            </div>  )) :
               (this.state.filteredList.length) ? this.state.filteredList.map((city) => { return ( <li>{city}</li> ) }) : 
               <li>No Results</li>
            }
            
          </ul>
        </div>
        )
    }
}

export default ArrayList;