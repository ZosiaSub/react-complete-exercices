import React, { Component } from 'react';
import Person from './components/Person';
import ValidationComponent from './components/ValidationComponent';
import './App.css';


class App extends Component {

  state = {
    persons: [
      { name: "Zosia", age: "34", id: 'p1' },
      { name: "Marek", age: "34", id: 'p2'}
    ],
    showPersons: false,
    length: 0
  };

  writeName = (event, id) => {
      const personIndex = this.state.persons.findIndex( p => {
          return p.id === id;
      })
      // const person = { ...this.state.person[personI
      const value = event.target.value;
      const persons = [ ...this.state.persons ];
      persons[personIndex].name = value;
      this.setState({ persons: persons });
  };

  personListHandler = () => {
    const personsState = this.state.showPersons;
    this.setState({ showPersons: !personsState })
  };

  textLengthHandler = (event) => {
    const value = event.target.value;
    const textLength = value.length;
    this.setState({
        length: textLength
    })
  };

  checkLength = () => {
      return this.state.length >= 5 ? "Text long enough" : "Text too short";
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
            this.state.persons.map( person =>
              <Person 
                key={person.id}
                name={person.name} 
                age={person.age}
                callback={(event) => this.writeName(event, person.id)}
                id={person.id}
              /> 
            ) : null               
          }
        </div>
          <input
              onChange={(event) => this.textLengthHandler(event)}
          /> 
          <ValidationComponent text={this.checkLength()} />
      </div>
    );
  }
}

export default App;
