import React, { Component } from 'react';
import Person from './components/Person';
import './App.css';


class App extends Component {

  state = {
    persons: [
      { name: "Zosia", age: "34", id: '1' },
      { name: "Marek", age: "34", id: '2' }
    ],
    showPersons: false
  }

  userName = (event) => {
    return event.target.value
  }

  tipeName = (personIndex) => {
    const persons = this.state.persons;
    persons[personIndex].name = this.userName;
    this.setState({ persons: persons })
  }

  personListHandler = (state) => {
    const personsState = this.state.showPersons;
    this.setState({ showPersons: !personsState })
  }

  render() {
    
    return (
      <div className="App">
        
        <h1>Hi this is the React App</h1>
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
                tipe={()=> this.tipeName(index)}
              /> 
            ) : null               
          }
        </div>  
      </div>
    );
  }
}

export default App;
