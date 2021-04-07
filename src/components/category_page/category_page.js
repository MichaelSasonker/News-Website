import React from 'react';
import Article from '../article/article';
import { Link } from 'react-router-dom';
import './category_page.css';

const CategoryPage = ({ newsData, searchedInput, categoryName, isClicked }) => {

    const handleClicked = (dataObj) => {
        isClicked(dataObj);
    }

    return (
        <div>
            {newsData.filter((element) => {
                if (searchedInput === '') {
                    return (element);
                }
                else if (element.title.toLowerCase().startsWith(searchedInput.toLowerCase())) {
                    return (element);
                }
            })
            .map((obj) => {
                return (
                    <div className='data-disp' key={obj.title} >
                        <Link to={`/${categoryName}/${obj.source.name}}`}>
                            <Article data={obj} categoryName={categoryName} objClicked={handleClicked}/>
                        </Link>
                    </div>
                );
            })}

        </div>
    )
}

export default CategoryPage;