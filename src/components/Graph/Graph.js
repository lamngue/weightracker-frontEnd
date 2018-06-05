import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Graph extends Component{
	constructor(props){
		super(props);
	}
	renderChartData(data){
		let weights = data.map((obj) => obj.weight)
		let dates = data.map((obj) => obj.date)
		let chartData = {
				labels: dates,
				datasets:[
					{
						label: 'Weight (KG)',
						data: weights
					}],
				backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
			}
		return chartData;
	}
	render(){
		return(
			<div>
				<Bar 
					data={this.renderChartData(this.props.data)}
					options = {{}}
				/>
			</div>
			);
	}
}

export default Graph;