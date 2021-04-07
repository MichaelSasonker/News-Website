import React from 'react';
import { Link } from 'react-router-dom';
import InputComp from '../input/input';
import './header.css';


const Header = ({ changeData }) => {

    const [inputText, setInputText] = React.useState('');

    const handleChange = (e) => {
        setInputText(e.target.value);
        changeData(e);
    }

    return (
        <div className='header-cont'>
            <Link to='/'>
                <div className='logo'></div>
            </Link>
            <div className='links-cont'>
                <Link to='/'>
                    <InputComp inputType='button' inputValue='Home' /> 
                </Link>
                <Link to='/top-news'>
                    <InputComp inputType='button' inputValue='Top-News' /> 
                </Link>
                <Link to='/sport'>
                    <InputComp inputType='button' inputValue='Sport' /> 
                </Link>
                <Link to='/health'>
                    <InputComp inputType='button' inputValue='Health' /> 
                </Link>
                <Link to='/science'>
                    <InputComp inputType='button' inputValue='Science' /> 
                </Link>
                <Link to='/technology'>
                    <InputComp inputType='button' inputValue='Technology' /> 
                </Link>
                <Link to='/business'>
                    <InputComp inputType='button' inputValue='Business' /> 
                </Link>
                <Link to='/entertainment'>
                    <InputComp inputType='button' inputValue='Entertainment' /> 
                </Link>
            </div>
            <div className='search-cont'>
                <input className='search' type='text' placeholder='Serach' value={inputText} onChange={(e) => handleChange(e)} />
            </div>
        </div>
    );
}

export default Header;