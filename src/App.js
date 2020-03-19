import React, { Component } from 'react';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords'

import './App.css';

class App extends Component {

  state = {
    guessedWords: []
  }
  
  render() {
    return (
      <div data-test="App">
        <GuessedWords {...this.state}/>
      </div>
    );
  }
}

export default App;
