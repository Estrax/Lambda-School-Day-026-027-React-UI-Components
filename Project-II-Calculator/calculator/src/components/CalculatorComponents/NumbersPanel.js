import React from 'react';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';


const CalculatorContainer = () => {
    return (
        <div className="numbers-panel calc-inline">
            <ActionButton text="clear" buttonStyle="action long" />
            <NumberButton text="7" buttonStyle="number short" />
            <NumberButton text="8" buttonStyle="number short" />
            <NumberButton text="9" buttonStyle="number short" />
            <NumberButton text="4" buttonStyle="number short" />
            <NumberButton text="5" buttonStyle="number short" />
            <NumberButton text="6" buttonStyle="number short" />
            <NumberButton text="1" buttonStyle="number short" />
            <NumberButton text="2" buttonStyle="number short" />
            <NumberButton text="3" buttonStyle="number short" />
            <ActionButton text="0" buttonStyle="number long" />
        </div>
    );
};

export default CalculatorContainer;
