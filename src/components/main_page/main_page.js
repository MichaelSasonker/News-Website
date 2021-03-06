import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../carousel/carousel';
import './main_page.css';

const MainPage = ({ newsData, categoryArr, isClicked }) => {

    const handleClick = (dataObj) => {
        isClicked(dataObj);
    }

    return (
        <div>
            {
                newsData.map((arrOfObj,index) => {
                    return (
                        <React.Fragment key={categoryArr[index]}>
                            <Link to={`/${categoryArr[index]}`}>
                                <h2 className='carousel-header'>{categoryArr[index].toUpperCase()}</h2>
                            </Link>
                            <Carousel key={categoryArr[index]} data={arrOfObj} isClicked={handleClick} categoryName={categoryArr[index]}/>
                        </React.Fragment>
                    );
                })
            }
        </div>
    );
}

export default MainPage;