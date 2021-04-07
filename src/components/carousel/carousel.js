import React from 'react';
import Article from '../article/article';
import { Link } from 'react-router-dom';
import './carousel.css';

const Carousel = ({ data, isClicked, categoryName }) => {

    const [currArticle, setCurrArticle] = React.useState(0);

    const handleClicked = (dataObj) => {
        isClicked(dataObj);
    }

    return (
        <div className="carousel">
            {
                data.length > 0 
                ? data.map((obj,index) => {
                    if (index === currArticle) {
                        return (
                            <div className="carousel" key={obj.source.name}>
                                <div className="carouselInner" >
                                    <div className="left" onClick={() => {currArticle > 0 && setCurrArticle(currArticle - 1)}}>
                                        <i className="fas fa-chevron-left"></i>
                                    </div>
                                    <Link to={`/${categoryName}/${obj.source.name}}`}>
                                        <Article data={obj} key={obj.source.name} objClicked={handleClicked} categoryName={categoryName}/>
                                    </Link>
                                    <div className="right" onClick={() => {currArticle < data.length - 1 && setCurrArticle(currArticle + 1)}}>
                                        <i className="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                  })
                : ''
            }
        </div>
    );
}

export default Carousel;