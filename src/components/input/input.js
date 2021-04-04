import React from 'react';

const InputComp = ({ inputType, inputValue ,ifClick }) => {

    const handleClick = (e) => {
        console.log(ifClick)
    }

    return (
        (ifClick !== null)
        ? (<input type={inputType} value={inputValue} onClick={(e) => handleClick(e)} />)
        : (<input type={inputType} value={inputValue} />)
        
    );
}

export default InputComp;