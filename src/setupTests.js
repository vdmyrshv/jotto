// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//import '@testing-library/jest-dom/extend-expect'; << does not need to be there, commented out for future reference

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter()});


//jest will automatically search for this file to configure tests
//creating this file in the src folder will automatically make this file visible and editable for custom configuration i.e. adding Enzyme.configure

