import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header/header';
import MainPage from './main_page/main_page';
import CategoryPage from './category_page/category_page'
import Footer from './footer/footer';
import GetData from './utilities_functions/get_data_function';
import GetDate from './utilities_functions/get_date_function';
import UseLocalStorage from './utilities_functions/use_local_storage_function';

import './news-app.css';


// https://newsapi.org/v2/everything?q=apple&from=2021-04-02&to=2021-04-02&sortBy=popularity&apiKey=18d952814b5f465995b39e12e931f50e
// const BASE_URL = 'https://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey=18d952814b5f465995b39e12e931f50e';
// const BASE_URL = 'https://newsapi.org/v2/top-headlines?language=en&category=sports&from=2021-04-03&to=2021-04-04&apiKey=18d952814b5f465995b39e12e931f50e';
const BASE_URL = `https://newsapi.org/v2/top-headlines?language=en`;
const API_KEY =  `&apiKey=18d952814b5f465995b39e12e931f50e`;
const CATEGORY_URL = 'https://newsapi.org/v2/top-headlines?language=en';

const CATEGORIES_ARR = ['sport', 'health', 'science', 'technology', 'business', 'entertainment'];

// &from=${yestDate}&to=${currDate}&sortBy=popularity
const NewsApp = () => {

    const [data, setData] = React.useState([]);
    const [spinner, setSpinner] = React.useState(true);
    const [currDate, setCurrDate] = React.useState('');
    const [yestDate, setYestDate] = React.useState('');
    const [searchInput, setSearchInput] = React.useState('');
    const [sportData, setSportData] = React.useState([]);
    const [healthData, setHealthData] = React.useState([]);
    const [scienceData, setScienceData] = React.useState([]);
    const [technologyData, setTechnologyData] = React.useState([]);
    const [businessData, setBusinessData] = React.useState([]);
    const [entertainmentData, setEntertainmentData] = React.useState([]);
    const [allData, setAllData] = ([]);

    React.useEffect(() => {
        
        const PullData = async (category) => {
            try {
                let respone = await GetData(`${CATEGORY_URL}&category=${category}&sortBy=popularity${API_KEY}`);
                if (respone) {
                    setSpinner(false)
                }
                switch (category) {
                    case 'sport':
                        setSportData(respone.articles);
                        return;
                    case 'health':
                        setHealthData(respone.articles);
                        return;
                    case 'science':
                        setScienceData(respone.articles);
                        return;
                    case 'technology':
                        setTechnologyData(respone.articles);
                        return;
                    case 'business':
                        setBusinessData(respone.articles);
                        return;
                    case 'entertainment':
                        setEntertainmentData(respone.articles);
                        return;
                    default:
                        return;
                }
            }
            catch(err) {
                console.log(err);
            }
        };

        CATEGORIES_ARR.forEach(async (category) => {
            PullData(category);
        });
        // PullData();
    }, []);

    React.useEffect(() => {
        const PullData = async () => {
            try {
                let respone = await GetData(`${BASE_URL}&from=${yestDate}&to=${currDate}&sortBy=popularity${API_KEY}`);
                if (respone) {
                    setSpinner(false)
                }
                setData(respone.articles);
            }
            catch(err) {
                console.log(err);
            }
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
    }

    const DisplayData = (someData) => {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Header newsData={someData} changeData={(e) => handleChange(e)}/>
                    <div className='page-cont'>
                        <Route path='/' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<MainPage 
                                newsData={[sportData, healthData, scienceData, technologyData, businessData, entertainmentData]} 
                                searchedInput={searchInput} 
                            />} 
                        </Route>
                        <Route path='/top-news' exact > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={someData} searchedInput={searchInput} />} 
                        </Route>
                        <Route path='/sport' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={sportData} searchedInput={searchInput} />} 
                        </Route>
                        <Route path='/health' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={healthData} searchedInput={searchInput} />} 
                        </Route>
                        <Route path='/science' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={scienceData} searchedInput={searchInput} />} 
                        </Route>
                        <Route path='/technology' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={technologyData} searchedInput={searchInput} />} 
                        </Route>
                        <Route path='/business' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={businessData} searchedInput={searchInput} />} 
                        </Route>
                        <Route path='/entertainment' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={entertainmentData} searchedInput={searchInput} />} 
                        </Route>
                        {/* {spinner ? <div>loading...</div> : ''} */}
                    </div>
                    <Footer />
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