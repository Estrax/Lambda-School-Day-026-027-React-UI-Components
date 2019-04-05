import React from 'react';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';


const CalculatorContainer = (props) => {
    return (
        <div className="numbers-panel calc-inline">
            <ActionButton text="clear" id="clearbtn" buttonStyle="action long" handleClick={props.handleClick} />
            {props.numbers.map(number => 
                <NumberButton key={number.id} id={number.id} text={number.text} buttonStyle={number.style} handleClick={props.handleClick}/>
            )}
            <ActionButton text="0" id="number-0" buttonStyle="number long" handleClick={props.handleClick} />
        </div>
    );
};

export default CalculatorContainer;
