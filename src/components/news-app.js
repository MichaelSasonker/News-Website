import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header/header';
import MainPage from './main_page/main_page';
import SportPage from './sport_page/sport_page';
import GetData from './utilities_functions/get_data_function';
import GetDate from './utilities_functions/get_date_function';
import UseLocalStorage from './utilities_functions/use_local_storage_function';

import './news-app.css';


// https://newsapi.org/v2/everything?q=apple&from=2021-04-02&to=2021-04-02&sortBy=popularity&apiKey=18d952814b5f465995b39e12e931f50e
// const BASE_URL = 'https://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey=18d952814b5f465995b39e12e931f50e';
// const BASE_URL = 'https://newsapi.org/v2/top-headlines?language=en&category=sports&from=2021-04-03&to=2021-04-04&apiKey=18d952814b5f465995b39e12e931f50e';
const BASE_URL = `https://newsapi.org/v2/top-headlines?language=en`;
const API_KEY =  `&apiKey=18d952814b5f465995b39e12e931f50e`;
// &from=${yestDate}&to=${currDate}&sortBy=popularity
const NewsApp = () => {

    const [data, setData] = React.useState([]);
    const [spinner, setSpinner] = React.useState(true);
    const [currDate, setCurrDate] = React.useState('');
    const [yestDate, setYestDate] = React.useState('');
    const [searchInput, setSearchInput] = React.useState('');

    React.useEffect(() => {
        const PullData = async () => {
            let respone = await GetData(`${BASE_URL}&from=${yestDate}&to=${currDate}&sortBy=popularity${API_KEY}`);
            if (respone) {
                setSpinner(false)
            }
            setData(respone.articles);
        };

        PullData();
    }, [currDate, yestDate]);

    React.useEffect(() => {
        const PullDate = () => {
            let dateArr = GetDate();
            setYestDate(dateArr[0]);
            setCurrDate(dateArr[1]);
        }

        PullDate();
    }, [currDate, yestDate])

    const handleChange = (e) => {
        setSearchInput(e.target.value)
        console.log(e.target.value);
    }

    const DisplayData = (someData) => {
        // console.log(someData)
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Header newsData={someData} changeData={(e) => handleChange(e)}/>
                    <div className='page-cont'>
                        <Route path='/' exact component={MainPage} > 
                            <MainPage newsData={someData} searchedInput={searchInput} />
                        </Route>
                        <Route path='/sport' exact component={SportPage} > 
                            <SportPage />
                        </Route>
                        {/* {spinner ? <div>loading...</div> : ''}
                        {someData.map((obj) => {
                        return (
                            <div key={obj.title}>
                                <div>Author: {obj.author}</div>
                                <div>Content: {obj.content}</div>
                                <div>Publish At: {obj.publishAt}</div>
                                <div>Title: {obj.title}</div>
                                <a href={obj.url} target="_blank" rel="noreferrer">URL</a>
                                <img src={obj.urlToImage} alt={obj.title} height='250px' width='250px'/>
                            </div>
                        )
                        })} */}

                    </div>
                </BrowserRouter>


            </React.Fragment>
        )
    }

    return (
        <div className='main-cont'>
            {DisplayData(data)}
        </div>

    );
}

export default NewsApp;