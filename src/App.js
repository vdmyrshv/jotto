import React, { Component } from 'react';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords'

import './App.css';

class App extends Component {

  state = {
    guessedWords: [
      {guessedWord: 'train', letterMatchCount: 3},
      {guessedWord: 'agile', letterMatchCount: 1},
      {guessedWord: 'party', letterMatchCount: 5},
    ],
    success: true
  }
  
  render() {
    return (
      <div data-test="App">
        <Congrats success={this.state.success}/>
        <GuessedWords {...this.state}/>
      </div>
    );
  }
}

export default App;
