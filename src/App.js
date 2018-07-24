import React, { Component } from 'react';
import Person from './components/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: "Zosia", age: "34" },
      { name: "Marek", age: "34" }
    ]
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

  render() {
    return (
      <div className="App">
        <h1>Hi this is the React App</h1>
        <button onClick={this.switchName}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          tipeName={this.tipeName}>
          Say hallo!</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchName} 
          tipeName={this.tipeName}/>        
      </div>
    );
  }
}

export default App;
