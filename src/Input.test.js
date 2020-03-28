import React from 'react'

import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'

import Input from './input'

const setup = (secretWord="party") => {
    return shallow(<Input secretWord={secretWord} />);
}

it('renders correctly', () => {
    const shallow = setup();
    const component = findByTestAttr(shallow, "component-input");
    
    expect(component.length).toBe(1);
});

it('does not throw warning about expected props', () => {
    const expectedProps = { secretWord: "party"};
    //findbytestattr
    checkProps(Input, expectedProps);
});

describe('state controlled input field', () => {
    //REMEMBER TO SCOPE MOCKSETCURRENTGUESS AND WRAPPER
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    //remember to use a beforeEach block whenever you see repeated code in the unit test blocks
    beforeEach(() => {
        //this is how to create a mock function
        mockSetCurrentGuess.mockClear();
        //this is replacing the actual React.useState with the jest equivalent as seen below when in testing
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
 
        wrapper = setup();
    });
    it('state updates with value of input box on change', () => {
        // //this is how to create a mock function
        // const mockSetCurrentGuess = jest.fn();
        // //this is replacing the actual React.useState with the jest equivalent as seen below when in testing
        // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        // const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, "input-box");

        const mockEvent = {target: { value: 'train'}};
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    });

    it('field is cleared upon submit button click', () => {
        // const mockSetCurrentGuess = jest.fn();

        // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        // const wrapper = setup();
        const submitButton = findByTestAttr(wrapper, "submit-button");

        submitButton.simulate('click', { preventDefault(){} });

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
})
