import React from 'react';
import ArticleFooter from '../article_footer/article_footer';
import './article_page.css';

const ArticlePage = ({ articleData }) => {

    const [content, setContent] = React.useState(articleData[0].data.content.split(' '));

    const SetNewContent = () => {
        if (typeof content === 'object') {
            let newContent = content.slice(0, content.length - 3).join(' ');
            setContent(newContent);
        }
    }

    React.useEffect(() => {
        SetNewContent();
    }, []);

    return (
        <div className='article-page-cont'>
            <div className='article-title'>
                <h2>{articleData[0].data.title}</h2>
            </div>
            <div className='article-desc'>{articleData[0].data.description}</div>
            <div className='article-author'>{articleData[0].data.author}</div>
            <div className='article-img' style={{background: `url(${articleData[0].data.urlToImage}) no-repeat center center/cover`}}></div>
            <div className='article-content'>
                {content} 
                <a href={articleData[0].data.url} target='_blank' rel="noreferrer">...Read more</a>
            </div>
            <ArticleFooter dataUrl={articleData[0].data.url}/> 
        </div>
    );
}

export default ArticlePage;