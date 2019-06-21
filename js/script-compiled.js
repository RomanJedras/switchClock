'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_React$Component) {
	_inherits(Stopwatch, _React$Component);

	function Stopwatch(props, display) {
		_classCallCheck(this, Stopwatch);

		var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

		_this.display = display;
		_this.state = {
			running: false,
			dom: null,
			times: {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			}
		};

		_this.print(_this.state.time);

		_this.print = _this.print.bind(_this);
		_this.start = _this.start.bind(_this);
		_this.step = _this.step.bind(_this);
		_this.stop = _this.stop.bind(_this);
		_this.reset = _this.reset.bind(_this);
		_this.save = _this.save.bind(_this);
		return _this;
	}

	_createClass(Stopwatch, [{
		key: 'handleOnClick',
		value: function handleOnClick(e) {
			this.setState({
				loading: true
			});
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.setState({
				running: false,
				times: {
					minutes: 0,
					seconds: 0,
					miliseconds: 0
				}
			}), this.print();
		}
	}, {
		key: 'print',
		value: function print() {
			return this.display = this.format(this);
		}
	}, {
		key: 'format',
		value: function format(times) {
			return this.pad0(this.state.times.minutes) + ':' + this.pad0(this.state.times.seconds) + ':' + this.pad0(Math.floor(this.state.times.miliseconds));
		}
	}, {
		key: 'start',
		value: function start() {
			var _this2 = this;

			this.handleOnClick(element);
			if (!this.state.running) {
				this.state.running = true;
				this.watch = setInterval(function () {
					return _this2.step();
				}, 10);
				console.log(this.watch);
			}
		}
	}, {
		key: 'step',
		value: function step() {
			this.handleOnClick(element);
			if (!this.state.running) return;
			this.calculate();
			this.print(this.state.times);
		}
	}, {
		key: 'calculate',
		value: function calculate() {
			this.state.times.miliseconds += 1;

			if (this.state.times.miliseconds >= 100) {
				this.state.times.seconds += 1;
				this.state.times.miliseconds = 0;
			}

			if (this.state.times.seconds >= 60) {
				this.state.times.minutes += 1;
				this.state.times.seconds = 0;
			}
		}
	}, {
		key: 'stop',
		value: function stop() {
			this.handleOnClick(element);
			this.state.running = false;
			clearInterval(this.watch);
		}
	}, {
		key: 'save',
		value: function save() {
			var time = this.format(this.state.times);
			var item = document.createElement('li');
			var itemContent = document.createTextNode(time);
			item.appendChild(itemContent);
			var res = document.querySelector('.results');
			res.appendChild(item);
		}
	}, {
		key: 'clear',
		value: function clear() {
			var res = document.querySelector('.results');
			res.innerHTML = '';
		}
	}, {
		key: 'pad0',
		value: function pad0(value) {
			var result = value.toString();
			if (result.length < 2) {
				result = '0' + result;
			}
			return result;
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement('div', { className: 'text-center mb-2 mt-3' }, React.createElement('div', { className: 'controls' }, React.createElement('a', { className: 'btn btn-secondary pl-2 ml-2', href: '#', onClick: this.start }, 'start'), React.createElement('a', { className: 'btn btn-secondary pl-2 ml-2', href: '#', onClick: this.stop }, 'stop'), React.createElement('a', { className: 'btn btn-secondary pl-2 ml-2', href: '#', onClick: this.reset }, 'reset'), React.createElement('a', { className: 'btn btn-secondary pl-2 ml-2', href: '#', onClick: this.save }, 'add to list'), React.createElement('a', { className: 'btn btn-secondary pl-2 ml-2', href: '#', onClick: this.clear }, 'clear list')), React.createElement('div', { id: 'stopwatch', className: "clock mt-3" }, this.print()), React.createElement('ul', { className: 'results' }));
		}
	}]);

	return Stopwatch;
}(React.Component);

var element = React.createElement(Stopwatch);
ReactDOM.render(element, document.getElementById('app'));
