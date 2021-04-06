import React from 'react';
import Article from '../article/article';
import './carousel.css'

const Carousel = ({ data }) => {

    const [currArticle, setCurrArticle] = React.useState(0);

    return (
        <div className="carousel">
            {
                data.length > 0 
                ? data.map((obj,index) => {
                    if (index === currArticle) {
                        return (
                            <div className="carousel">
                                <div className="carouselInner" >
                                    <div className="left" onClick={() => {currArticle > 0 && setCurrArticle(currArticle - 1);}}>
                                        <i class="fas fa-chevron-left"></i>
                                    </div>
                                    <Article data={obj} key={obj.source.name}/>
                                    <div className="right" onClick={() => {currArticle < data.length - 1 && setCurrArticle(currArticle + 1);}}>
                                        <i class="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                  })
                : 'aaaa'
            }
        </div>
    );
}

export default Carousel;