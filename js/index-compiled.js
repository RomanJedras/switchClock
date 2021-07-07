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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Stopwatch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Stopwatch, _React$Component);

  function Stopwatch(props) {
    var _this;

    _classCallCheck(this, Stopwatch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Stopwatch).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleReset", function () {
      _this.setState({
        times: {
          minutes: 0,
          seconds: 0,
          miliseconds: 0
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleStart", function () {
      if (!_this.state.running) {
        _this.setState({
          running: true
        });

        _this.watch = setInterval(function () {
          return _this.step();
        }, 10);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "calculate", function () {
      var times = _this.state.times;
      times.miliseconds += 1;

      if (times.miliseconds >= 100) {
        times.seconds += 1;
        times.miliseconds = 0;
      }

      if (times.seconds >= 60) {
        times.minutes += 1;
        times.seconds = 0;
      }

      _this.setState({
        times: times
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleStop", function () {
      _this.setState({
        running: false
      });

      clearInterval(_this.watch);
    });

    _defineProperty(_assertThisInitialized(_this), "handleAddToList", function () {
      var savedTime = _this.format(_this.state.times);

      var listItem = Object.assign({}, {
        id: _this.randomString(),
        time: savedTime
      });

      _this.setState({
        listItem: [].concat(_toConsumableArray(_this.state.listItem), [listItem])
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function () {
      _this.setState({
        listItem: []
      });

      _this.formatTimeTable();
    });

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
    key: "format",
    value: function format(times) {
      return "".concat(this.pad0(this.state.times.minutes), ":").concat(this.pad0(this.state.times.seconds), ":").concat(this.pad0(this.state.times.miliseconds));
    }
  }, {
    key: "step",
    value: function step() {
      //console.log(this.state)
      if (this.state.running) return this.calculate();
    }
  }, {
    key: "pad0",
    value: function pad0(value) {
      var result = value.toString();

      if (result.length < 2) {
        result = '0' + result;
      }

      return result;
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
        return savedItems;
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
        onClick: this.handleAddToList
      }, "add to list"), React.createElement("a", {
        href: "#",
        className: 'btn btn-secondary pl-2 ml-2',
        onClick: this.handleClear
      }, "clear list")), React.createElement("div", {
        id: 'stopwatch',
        className: 'clock mt-3'
      }, React.createElement("h3", null, this.format())), React.createElement("ul", {
        className: 'results'
      }, this.formatTimeTable()));
    }
  }]);

  return Stopwatch;
}(React.Component);

var element = React.createElement(Stopwatch);
ReactDOM.render(element, document.getElementById('app'));
