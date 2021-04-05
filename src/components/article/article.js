import React from 'react';
import './article.css'

const Article = ({ data }) => {

    return (
        <div className='article-comp'>
            <div 
                className='img-cont' 
                style={{ background: `url(${data.urlToImage}) no-repeat center center/cover` }}>
                <div className='par-cont'>
                    <div className='subject-cont'>
                        {data.source.name}
                        <div className='title-cont'>
                            {data.title}
                        </div>
                        <div className='desc-cont'>
                            {data.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;