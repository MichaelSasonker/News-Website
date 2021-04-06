import React from 'react';
import Article from '../article/article';

const CategoryPage = ({ newsData, searchedInput }) => {

    return (
        <div>
            {/* {console.log(newsData)} */}
            {/* {spinner ? <div>loading...</div> : ''} */}
            {newsData.filter((element) => {
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
            })}

        </div>
    )
}

export default CategoryPage;