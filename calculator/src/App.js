import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
      bracket: ""
    }
  }

  onClick = button => {
    if (button === "=") {
      this.calculate()
    }
    else if (button === "AC") {
      this.reset()
    }
    else if (button === "X") {
      this.delete()
    }
    else if (button === "()") {
      this.addBracket()
    }
    // else if (button === "+" || button === "-" || button === "*" || button === "/" || button === "%") {
    //   this.setState({
    //     result: this.state.result + "\n" + button
    //   })
    // }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    this.checkBracket()
    let result = this.state.result;
    try {
      this.setState({
        result: String(eval(result))
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

  reset = () => {
    this.setState({
      result: "",
      bracket: ""
    })
  }

  delete = () => {
    let result = this.state.result;
    if (result.slice(-1) === "(") {
      this.setState({
        bracket: this.state.bracket.slice(0, -1)
      })
    } else if (result.slice(-1) === ")") {
      this.setState({
        bracket: this.state.bracket + "("
      })
    }
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  addBracket = () => {
    let result = this.state.result;
    let bracket = this.state.bracket;
    let lastChar = result.slice(-1);
    if (bracket === "" || lastChar === "(" || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "%") {
      this.setState({
        result: this.state.result + "(",
        bracket: this.state.bracket + "("
      })
    } else {
      this.setState({
        result: this.state.result + ")",
        bracket: this.state.bracket.slice(0, -1)
      })
    }
  }

  checkBracket = () => {
    let str = "";
    for (let i = 0; i < this.state.bracket.length; i++) {
      str += ")";
    }
    this.setState({
      result: this.state.result + str,
      bracket: ""
    })
  }

  render() {
    return (
      <div className="main">
        <h1>Calculator</h1>
        <div className="cal-result">
          <p>{this.state.result}</p>
        </div>
        <div className="cal-body">
          <button name="AC" onClick={e => this.onClick(e.target.name)}>AC</button>
          <button name="X" onClick={e => this.onClick(e.target.name)}>Del</button>
          <button name="%" onClick={e => this.onClick(e.target.name)}>%</button>
          <button name="/" onClick={e => this.onClick(e.target.name)}>÷</button><br />

          <button name="7" onClick={e => this.onClick(e.target.name)}>7</button>
          <button name="8" onClick={e => this.onClick(e.target.name)}>8</button>
          <button name="9" onClick={e => this.onClick(e.target.name)}>9</button>
          <button name="*" onClick={e => this.onClick(e.target.name)}>x</button><br />

          <button name="4" onClick={e => this.onClick(e.target.name)}>4</button>
          <button name="5" onClick={e => this.onClick(e.target.name)}>5</button>
          <button name="6" onClick={e => this.onClick(e.target.name)}>6</button>
          <button name="-" onClick={e => this.onClick(e.target.name)}>-</button><br />

          <button name="1" onClick={e => this.onClick(e.target.name)}>1</button>
          <button name="2" onClick={e => this.onClick(e.target.name)}>2</button>
          <button name="3" onClick={e => this.onClick(e.target.name)}>3</button>
          <button name="+" onClick={e => this.onClick(e.target.name)}>+</button><br />

          <button name="." onClick={e => this.onClick(e.target.name)}>.</button>
          <button name="0" onClick={e => this.onClick(e.target.name)}>0</button>
          <button name="()" onClick={e => this.onClick(e.target.name)}>()</button>
          <button name="=" onClick={e => this.onClick(e.target.name)}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
