import React from 'react';
import './Calculator.css';

import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import NumbersPanel from './NumbersPanel';
import OperatorsPanel from './OperatorsPanel';

const CalculatorContainer = () => {
    return (
        <div>
            <CalculatorDisplay value="0" />
            <div className="calc-inline">
                <NumbersPanel />
                <OperatorsPanel />
            </div>
        </div>
    );
};

export default CalculatorContainer;
