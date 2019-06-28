import React from 'react';
import ReactDOM from 'react-dom';
require("@babel/core").transform("code", {
	plugins: ["@babel/plugin-transform-react-jsx"]
});


class Stopwatch extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			running: false,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			},
		};
	}
	
	
	handleReset = () => {
		this.setState({
				running: false,
				times: {
					minutes: 0,
					seconds: 0,
					miliseconds: 0
				}
			}
		)
	}
	
	
	format () {
		return `${this.pad0(this.state.times.minutes)}:${this.pad0(this.state.times.seconds)}:${this.pad0(Math.floor(this.state.times.miliseconds))}`;
	}
	
	handleStart = () => {
		if (!this.state.running) {
			this.setState({
				running: true
			})
			this.watch = setInterval(() => this.step(), 10)
		}
	}
	
	step = () => {
		if (!this.state.running) return this.calculate()
	}
	
	calculate = () => {
		
		this.setState(prevState => ({
				times: {
					miliseconds: [...prevState.times.miliseconds, ++this.state.miliseconds]
				}
			})
		)
		
		if (this.state.times.miliseconds >= 100) {
			this.setState(prevState => ({
				times: {
					seconds: [...prevState.times.seconds, ++this.state.seconds],
					miliseconds: 0
				},
			}))
		}
		
		
		if (this.state.times.seconds >= 60) {
			this.setState(prevState => ({
				times: {
					minutes: [...prevState.times.minutes, ++this.state.minutes],
					miliseconds: 0
					
				},
			}))
		}
	};
	
	handleStop = () => {
		this.setState({
			running: false
		});
		clearInterval(this.watch)
	}
	
	handleSave = () => {
		
		return (
			   listItem = React.createItem('li',null,this.format(this.state.times)),
			   ReactDOM.render(listItem, document.querySelector('.results'))
		);
	}
	
	handleClear = () => {
		 listItem = '';
	}
	
	
	pad0 = (value) => {
		let result = value.toString();
		if (result.length < 2) {
			result = '0' + result;
		}
	}
	
	
	 profile = <div className={'wrapper'}>
		<div className={'text-center mb-2 mt-3'}>
			<a href={"#"} className={'btn btn-secondary pl-2 ml-2'} onClick={this.handleStart}>start</a>
			<a href={"#"} className={'btn btn-secondary pl-2 ml-2'} onClick={this.handleStop}>stop</a>
			<a href={"#"} className={'btn btn-secondary pl-2 ml-2'} onClick={this.handleReset}>reset</a>
			<a href={"#"} className={'btn btn-secondary pl-2 ml-2'} onClick={this.handleSave}>add to list</a>
			<a href={"#"} className={'btn btn-secondary pl-2 ml-2'} onClick={this.handleClear}>clear list</a>
		</div>
		<div id={'stopwatch'} className={'clock mt-3'}></div>
		<ul className={'results'}></ul>
	</div>
	
	
	render = () => {
		return (
			this.profile
			)
		}
	}

Stopwatch.propTypes = {
	running: React.PropTypes.bool.isRequired,
	times: React.PropTypes.object.isRequired,
}


const element = React.createElement(Stopwatch);
ReactDOM.render(element, document.getElementById('app'));


