import React from 'react';
import './article.css';
import logoImage from '../img/logo-3.png';


const Article = ({ data, categoryName, objClicked }) => {

    const [img, setImg] = React.useState(data.urlToImage);

    React.useEffect(() => {
        if (img === null) {
            setImg(logoImage)
        }
    }, [img]);

    const handleClick = (e) => {
        let dataObj = [{'data': data, 'categoryName': categoryName}];
        objClicked(dataObj);
    }

    return (
        <div className='article-comp' onClick={(e) => {handleClick(e)}}>
            <div 
                className='img-cont' 
                style={{ background: `url(${img}) no-repeat center center/cover` }}>
                <div className='subject-cont'>
                    {data.source.name}
                </div>
                <div className='par-cont'>
                    <div className='title-cont'>
                        <h2>{data.title}</h2>
                    </div>
                    <div className='desc-cont'>
                        {data.description}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;