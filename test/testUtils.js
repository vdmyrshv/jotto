import checkPropTypes from 'check-prop-types'

/**
 * 
 * @param {shallowWrapper} wrapper - shallow wrapper of component from setup fn
 * @param {string} attr - data-test attribute name to locate internal jsx element for testing 
 * @returns - {shallowWrapper}
 */
  
  export const findByTestAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test="${attr}"]`);
  }

  export const checkProps = ( component, conformingProps ) => {
    // here we use the check-prop-types dev dependency
    // below is how it works - checkPropTypes takes two arguments, the components proptypes object, and the props that you want to test
    // now the error will get returned as data binding propError instead of a console.warn
    const propError =  checkPropTypes(
        component.propTypes, 
        conformingProps, 
        'prop', 
        component.name);
    expect(propError).toBeUndefined();
    
  }
  