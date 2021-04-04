import React from 'react';

const MainPage = ({ newsData, searchedInput }) => {

    return (
        <div>
            {console.log(newsData)}
            {/* {spinner ? <div>loading...</div> : ''} */}
            {newsData.filter((element) => {
                if (searchedInput === '') {
                    return (element);
                }
                else if (element.title.toLowerCase().includes(searchedInput.toLowerCase())) {
                    return (element);
                }
            })
            .map((obj) => {
                return (
                    <div key={obj.title}>
                        <div>Author: {obj.author}</div>
                        <div>Content: {obj.content}</div>
                        <div>Publish At: {obj.publishAt}</div>
                        <div>Title: {obj.title}</div>
                        <a href={obj.url} target="_blank" rel="noreferrer">URL</a>
                        <img src={obj.urlToImage} alt={obj.title} height='250px' width='250px'/>
                    </div>
                );
            })}

        </div>
    )
}

export default MainPage;