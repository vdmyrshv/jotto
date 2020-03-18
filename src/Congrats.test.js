import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Congrats from './Congrats';

import { findByTestAttr, checkProps } from '../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter()});

const defaultProps = { success: false };

/**
 * 
 * @param {object} props - component props specific to this setup
 * @returns {shallowWrapper}
 */

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<Congrats {...setupProps} />);
}





it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-congrats");
    
    expect(component.length).toBe(1);
});

//have to be explicit about what the success prop is
it('renders no text when `success` prop is false', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");

  expect(component.text()).toBe('');
});

it('renders non-empty congrats msg when the `success` prop is true', () => {
  const wrapper = setup({success: true});  
  const message = findByTestAttr(wrapper, "congrats-message"); 
  
  expect(message.text().length).not.toBe(0);
});


//BELOW IS A PROPTYPES TYPE CHECKING TEST WITH CHECKPROPTYPES MODULE
it('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  // //here we use the check-prop-types dev dependency
  // //below is how it works - checkPropTypes takes two arguments, the components proptypes object, and the props that you want to test
  // //now the error will get returned as data binding propError instead of a console.warn
  // const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name);
  // expect(propError).toBeUndefined();
  checkProps(Congrats, expectedProps);
});