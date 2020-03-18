import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';


Enzyme.configure({ adapter: new EnzymeAdapter()});

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
