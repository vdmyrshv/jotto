import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Congrats from './Congrats';

import { findByTestAttr } from '../test/testUtils'


/**
 * 
 * @param {object} props - component props specific to this setup
 * @returns {shallowWrapper}
 */

const setup = (props={}) => {
  return shallow(<Congrats {...props} />);
}



Enzyme.configure({ adapter: new EnzymeAdapter()});


it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-congrats");
    
    expect(component.length).toBe(1);
});

//have to be explicit about what the success prop is
it('renders no text when `success` prop is false', () => {
  const wrapper = setup({success: false});
  const component = findByTestAttr(wrapper, "component-congrats");

  expect(component.text()).toBe('');
});

it('renders non-empty congrats msg when the `success` prop is true', () => {
  const wrapper = setup({success: true});  
  const message = findByTestAttr(wrapper, "congrats-message"); 
  
  expect(message.text().length).not.toBe(0);
});
