import React from 'react';
import './input.css'

const InputComp = ({ inputType, inputValue }) => {

    return (
        <input type={inputType} value={inputValue} />   
    );
}

export default InputComp;