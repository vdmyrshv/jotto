import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = ({guessedWords}) => {
    return (
        <div data-test="component-guessed-words">
            {!guessedWords.length && <span data-test="guess-instructions">please enter a word</span>}
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
    })).isRequired,
}

export default GuessedWords;
