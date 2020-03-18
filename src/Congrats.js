//fyi "stubbing out a fn" is a term to describe templating out a shell of the function, kinda like boilerplating

import React from 'react'

/**
 * @param {object} props - react props 
 * @returns {JSX.Element} rendered component, or null if `success` 
 */

export default ({success})=> {
    if  (success) {
        return <div data-test="component-congrats"><span data-test="congrats-message">congrats! you guessed the word</span></div>;
    } else {
        return <div data-test="component-congrats"></div>;
    }
    
};


