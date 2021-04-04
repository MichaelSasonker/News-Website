import React from 'react';
import { Link } from 'react-router-dom';
import InputComp from '../input/input';

import './header.css';


const Header = ({ newsData, changeData }) => {

    const [inputText, setInputText] = React.useState('');

    const handleChange = (e) => {
        setInputText(e.target.value);
        changeData(e);
    }


    return (
        <div className='header-cont'>
            <div className='logo'></div>
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
                {/* <select>
                    <option></option>
                </select> */}
                <input className='search' type='text' value={inputText} onChange={(e) => handleChange(e)} />
                {/* <InputComp inputType='button' inputValue='submit' ifClick={inputText}/>  */}
            </div>
        </div>
    );
}

export default Header;