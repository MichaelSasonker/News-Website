import React from 'react';
import LinksTable from '../table_links/table_links';
import GetData from '../utilities_functions/get_data_function';
import './footer.css';


const BASE_URL = `https://newsapi.org/v2/sources?&apiKey=9892ff9432704002b7131bcfd7769a39`;
let counter = 100;

const Footer = () => {

    const [sources, setSources] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            try {
                let respone = await GetData(BASE_URL);
                setSources(respone.sources);
            }
            catch (err) {
                console.log(err);
            }
        })();

    }, []);

    return (
        <div className='footer-cont'>
            <hr/>
            <div className='news-links'>
                <h4>News Links</h4>
                {
                    sources.length > 0 
                    ? <LinksTable key={counter++} dataProp={sources} />
                    : null
                }
                
            </div>
        </div>
    );
}

export default Footer;