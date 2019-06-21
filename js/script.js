class Stopwatch {
	constructor(display) {
		this.running = false;
		this.display = display;
		this.reset();
		this.print(this.times);
	}
	
	reset() {
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
		this.print();
	}
	
	print(times) {
		times = this.times;
		this.display.innerText = this.format(times);
	}
	
	format(times) {
		return `${this.pad0(times.minutes)}:${this.pad0(times.seconds)}:${this.pad0(Math.floor(times.miliseconds))}`;
	}
	
	 pad0(value) {
		let result = value.toString();
		if (result.length < 2) { result = '0' + result; }
		return result;
	}
	
	start() {
		if (!this.running) {
			this.running = true;
			this.watch = setInterval(() => this.step(), 10);
		}
	}
	
	step() {
		if (!this.running) return;
		this.calculate();
		this.print();
	}
	
	calculate() {
		this.times.miliseconds += 1;
		if (this.times.miliseconds >= 100) {
			this.times.seconds += 1;
			this.times.miliseconds = 0;
		}
		if (this.times.seconds >= 60) {
			this.times.minutes += 1;
			this.times.seconds = 0;
		}
	}
	
	stop() {
		this.running = false;
		clearInterval(this.watch);
	}
	
}

const stopwatch = new Stopwatch(
	document.querySelector('.stopwatch'));

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.reset());

let timeListButton = document.getElementById('timeListButton');
let timeList = document.querySelector('.results');

timeListButton.addEventListener('click', () => {
	let element = document.createElement('LI');
	element.innerText = stopwatch.format(stopwatch.times);
	timeList.appendChild(element);
});

