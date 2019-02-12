import React from 'react';
import ActionButton from '../ButtonComponents/ActionButton';

const OperatorsPanel = (props) => {
    return (
        <div className="operators-panel calc-inline">
            {props.operators.map(operator => 
                <ActionButton key={operator.id} id={operator.id} text={operator.text} buttonStyle={operator.style}/>
            )}
        </div>
    );
};

export default OperatorsPanel;
