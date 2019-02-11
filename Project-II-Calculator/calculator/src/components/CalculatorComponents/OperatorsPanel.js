import React from 'react';
import ActionButton from '../ButtonComponents/ActionButton';


const OperatorsPanel = () => {
    return (
        <div className="operators-panel calc-inline">
            <ActionButton text="/" buttonStyle="action operator long"/>
            <ActionButton text="x" buttonStyle="action operator long"/>
            <ActionButton text="-" buttonStyle="action operator long"/>
            <ActionButton text="+" buttonStyle="action operator long"/>
            <ActionButton text="=" buttonStyle="action operator long"/>
        </div>
    );
};

export default OperatorsPanel;
