import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import GetData from '../utilities_functions/get_data_function';

const BASE_URL = `https://newsapi.org/v2/sources?apiKey=18d952814b5f465995b39e12e931f50e`;
// const API_KEY =  `&apiKey=18d952814b5f465995b39e12e931f50e`;

const Footer = () => {

    const [sources, setSources] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            let respone = await GetData(BASE_URL);
            console.log(respone);
            setSources(respone.sources);
        })();

    }, []);

    console.log(sources);


    return (
        <div className='footer-cont'>
            <div className='news-links'>
                <h4>News Links</h4>
                <table className='footer-links'>

                </table>
            </div>
        </div>
    );
}

export default Footer;