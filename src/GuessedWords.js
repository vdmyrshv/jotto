import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = ({guessedWords}) => {
    return (
        <div data-test="component-guessed-words">
            {guessedWords.length ? (
                <div data-test="guess-word-section">
                    <h2>guessed words</h2>
                    <table>
                        <thead >
                            <tr>
                                <th>Word</th>
                                <th>Matched Letter</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            guessedWords.map((word, index) => (
                                <tr key={index} data-test="guess-word">
                                    <td>{word.guessedWord}</td>
                                    <td>{word.letterMatchCount}</td>
                                </tr>
                                )
                            )
                        }
                        </tbody>
                    </table>
                </div>
            ) : (
                <span data-test="guess-instructions">please enter a word</span>
                
            )}
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
