import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    const currDate = new Date();
    
    return (
        <div>
            <h1>Lambda School</h1>
            <h2>@LambdaSchool</h2>
            <p>{currDate.getDate()} {currDate.toLocaleString('en-us', { month: 'short' }).toLowerCase()}</p>
        </div>
    );
}

export default HeaderTitle;