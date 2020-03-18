
  /**
   * 
   * @param {shallowWrapper} wrapper - shallow wrapper of component from setup fn
   * @param {string} attr - data-test attribute name to locate internal jsx element for testing 
   * @returns - {shallowWrapper}
   */
  
  export const findByTestAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test="${attr}"]`);
  }
  