import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div>
                <i className="far fa-comment" />
            </div>

            <div>
                <i className="fas fa-retweet">
                    <span>6</span>
                </i>
            </div>

            <div>
                <i className="far fa-heart">
                    <span>4</span>
                </i>
            </div>

            <div>
                <i className="far fa-envelope" />
            </div>
        </div>
    );
}

export default Footer;