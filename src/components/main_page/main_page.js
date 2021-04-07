import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../carousel/carousel';
import './main_page.css';

const MainPage = ({ newsData, searchedInput, categoryArr }) => {

    return (
        <div>

            {
                newsData.map((arrOfObj,index) => {
                    return (
                        <React.Fragment >
                            <Link to={`/${categoryArr[index]}`}>
                                <h2 className='carousel-header'>{categoryArr[index].toUpperCase()}</h2>
                            </Link>
                            <Carousel data={arrOfObj} />
                        </React.Fragment>
                    )
                })
            }

            {/* {spinner ? <div>loading...</div> : ''} */}
            {/* {newsData.filter((element) => {
                if (searchedInput === '') {
                    return (element);
                }
                else if (element.title.toLowerCase().includes(searchedInput.toLowerCase())) {
                    //TODO display if no has result=> NO RESULT!!! 
                    return (element);
                }
            })
            .map((obj) => {
                return (
                    <div className='data-disp' key={obj.title} >
                        <Article data={obj} />
                    </div>
                );
            })} */}

        </div>
    )
}

export default MainPage;