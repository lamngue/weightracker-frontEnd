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
        weightsOvertime: '[]',
        datesovertime: '[]'
      }
    }
  }
  addUser = (data) =>{
    if(data.datesovertime == null && data.weightsovertime ==null){
        this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined,
        weightsovertime: [],
        datesovertime: []
      }});
    }else{
        this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined,
        weightsovertime: data.weightsovertime,
        datesovertime: data.datesovertime
      }});
    }
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
 
  addNewWeight = (data) =>{
    fetch('https://infinite-plateau-45997.herokuapp.com/addWeight',{
      method: 'put',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id,
        data: data
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState(
        Object.assign(this.state.user,{weightsovertime: data})
      )
    })
    fetch('https://infinite-plateau-45997.herokuapp.com/addDate',{
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id,
        data: data
      })
    })
    .then(response => response.json())
    .then(data =>{
      this.setState(
          Object.assign(this.state.user,{datesovertime: data})
        )
    })
    console.log(this.state.user)
  }


  average = (data) => {
    if(data.length==0){
      return 0;
    }
    let total = data.reduce((acc,curr) => {
      return acc + curr;
    },0);
    let mean = total/data.length;
    return Math.round(mean);
  }

  render() {
    return (
      <div className="App">
        <span className="text-center"> WEIGHT TRACKER </span>
        <NavBar isSignedIn={this.state.isSignedIn} logIn = {this.onSignedInChanged} />
        {this.state.status === 'home'?
        (<div>
          <AddNewWeights add={this.addNewWeight}/>
          <h3 className="text-center text-dark">Hello {this.state.user.name}, here are your weight statistics</h3>
          <Graph weights={this.state.user.weightsovertime}
                dates = {this.state.user.datesovertime}/>
           <h3>Average weight:{this.average(this.state.user.weightsovertime)}KG </h3>
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
