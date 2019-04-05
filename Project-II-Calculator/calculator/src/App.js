import React, { Component } from 'react';
import './App.css';
import * as math from 'mathjs';

import CalculatorContainer from './components/CalculatorComponents/CalculatorContainer';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            total: "0",
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClear() {
        return this.setState({
            total: "0"
        });
    }

    addToExpression(value) {
        if(this.state.total[0] === "0"){
            return this.setState({
                total: value
            });
        }
        return this.setState({
            total: this.state.total + value
        });
    }
	
    handleEqual() {
        let equation = this.state.total;
        let result = "";

        try{
            equation = equation.replace('×', '*');
            equation = equation.replace('÷', '/');
            result = math.eval(equation);
        }catch(e){
            alert("Your expression is incorrect!");
            return this.handleClear();
        }

        return this.setState({
            total: result
        });
    }

    handleClick(event) {
        if(event.target.textContent === 'clear'){
            this.handleClear();
        }else if(event.target.textContent === '='){
            this.handleEqual();
        }else{
            this.addToExpression(event.target.textContent);
        }
    }

    render(){
        return (
            <div className="calculator">
                <CalculatorContainer handleClick={this.handleClick} total={this.state.total} />
            </div>
        );
    }
}

export default App;