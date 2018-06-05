import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchPersonAndAddNewWeights from './components/searchPersonAndAddNewWeights/searchPersonAndAddNewWeights.js';
import Graph from './components/Graph/Graph.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      weightsOvertime: []
    }
  }
  addNewWeight = (weight) =>{
    this.setState({
      weightsOvertime: [...this.state.weightsOvertime,weight]
    })
  }
  average = (data) => {
    let total = data.reduce((acc,curr) => {
      return acc + curr;
    },0);
    let mean = total/data.length;
    return Math.round(mean);
  }

  render() {
    let weights = this.state.weightsOvertime.map((obj) => obj.weight)
    let dates = this.state.weightsOvertime.map((obj)=>obj.date)
    console.log(dates)
    return (
      <div className="App">
        <span className="text-center"> WEIGHT TRACKER APP </span>
        <SearchPersonAndAddNewWeights add={this.addNewWeight}/>
        <Graph data={this.state.weightsOvertime}/>
        {(weights.length >0)?
          (<div>Average Weight: {this.average(weights)}KG</div>):
          (<div> Average Weight: </div>)
        }
      </div>
    );
  }
}

export default App;
