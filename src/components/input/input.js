import React from 'react';

const InputComp = ({ inputType, inputValue }) => {

    return (
        <input type={inputType} value={inputValue} />
    );
}

export default InputComp;