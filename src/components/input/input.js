import React from 'react';

const InputComp = ({ inputType, inputValue ,ifClick }) => {

    return (
        <input type={inputType} value={inputValue} />   
    );
}

export default InputComp;