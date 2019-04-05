import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <button className={props.buttonStyle} id={props.id} onClick={(e) => props.handleClick(e)}>{props.text}</button>
    );
}

export default ActionButton;