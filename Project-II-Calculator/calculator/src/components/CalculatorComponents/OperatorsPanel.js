import React from 'react';
import ActionButton from '../ButtonComponents/ActionButton';

const operators = [
    {
        id: 'operator-1',
        text: '/',
        style: 'action operator long'
    },
    {
        id: 'operator-2',
        text: 'x',
        style: 'action operator long'
    },
    {
        id: 'operator-3',
        text: '-',
        style: 'action operator long'
    },
    {
        id: 'operator-4',
        text: '+',
        style: 'action operator long'
    },
    {
        id: 'operator-5',
        text: '=',
        style: 'action operator long'
    }
];

const OperatorsPanel = () => {
    return (
        <div className="operators-panel calc-inline">
            {operators.map(operator => 
                <ActionButton key={operator.id} id={operator.id} text={operator.text} buttonStyle={operator.style}/>
            )}
        </div>
    );
};

export default OperatorsPanel;
