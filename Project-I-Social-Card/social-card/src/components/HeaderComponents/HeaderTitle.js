import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    const currDate = new Date();
    
    return (
        <div className="header-title">
            <h1>Lambda School</h1>
            <h2>
                @LambdaSchool
                &sdot;
                {currDate.getDate()} {currDate.toLocaleString('en-us', { month: 'short' }).toLowerCase()}
            </h2>
        </div>
    );
}

export default HeaderTitle;