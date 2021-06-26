import React, { Component } from 'react';
import Button from './Components/ButtonSection/Button';
import Statistics from './Components/Statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  plusStat = ({target}) => {
    this.setState((prev) => ({
      ...prev,
      [target.name]: prev[target.name]+1
    }))
  }
  render() {
    const total = this.state.good + this.state.bad + this.state.neutral;
    const pers = (this.state.good / (this.state.good + this.state.bad + this.state.neutral) * 100).toFixed(2);
    return (
      <>
        <h1>Please leave feedback</h1>
        <Button plus = {this.plusStat} />
        <h2>Statistics</h2>
        {total === 0 ? <p>No feedback given</p> : <Statistics options={this.state} pers={pers} total = {total} />}
        
      </>
    )
  }
}

