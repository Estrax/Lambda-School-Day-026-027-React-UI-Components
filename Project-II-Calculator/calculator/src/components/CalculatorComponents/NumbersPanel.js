import React from 'react';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';


const CalculatorContainer = (props) => {
    return (
        <div className="numbers-panel calc-inline">
            <ActionButton text="clear" buttonStyle="action long" />
            {props.numbers.map(number => <NumberButton key={number.id} id={number.id} text={number.text} buttonStyle={number.style}/>)}
            <ActionButton text="0" buttonStyle="number long" />
        </div>
    );
};

export default CalculatorContainer;
