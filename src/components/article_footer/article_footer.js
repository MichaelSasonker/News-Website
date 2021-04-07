import React from 'react';
import ShareSection from '../share_section/share_section';
import './article_footer.css';


const ArticleFooter = ({ dataUrl }) => {

    return (
        <div>
            <ShareSection dataUrl={dataUrl} />
        </div>
    );
}

export default ArticleFooter;