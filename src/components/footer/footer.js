import React from 'react';
import LinksTable from '../table_links/table_links';
import GetData from '../utilities_functions/get_data_function';
import './footer.css';

const BASE_URL = `https://newsapi.org/v2/sources?apiKey=18d952814b5f465995b39e12e931f50e`;

const Footer = () => {

    const [sources, setSources] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            let respone = await GetData(BASE_URL);
            setSources(respone.sources);
        })();

    }, []);

    return (
        <div className='footer-cont'>
            <hr/>
            <div className='news-links'>
                <h4>News Links</h4>
                {
                    sources.length > 0 
                    ? <LinksTable key={sources[0].id} dataProp={sources} />
                    : null
                }
                
            </div>
        </div>
    );
}

export default Footer;