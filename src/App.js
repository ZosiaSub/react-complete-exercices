import React, { Component } from 'react';
import Person from './components/Person';
import './App.css';


class App extends Component {

  state = {
    persons: [
      { name: "Zosia", age: "34" },
      { name: "Marek", age: "34" }
    ],
    showPersons: false
  };

  writeName = (ev) => {
      const id = parseInt(
          ev.target.id.substr(ev.target.id.indexOf('_') + 1),
          10
      );
      const value = ev.target.value;
      const persons = this.state.persons;
      persons[id].name = value;
      this.setState({ persons: persons });
  };

  personListHandler = () => {
    const personsState = this.state.showPersons;
    this.setState({ showPersons: !personsState })
  };

  render() {
    
    return (
      <div className="App">
        
        <h1>Hi this is the React App :P</h1>
        <button 
        onClick={this.personListHandler}>
        Switch list
        </button>
        <div>
          { this.state.showPersons === true ?
            this.state.persons.map( (person, index) => 
              <Person 
                key={index}
                name={person.name} 
                age={person.age}
                callback={this.writeName}
                id={index}
              /> 
            ) : null               
          }
        </div>  
      </div>
    );
  }
}

export default App;
