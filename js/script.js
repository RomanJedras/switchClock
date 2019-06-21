class Stopwatch extends React.Component {
	constructor(props,display) {
		super(props);
		this.display = display;
		this.state = {
			running : false,
			dom: null,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			},
		};
		
		
		this.print(this.state.time);
		
		this.print = this.print.bind(this);
		this.start = this.start.bind(this);
		this.step = this.step.bind(this);
		this.stop = this.stop.bind(this);
		this.reset = this.reset.bind(this);
		this.save = this.save.bind(this);
	}
	handleOnClick(e) {
		this.setState({
			loading: true,
		});
	}
	
	reset() {
		this.setState ({
			running: false,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			},
		}),
			this.print()
	}
	
	
	print() {
		return this.display = this.format(this);
	}
	
	format(times) {
		return `${this.pad0(this.state.times.minutes)}:${this.pad0(this.state.times.seconds)}:${this.pad0(Math.floor(this.state.times.miliseconds))}`;
	}
	
	start() {
		this.handleOnClick(element);
	  if(!this.state.running) {
	  	this.state.running = true;
		  this.watch = setInterval(() => this.step(),10);
		  console.log(this.watch);
	  }
	}
	
	step() {
		this.handleOnClick(element);
		if(!this.state.running) return;
		this.calculate();
		this.print(this.state.times);
	}
	
	calculate () {
		this.state.times.miliseconds += 1;
		
		if(this.state.times.miliseconds >= 100){
			this.state.times.seconds += 1;
			this.state.times.miliseconds = 0;
		}
		
		if(this.state.times.seconds >= 60) {
			this.state.times.minutes += 1;
			this.state.times.seconds = 0;
		}
	}
	
	stop() {
		this.handleOnClick(element);
		this.state.running = false;
		clearInterval(this.watch);
	}
	
	save() {
		let time = this.format(this.state.times);
		let item = document.createElement('li');
		let itemContent = document.createTextNode(time);
		item.appendChild(itemContent);
		const res = document.querySelector('.results');
		res.appendChild(item);
	}
	
	clear() {
		const res = document.querySelector('.results');
		res.innerHTML = '';
	}
	
	
	pad0(value) {
		let result = value.toString();
		if (result.length < 2) {
			result = '0' + result;
		}
		return result;
	}
	
	
	render() {
		return (
			React.createElement('div', {className: 'text-center mb-2 mt-3'},
				React.createElement('div', {className: 'controls' },
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2', href:'#' ,onClick: this.start}, 'start'),
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2',href:'#',onClick: this.stop}, 'stop'),
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2',href:'#',onClick: this.reset}, 'reset'),
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2',href:'#',onClick: this.save}, 'add to list'),
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2',href:'#',onClick: this.clear}, 'clear list')
				),
				React.createElement('div', {id: 'stopwatch', className: "clock mt-3"},this.print()),
				React.createElement('ul', {className: 'results'})
			)
		);
	}
}

const element = React.createElement(Stopwatch);
ReactDOM.render(element, document.getElementById('app'));


