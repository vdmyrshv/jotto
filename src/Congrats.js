//fyi "stubbing out a fn" is a term to describe templating out a shell of the function, kinda like boilerplating

import React from 'react'
import PropTypes from 'prop-types'

/**
 * @param {object} props - react props 
 * @returns {JSX.Element} rendered component, or null if `success` 
 */

const Congrats = ({success})=> {
    if  (success) {
        return <div data-test="component-congrats"><span data-test="congrats-message">congrats! you guessed the word</span></div>;
    } else {
        return <div data-test="component-congrats"></div>;
    }
    
};

//this is how to type check props - using PropTypes module, proptypes is only available in dev mode
//.isRequired is chained on if the prop is required
Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;




