import React from 'react';

import './article_page.css';

const ArticlePage = ({ articleData, categoryName }) => {
    return (
        <div className='article-page-cont'>
            {console.log(articleData)}
            <div className='article-title'>
                <h2>{articleData[0].data.title}</h2>
            </div>
            <div className='article-desc'>{articleData[0].data.description}</div>
            <div className='article-author'>{articleData[0].data.author}</div>
            <div className='article-img' style={{background: `url(${articleData[0].data.urlToImage}) no-repeat center center/cover`}}></div>
            <div className='article-content'>{articleData[0].data.content}</div>
        </div>
    );
}

export default ArticlePage;