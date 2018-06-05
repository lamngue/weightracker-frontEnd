import React, {Component} from 'react';

class searchPersonAndAddNewWeights extends Component{
	constructor(props){
		super(props);
		this.state = {
			weight: 0,
			date: 0
		}
	}
	onInputChange= (event)=>{
		this.setState({
			weight: parseInt(event.target.value),
			date: new Date()
		})
	}
	onButtonSubmit = ()=>{
		this.props.add(this.state);
	}
	render(){
		return(
			<div>
				<div className=' form center pa4 br3 shadow-5'>
					<input onChange={this.onInputChange} type ='text' className='f4 pa2 w-70'/>
					<button onClick={this.onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Add New Weight</button>
				</div>
			</div>
			)
	}
}
export default searchPersonAndAddNewWeights;