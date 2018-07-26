import React, { Component } from 'react';
import Person from './components/Person';
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: "Zosia", age: "34" },
      { name: "Marek", age: "34" }
    ],
    username: "Staś"
  }
  switchName = () => {
    this.setState({
      persons: [
        { name: "Zofia", age: "30" },
        { name: "Marek", age: "40" }
      ]
    })
  }

  tipeName = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: "30" },
        { name: event.target.value, age: "40" }
      ]
    })
  }

  eventHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    
    return (
      <div className="App">
        
        <h1>Hi this is the React App</h1>
        <button 
        onClick={this.switchName}>
        Switch name
        </button>
        <UserInput changeName={this.eventHandler}/>
        <UserOutput userName={this.state.username}/>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          tipe={this.tipeName}>
          Say hallo!</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchName} 
          tipe={this.tipeName} />        
      </div>
    );
  }
}

export default App;
