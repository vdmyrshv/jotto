import React from 'react';
import { mount } from 'enzyme';
//import EnzymeAdapter from 'enzyme-adapter-react-16' <<< this is now in setupTest.js
import App from './App';

import hookActions from './actions/hookActions'


//Enzyme.configure({ adapter: new EnzymeAdapter()}); <<< this is now in setupTest.js

const mockGetSecretWord = jest.fn();

/**
 * @function sectup fn for app component
 * @param {*} state 
 * @param {*} props
 * @returns {ReactWrapper} 
 */
const setup = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  //using mount instead of shallow cuz as of current version shallow does not support the useeffect hook
  //check following link for updates on issue https://github.com/enzymejs/enzyme/issues/2086
  return mount(<App />);
}

const shallowWrapper = (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
}

it('renders without error', () => {
  const wrapper = setup();
  const app = shallowWrapper(wrapper, "component-app");

  expect(app.length).toBe(1);
});

describe('getSecretWord calls', () => {
  it('getSecretWord gets called on app mount', () => {
    //dont even need to save the output of the setup factory fn because
    //we dont care about the wrapper - only the call
    setup();

    expect(mockGetSecretWord).toHaveBeenCalled();
  });
})
