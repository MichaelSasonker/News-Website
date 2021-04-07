import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import './share_section.css';

const SYMBOL_SIZE = 25;

const ShareSection = ({ dataUrl }) => {

    return (
        <div className='share-cont'>
            <div className='icon-cont'>
                <FacebookShareButton url={dataUrl} hashtag={'#NewsApp'}>
                    <FacebookIcon round={true} size={`${SYMBOL_SIZE}px`}></FacebookIcon>
                </FacebookShareButton>
            </div>
            <div className='icon-cont'>
                <TwitterShareButton url={dataUrl} hashtag={'#NewsApp'}>
                    <TwitterIcon round={true} size={`${SYMBOL_SIZE}px`}></TwitterIcon>
                </TwitterShareButton>
            </div>
            <div className='icon-cont'>
                <WhatsappShareButton url={dataUrl}>
                    <WhatsappIcon round={true} size={`${SYMBOL_SIZE}px`}></WhatsappIcon>
                </WhatsappShareButton>
            </div>
        </div>
    );
}

export default ShareSection;