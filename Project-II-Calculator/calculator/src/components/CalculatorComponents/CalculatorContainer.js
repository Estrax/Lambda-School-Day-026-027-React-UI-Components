import React from 'react';
import './Calculator.css';

import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import NumbersPanel from './NumbersPanel';
import OperatorsPanel from './OperatorsPanel';

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

const numbers = [
    {
        id: 'number-7',
        text: '7',
        style: 'number short'
    },
    {
        id: 'number-8',
        text: '8',
        style: 'number short'
    },
    {
        id: 'number-9',
        text: '9',
        style: 'number short'
    },
    {
        id: 'number-4',
        text: '4',
        style: 'number short'
    },
    {
        id: 'number-5',
        text: '5',
        style: 'number short'
    },
    {
        id: 'number-6',
        text: '6',
        style: 'number short'
    },
    {
        id: 'number-1',
        text: '1',
        style: 'number short'
    },
    {
        id: 'number-2',
        text: '2',
        style: 'number short'
    },
    {
        id: 'number-3',
        text: '3',
        style: 'number short'
    }
];

const CalculatorContainer = (props) => {
    return (
        <div>
            <CalculatorDisplay value={props.total} />
            <div className="calc-inline">
                <NumbersPanel numbers={numbers} />
                <OperatorsPanel operators={operators} />
            </div>
        </div>
    );
};

export default CalculatorContainer;
