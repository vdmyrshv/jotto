import React from 'react'

import PropTypes from 'prop-types'

import { getLetterMatchCount } from './utils'

const Input = ({secretWord}) => {

    const [currentGuess, setCurrentGuess] = React.useState("");
    const [prevGuesses, setPrevGuesses] = React.useState([]);
    const [matchedLetters, setMatchedLetters] = React.useState(0);

    React.useEffect(() => {
        setMatchedLetters(getLetterMatchCount(currentGuess, secretWord))
    }, [currentGuess])

    const handleSubmit = event => {
        event.preventDefault();
        setPrevGuesses([...prevGuesses, {currentGuess, matchedLetters}])
        setCurrentGuess("");
    }

    const handleChange = event => {
        setCurrentGuess(event.target.value);
    }    

    return (
        <div data-test="component-input">
            <form onSubmit={handleSubmit} data-test="form-inline">
                <input 
                    data-test="input-box"
                    type="text" 
                    placeholder="Enter Guess" 
                    onChange={handleChange} 
                    value={currentGuess}
                />
                <button type="submit" onClick={handleSubmit} data-test="submit-button">Check</button>
            </form>
        </div>
    )
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}

export default Input


