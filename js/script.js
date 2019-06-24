import React from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			running : false,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			},
		};
		
	}
	
	static propTypes = {
		running: React.PropTypes.bool.isRequired,
		times: React.PropTypes.object.isRequired,
	}
	
	handleOnClick() {
		return (
		this.setState({
			loading: true,
		})
	)}
	
	handleOnreset = () => {
	return (
		this.setState ({
			running: false,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		})
	)}
	
	
	format(times) {
		return `${this.pad0(this.state.times.minutes)}:${this.pad0(this.state.times.seconds)}:${this.pad0(Math.floor(this.state.times.miliseconds))}`;
	}
	
	handleOnstart = () => {
		
		if(!this.state.running) {
			this.setState({
				running : true
			})
	   return (
		this.watch = setInterval(() => this.step(),10)
		)
	  }
	}
	
	step = () => {
		if (!this.state.running);
		return (
			this.calculate()
	)}
	
	calculate = () => {
	 return (
		this.setState({
			times: {
				miliseconds: 1
			}
		});
		
		if (this.state.times.miliseconds >= 100) {
			this.setState({
				times: {
					seconds: 1,
					miliseconds: 0
				}
			});
		}
		
			if (this.state.times.seconds >= 60) {
				this.setState({
					times: {
						minutes: 1,
						seconds: 0
					}
				})
			});
		}
	
	handleOnstop = () => {
	 return (
	 	this.setState({
		running: false
		});
	 	
	 	clearInterval(this.watch)
	);
	}
	
	handleOnsave  = () => {
		
		return (
			<>
				const listItem = React.createItem('li',null,this.format(this.state.times));
			</>
			ReactDOM.render(listItem, document.querySelector('.results'))
		);
	}
	
	handleOnclear = () => {
	     delete listItem;
	}
	
	
	pad0 = (value) => {
		let result = value.toString();
		if (result.length < 2) {
			result = '0' + result;
		}
	}
	
	
	render = () => {
		return (
			React.createElement('div', {className: 'text-center mb-2 mt-3'},
				React.createElement('div', {className: 'controls' },
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2', href:'#' ,onClick: this.handleOnstart}, 'start'),
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2',href:'#',onClick: this.handleOnstop()}, 'stop'),
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2',href:'#',onClick: this.handleOnreset}, 'reset'),
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2',href:'#',onClick: this.handleOnsave}, 'add to list'),
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2',href:'#',onClick: this.handleOnclear}, 'clear list')
				),
				React.createElement('div', {id: 'stopwatch', className: "clock mt-3"}),
				React.createElement('ul', {className: 'results'})
			)
		);
	}
}

const element = React.createElement(Stopwatch);
ReactDOM.render(element, document.getElementById('app'));


