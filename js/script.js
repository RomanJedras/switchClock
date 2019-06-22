class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			running : false,
			dom: null,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			},
		};
		
		element.print(element.state.time);
	}
	
	handleOnClick(e) {
		e.setState({
			loading: true,
		});
	}
	
	reset = (e) => {
		e.setState ({
			running: false,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			},
		}),
			e.print()
	}
	
	
	print = (e) => { e.innerText = this.format(this); }
	
	format(times) {
		return `${this.pad0(element.state.times.minutes)}:${this.pad0(element.state.times.seconds)}:${this.pad0(Math.floor(element.state.times.miliseconds))}`;
	}
	
	start = (e) => {
		
		if(!e.state.running) {
	  	e.state.running = true;
		  e.watch = setInterval(() => e.step(),10);
		  console.log(e.watch);
	  }
	}
	
	step = (e) => {
		if(!e.state.running);
		e.calculate();
		e.print(e.state.times);
	}
	
	calculate = (e) => {
		e.state.times.miliseconds += 1;
		
		if (e.state.times.miliseconds >= 100) {
			e.state.times.seconds += 1;
			e.state.times.miliseconds = 0;
		}
		
		if (e.state.times.seconds >= 60) {
			e.state.times.minutes += 1;
			e.state.times.seconds = 0;
		}
	}
	
	stop = (e) => {
		e.state.running = false;
		clearInterval(e.watch);
	}
	
	save = (e) => {
		let time = this.format(e.state.times);
		let item = document.createElement('li');
		let itemContent = document.createTextNode(time);
		item.appendChild(itemContent);
		const res = document.querySelector('.results');
		res.appendChild(item);
	}
	
	clear = () => {
		const res = document.querySelector('.results');
		res.innerHTML = '';
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
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2', href:'#' ,onClick: element.start}, 'start'),
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2',href:'#',onClick: element.stop}, 'stop'),
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2',href:'#',onClick: element.reset}, 'reset'),
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2',href:'#',onClick: element.save}, 'add to list'),
					React.createElement('a', {className: 'btn btn-secondary pl-2 ml-2',href:'#',onClick: element.clear}, 'clear list')
				),
				React.createElement('div', {id: 'stopwatch', className: "clock mt-3"}),
				React.createElement('ul', {className: 'results'})
			)
		);
	}
}

const element = React.createElement(Stopwatch);
ReactDOM.render(element, document.getElementById('app'));


