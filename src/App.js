import React , { Component } from 'react';
import './App.css';

export default class App extends Component {
  state ={
    counter :0
  }
  handleClickIncrement = () =>{
    this.setState({counter : this.state.counter+1})
  }
  handleClickDecrement = () =>{
    this.setState({counter : this.state.counter-1})
  }
  render() {
    return (
      <div className="App" data-test="component-app">
        <div data-test="counter-display">
          {this.state.counter}
        </div>
        <button data-test="incrment-button" onClick={this.handleClickIncrement}>increment</button>
        <button data-test="decrement-button" onClick={this.handleClickDecrement}>decrement</button>

        </div>
    )
}
}

