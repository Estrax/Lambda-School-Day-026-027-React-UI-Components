import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    return (
        <div className="header-title">
            <h1>Lambda School</h1>
            <h2>
                @LambdaSchool
                &sdot;
                {moment().format("DD MMM").toLowerCase()}
            </h2>
        </div>
    );
}

export default HeaderTitle;