import React from 'react'

import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../test/testUtils'

import GuessedWords from './GuessedWords'

const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}],
}

/**
 * @function setup
 * @param {object} props - component props specific to this setup
 * @returns {shallowWrapper}
 */

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps} />);
}

it('should not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps)
});

//describe functions help set up what could be referred to as testing Contexts
//it's useful because if there is a failure, it'll show you which of the contexts the failure occured in
describe('if there are no words guessed', () => {

    //variable declared outside of beforeEach so that the scope can be the whole describe function
    let wrapper;

    beforeEach(() => {
        wrapper = setup({guessedWords: []});
    });
    
    it('renders without error', () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
        
    });
    
    it('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, "guess-instructions");
        expect(instructions.text().length).not.toBe(0);
    });
    

});

describe('if there are words guessed', () => {

    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5},
    ];
    
    let wrapper;
    
    beforeEach(() => {
        wrapper = setup({guessedWords});
    });

    it('renders without error', () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);  
    });

    it('renders guessed word section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, "guess-word-section");
        expect(guessedWordsNode.length).toBe(1);  
    });

    it('displays a correct number of guessed words', () => {
        const word = findByTestAttr(wrapper, "guess-word");
        expect(word.length).toBe(guessedWords.length);
    });

});
