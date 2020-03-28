import React from 'react';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords'
import Input from './Input'

import hookActions from './actions/hookActions';

import './App.css';

/**
 * reducer to update state, called automateically by dispatch
 * @function reducer
 * @param {object} state - existing state
 * @param {object} action - contains 'type' and 'payload' properties for the state update
 * @returns {object} - new state
 */

const reducer = (state, action) => {
  switch(action.type){
    case "setSecretWord":
      return {...state, secretWord: action.payload}
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
}

const App = () => {

  const [state, dispatch] = React.useReducer(reducer, {secretWord: ""});

  const setSecretWord = (secretWord) => dispatch({ type: "setSecretWord", payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, [])
  
  return (
    <div data-test="component-app">
      <Input secretWord="huevo"/>
    </div>
  )
}

export default App

