import React from 'react';
import { shallow } from 'enzyme';
//import EnzymeAdapter from 'enzyme-adapter-react-16' <<< this is now in setupTest.js
import App from './App';


//Enzyme.configure({ adapter: new EnzymeAdapter()}); <<< this is now in setupTest.js

const setup = (state={}, props=null) => {
  const wrapper = shallow(<App />);
  if (state) wrapper.setState(state);
  return wrapper;
}

const shallowWrapper = (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
}

test('renders learn react link', () => {
  
});
