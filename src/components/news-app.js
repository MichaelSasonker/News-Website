import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header/header';
import MainPage from './main_page/main_page';
import CategoryPage from './category_page/category_page';
import ArticlePage from './article_page/article_page';
import Footer from './footer/footer';
import GetData from './utilities_functions/get_data_function';
import GetDate from './utilities_functions/get_date_function';
import UseLocalStorage from './utilities_functions/use_local_storage_function';

import './news-app.css';

const BASE_URL = `https://newsapi.org/v2/top-headlines?language=en`;
const CATEGORY_URL = `https://newsapi.org/v2/top-headlines?language=en`;
// const API_KEY =  `&apiKey=18d952814b5f465995b39e12e931f50e`;
// const API_KEY = `&apiKey=9892ff9432704002b7131bcfd7769a39`;
// const API_KEY = `&apiKey=85316c83db2946349a3c90297fec2517`
const API_KEY = `&apiKey=37d5df8286fc4d1cb536b21f4fc17b7c`;

const CATEGORIES_ARR = ['sport', 'health', 'science', 'technology', 'business', 'entertainment'];

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
    const [articleData, setArticleData] = React.useState([]);

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

    const handleClick = (dataObj) => {
        setArticleData(dataObj);
    }

    const DisplayData = () => {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Header changeData={(e) => handleChange(e)}/>
                    <div className='page-cont'>
                        <Route path='/' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<MainPage 
                                newsData={[sportData, healthData, scienceData, technologyData, businessData, entertainmentData]} 
                                categoryArr={CATEGORIES_ARR}
                                isClicked={handleClick} 
                            />} 
                        </Route>
                        <Route path='/top-news' exact > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={data} searchedInput={searchInput} categoryName={CATEGORIES_ARR[0]} isClicked={handleClick}/>} 
                        </Route>
                        <Route path='/sport' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={sportData} searchedInput={searchInput} categoryName={CATEGORIES_ARR[0]} isClicked={handleClick}/>} 
                        </Route>
                        <Route path='/health' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={healthData} searchedInput={searchInput} categoryName={CATEGORIES_ARR[1]} isClicked={handleClick}/>} 
                        </Route>
                        <Route path='/science' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={scienceData} searchedInput={searchInput} categoryName={CATEGORIES_ARR[2]} isClicked={handleClick}/>} 
                        </Route>
                        <Route path='/technology' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={technologyData} searchedInput={searchInput} categoryName={CATEGORIES_ARR[3]} isClicked={handleClick}/>} 
                        </Route>
                        <Route path='/business' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={businessData} searchedInput={searchInput} categoryName={CATEGORIES_ARR[4]} isClicked={handleClick}/>} 
                        </Route>
                        <Route path='/entertainment' exact  > 
                            {spinner ? <div className="loader">Loading...</div> 
                            :<CategoryPage newsData={entertainmentData} searchedInput={searchInput} categoryName={CATEGORIES_ARR[5]} isClicked={handleClick}/>} 
                        </Route>
                        {   
                            articleData.length > 0 
                            ? <Route path={`/${articleData[0].categoryName}/${articleData[0].data.source.name}}`} exact  > 
                                {spinner ? <div className="loader">Loading...</div> 
                                :<ArticlePage articleData={articleData}  />} 
                              </Route>
                            : <div></div> 
                        }
                    </div>
                    <Footer />
                </BrowserRouter>
            </React.Fragment>
        );
    }

    return (
        <div className='main-cont'>
            {DisplayData()}
        </div>
    );
}

export default NewsApp;