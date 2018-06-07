import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewWeights from './components/searchPersonAndAddNewWeights/searchPersonAndAddNewWeights.js';
import Graph from './components/Graph/Graph.js';
import NavBar from './components/NavBar/NavBar.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
class App extends Component {
  constructor(){
    super();
    this.state = {
      isSignedIn: false,
      status: '',
      user: {
        id: '',
        name: '',
        email: '',
        joined: '',
        weightsOvertime:[]
      }
    }
  }
  addUser = (data) =>{
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined,
      weightsOvertime: data.weightsOvertime
    }});
  }
  onSignedInChanged = (status)=>{
    this.setState({status: status});
    if(status ==='signout' || status === 'delete'){
      this.setState({isSignedIn: false})
    }
    else if(status === 'home'){
      this.setState({isSignedIn: true})
    }
  }
 
  addNewWeight = (weight) =>{
    fetch('http://localhost:3000/addWeight',{
      method: 'put',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id,
        data: weight
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState(
        Object.assign(this.state.user,{weightsOvertime: data})
      )
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
    let weights = this.state.user.weightsOvertime.map((obj) => obj.weight)
    let dates = this.state.user.weightsOvertime.map((obj)=>obj.date)
    return (
      <div className="App">
        <span className="text-center"> WEIGHT TRACKER APP </span>
        <NavBar isSignedIn={this.state.isSignedIn} logIn = {this.onSignedInChanged} />
        {this.state.status === 'home'?
        (<div>
          <AddNewWeights add={this.addNewWeight}/>
          <Graph data={this.state.user.weightsOvertime}/>
          {(weights.length >0)?
            (<div>Average Weight: {this.average(weights)}KG</div>):
            (<div> Average Weight: </div>)
        }
        </div>
       ):
        (this.state.status==='signIn' ?
          <SignIn addUser={this.addUser} logIn = {this.onSignedInChanged}/>:
          <Register addUser = {this.addUser} logIn = {this.onSignedInChanged} />
        )
      }
      </div>
    );
  }
}

export default App;
