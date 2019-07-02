"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Stopwatch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Stopwatch, _React$Component);

  function Stopwatch(props) {
    var _this;

    _classCallCheck(this, Stopwatch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Stopwatch).call(this, props));
    _this.state = {
      running: false,
      listItem: [],
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    };
    return _this;
  }

  _createClass(Stopwatch, [{
    key: "randomString",
    value: function randomString() {
      var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
      var str = '';

      for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
      }

      return str;
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      this.setState({
        times: {
          minutes: 0,
          seconds: 0,
          miliseconds: 0
        }
      });
    }
  }, {
    key: "format",
    value: function format() {
      return "".concat(this.pad0(this.state.times.minutes), ":").concat(this.pad0(this.state.times.seconds), ":").concat(this.pad0(Math.floor(this.state.times.miliseconds)));
    }
  }, {
    key: "handleStart",
    value: function handleStart() {
      var _this2 = this;

      if (!this.state.running) {
        this.setState({
          running: true
        });
        this.watch = setInterval(function () {
          return _this2.step();
        }, 10);
      }
    }
  }, {
    key: "step",
    value: function step() {
      if (!this.state.running) return this.calculate();
    }
  }, {
    key: "calculate",
    value: function calculate() {
      var _this3 = this;

      this.setState(function (prevState) {
        return {
          times: {
            miliseconds: [].concat(_toConsumableArray(prevState.times.miliseconds), [++_this3.state.miliseconds])
          }
        };
      });

      if (this.state.times.miliseconds >= 100) {
        this.setState(function (prevState) {
          return {
            times: {
              seconds: [].concat(_toConsumableArray(prevState.times.seconds), [++_this3.state.seconds]),
              miliseconds: 0
            }
          };
        });
      }

      if (this.state.times.seconds >= 60) {
        this.setState(function (prevState) {
          return {
            times: {
              minutes: [].concat(_toConsumableArray(prevState.times.minutes), [++_this3.state.minutes]),
              miliseconds: 0
            }
          };
        });
      }
    }
  }, {
    key: "handleStop",
    value: function handleStop() {
      this.setState({
        running: false
      });
      clearInterval(this.watch);
    }
  }, {
    key: "handleSave",
    value: function handleSave() {
      if (listItem !== this.state.listItem[this.state.listItem.length - 1]) {
        this.state.listItem = [].concat(_toConsumableArray(this.state.listItem), [{
          id: this.randomString(),
          time: this.format(this.state.times)
        }]);
      }
    }
  }, {
    key: "handleClear",
    value: function handleClear() {
      listItem = '';
    }
  }, {
    key: "pad0",
    value: function pad0(value) {
      var result = value.toString();

      if (result.length < 2) {
        result = '0' + result;
      }
    }
  }, {
    key: "formatTimeTable",
    value: function formatTimeTable() {
      var savedItems = [];

      for (var i = 0; i < this.state.listItem.length; i++) {
        savedItems.push(React.createElement("li", {
          key: this.state.listItem[i].id
        }, this.state.listItem[i].time));
      }

      return savedItems.map(function (savedItems) {
        return React.createElement("li", null, savedItems);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: 'wrapper'
      }, React.createElement("div", {
        className: 'text-center mb-2 mt-3'
      }, React.createElement("a", {
        href: "#",
        className: 'btn btn-secondary pl-2 ml-2',
        onClick: this.handleStart
      }, "start"), React.createElement("a", {
        href: "#",
        className: 'btn btn-secondary pl-2 ml-2',
        onClick: this.handleStop
      }, "stop"), React.createElement("a", {
        href: "#",
        className: 'btn btn-secondary pl-2 ml-2',
        onClick: this.handleReset
      }, "reset"), React.createElement("a", {
        href: "#",
        className: 'btn btn-secondary pl-2 ml-2',
        onClick: this.handleSave
      }, "add to list"), React.createElement("a", {
        href: "#",
        className: 'btn btn-secondary pl-2 ml-2',
        onClick: this.handleClear
      }, "clear list")), React.createElement("div", {
        id: 'stopwatch',
        className: 'clock mt-3'
      }), React.createElement("ul", {
        className: 'results'
      }, this.formatTimeTable()));
    }
  }]);

  return Stopwatch;
}(React.Component);

var element = React.createElement(Stopwatch);
ReactDOM.render(element, document.getElementById('app'));
