/**
 * @function
 * @param {string} guessedWord - input word submitted as a guess in the jotto game
 * @param {string} secretWord - word that the player is trying to guess based on matching letters from guessed word
 * @returns {number} letterMatch - the number of letters in the guessed word that are also in the secret word
 */

export const getLetterMatchCount = (guessedWord, secretWord) => {
    const guessedWordLetters = [...new Set(guessedWord)];
    const secretWordLetters = [...new Set(secretWord)];
    let letterMatch = 0;

    for (let letter of guessedWordLetters){
        if (secretWordLetters.includes(letter)) {
            letterMatch++; 
        }
    }

    return letterMatch;
}