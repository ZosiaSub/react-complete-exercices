import React, { Component } from 'react';
import Persons from '../src/components/Persons/Persons';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';
import './App.css';


class App extends Component {

  state = {
    persons: [
      { name: "Zosia", age: "34", id: 'p1' },
      { name: "Marek", age: "34", id: 'p2'}
    ],
    showPersons: false,
    length: 0,
    word: ''
  };

  writeName = (event, id) => {
      const personIndex = this.state.persons.findIndex( p => {
          return p.id === id;
      })
      const value = event.target.value;
      const persons = [ ...this.state.persons ];
      persons[personIndex].name = value;
      this.setState({ persons: persons });
  };  

  personListHandler = () => {
    const personsState = this.state.showPersons;
    this.setState({ showPersons: !personsState })
  };

  wordToArray = () => {
    const word = this.state.word;
    const arr = word.split('');
    return arr;
  };

  deleteCharacterFromWord = (index) => {
    const word = this.state.word
    const arr = word.split('');
    arr.splice(index, 1);
    const newWord = arr.join('');
    this.setState({ word: newWord });
  }

  textHandler = (event) => {
    const value = event.target.value;
    const textLength = value.length;
    this.setState({
        length: textLength,
        word: value
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
          { this.state.showPersons === true 
            ? <Persons
                persons={this.state.persons}
                action={this.writeName} /> 
            : null
          }
        </div>
          <input
          text='text'
              onChange={(event) => this.textHandler(event)}
              value={this.state.word}
          /> 
          <ValidationComponent text={this.checkLength()} />
          <div>
            { this.wordToArray().map( (c, index) => 
                <CharComponent 
                  character={c} 
                  key={index}
                  onClick={() => this.deleteCharacterFromWord(index)}
                />                
              )
            }            
          </div>         
      </div>
    );
  }
}

export default App;
