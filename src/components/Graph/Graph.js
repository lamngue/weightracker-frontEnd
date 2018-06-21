import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Graph extends Component{
	constructor(props){
		super(props);
	}
	renderChartData(weights,dates){
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
	            ],borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
			}
		return chartData;
	}
	render(){
		return(
			<div>
				<Bar 
					data={this.renderChartData(this.props.weights,this.props.dates)}
					options = {{
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero:true
			                }
			            }]
			        }
					}}
				/>
			</div>
			);
	}
}

export default Graph;