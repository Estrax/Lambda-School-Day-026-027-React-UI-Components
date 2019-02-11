import React, { Component } from 'react';
import './App.css';

import CalculatorContainer from './components/CalculatorComponents/CalculatorContainer';

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="calculator">
                <CalculatorContainer />
            </div>
        );
    }
}

export default App;