"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
        running: false,
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

    _defineProperty(_assertThisInitialized(_this), "step", function () {
      if (!_this.state.running) return _this.calculate();
    });

    _defineProperty(_assertThisInitialized(_this), "calculate", function () {
      _this.setState(function (prevState) {
        return {
          times: {
            miliseconds: [].concat(_toConsumableArray(prevState.times.miliseconds), [++_this.state.miliseconds])
          }
        };
      });

      if (_this.state.times.miliseconds >= 100) {
        _this.setState(function (prevState) {
          return {
            times: {
              seconds: [].concat(_toConsumableArray(prevState.times.seconds), [++_this.state.seconds]),
              miliseconds: 0
            }
          };
        });
      }

      if (_this.state.times.seconds >= 60) {
        _this.setState(function (prevState) {
          return {
            times: {
              minutes: [].concat(_toConsumableArray(prevState.times.minutes), [++_this.state.minutes]),
              miliseconds: 0
            }
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleStop", function () {
      _this.setState({
        running: false
      });

      clearInterval(_this.watch);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSave", function () {
      return _react["default"].createElement(_react["default"].Fragment, null, "listItem = React.createItem('li',null,this.format(this.state.times)), ReactDOM.render(listItem, document.querySelector('.results'))");
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function () {
      listItem = '';
    });

    _defineProperty(_assertThisInitialized(_this), "pad0", function (value) {
      var result = value.toString();

      if (result.length < 2) {
        result = '0' + result;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return _react["default"].createElement("div", {
        className: 'wrapper'
      }, _react["default"].createElement("div", {
        className: 'text-center mb-2 mt-3'
      }, _react["default"].createElement("a", {
        href: "#",
        className: 'btn btn-secondary pl-2 ml-2',
        onClick: _this.handleStart
      }, "start"), _react["default"].createElement("a", {
        href: "#",
        className: 'btn btn-secondary pl-2 ml-2',
        onClick: _this.handleStop
      }, "stop"), _react["default"].createElement("a", {
        href: "#",
        className: 'btn btn-secondary pl-2 ml-2',
        onClick: _this.handleReset
      }, "reset"), _react["default"].createElement("a", {
        href: "#",
        className: 'btn btn-secondary pl-2 ml-2',
        onClick: _this.handleSave
      }, "add to list"), _react["default"].createElement("a", {
        href: "#",
        className: 'btn btn-secondary pl-2 ml-2',
        onClick: _this.handleClear
      }, "clear list")), _react["default"].createElement("div", {
        id: 'stopwatch',
        className: 'clock mt-3'
      }), _react["default"].createElement("ul", {
        className: 'results'
      }));
    });

    _this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    };
    return _this;
  }

  _createClass(Stopwatch, [{
    key: "format",
    value: function format() {
      return "".concat(this.pad0(this.state.times.minutes), ":").concat(this.pad0(this.state.times.seconds), ":").concat(this.pad0(Math.floor(this.state.times.miliseconds)));
    }
  }]);

  return Stopwatch;
}(_react["default"].Component);

Stopwatch.propTypes = {
  running: _react["default"].PropTypes.bool.isRequired,
  times: _react["default"].PropTypes.object.isRequired
};

var element = _react["default"].createElement(Stopwatch);

_reactDom["default"].render(element, document.getElementById('app'));
