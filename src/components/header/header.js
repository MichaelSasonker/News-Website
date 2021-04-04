import React from 'react';
import { Link } from 'react-router-dom';
import InputComp from '../input/input';


const Header = () => {

    const [inputText, setInputText] = React.useState('');

    const handleChange = (e) => {
        setInputText(e.target.value);
    }
    
    return (
        <div className='header-cont'>
            <div className='links-cont'>
                <Link to='/'>
                    <InputComp inputType='button' inputValue='Home' /> 
                </Link>
                {/* <Link to='/news'>
                    <input inputType='button' inputValue='News' />
                </Link> */}
                <Link to='/sport'>
                    <InputComp inputType='button' inputValue='Sport' /> 
                </Link>
                <Link to='/health'>
                    <InputComp inputType='button' inputValue='Health' /> 
                </Link>
            </div>
            <div className='search-cont'>
                <input type='text' value={inputText} onChange={(e) => handleChange(e)} />
                <InputComp inputType='button' inputValue='submit' /> 
            </div>
        </div>
    );
}

export default Header;