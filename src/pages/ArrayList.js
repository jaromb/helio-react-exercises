import React, {Component} from 'react';
import Button from '../Components/Button'
import PlainList from '../Components/PlainList'

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
        }
      }
      
      addToList = () => this.setState({
        list: [...this.state.list, this.state.listText], filteredList: [...this.state.filteredList, this.state.listText], listText: ''  }
      );
      

       //delete button
       
       removeItem = (index) => (item) => {
        this.state.list.splice(index,1);
        this.setState({list: this.state.list, filteredList: this.state.list});
       }

       moveItemUp = (index) => (item) => {
        if (index!==0) {
          const movedItem = this.state.list.splice(index,1)[0];
          this.state.list.splice(index-1,0,movedItem);
          this.setState({list: this.state.list, filteredList: this.state.list});
       }
      }

       moveItemDown = (index) => (item) => {
        if (index<this.state.list.length-1) {
          const movedItem = this.state.list.splice(index,1)[0];
          this.state.list.splice(index+1,0,movedItem);
          this.setState({list: this.state.list, filteredList: this.state.list});
       }
      }


    render () {
        return (
            <div id="array-list" class="newExercise">
          <h2>List from Array</h2>
          <input type='text' ref='listField' value={this.state.listText} onChange={this.updateListText} onKeyPress={this.handleEnter}></input>
          <button onClick={this.addToList}>Add to list</button>
          <PlainList>Some cities I've lived in: 
            <br/>
            {(this.state.listText==='' || this.state.listText===null) ? (this.state.list.map((item, index) => 
            <div class="item-with-buttons">
              <li>{item}</li>
              <Button color='skyblue' fontWeight='bold' onClick={this.moveItemUp(index)}>&uarr;</Button>
              <Button color='lightblue' fontWeight='bold' onClick={this.moveItemDown(index)}>&darr;</Button>
              <Button color='lightred' paddingRight='2px' fontSize='16px' onClick={this.removeItem(index)}>&#128465;</Button>
            </div>  )) :
               (this.state.filteredList.length) ? this.state.filteredList.map((city) => { return ( <li>{city}</li> ) }) : 
               <li>No Results</li>
            }
          </PlainList>
        </div>
        )
    }
}

export default ArrayList;

