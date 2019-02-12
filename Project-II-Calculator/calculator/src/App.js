import React, { Component } from 'react';
import './App.css';

import CalculatorContainer from './components/CalculatorComponents/CalculatorContainer';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            total: 0
        }
    }

    render(){
        return (
            <div className="calculator">
                <CalculatorContainer total={this.state.total} />
            </div>
        );
    }
}

export default App;