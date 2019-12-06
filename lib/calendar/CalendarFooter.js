"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _mapSelf = _interopRequireDefault(require("rc-util/lib/Children/mapSelf"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TodayButton = _interopRequireDefault(require("./TodayButton"));

var _OkButton = _interopRequireDefault(require("./OkButton"));

var _TimePickerButton = _interopRequireDefault(require("./TimePickerButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CalendarFooter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarFooter, _React$Component);

  function CalendarFooter() {
    var _this;

    _classCallCheck(this, CalendarFooter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarFooter).apply(this, arguments)); // eslint-disable-next-line react/no-find-dom-node

    _this.getRootDOMNode = function () {
      return _reactDom.default.findDOMNode(_assertThisInitialized(_this));
    };

    return _this;
  }

  _createClass(CalendarFooter, [{
    key: "onSelect",
    value: function onSelect(value) {
      this.props.onSelect(value);
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var value = props.value,
          prefixCls = props.prefixCls,
          showOk = props.showOk,
          timePicker = props.timePicker,
          renderFooter = props.renderFooter,
          mode = props.mode;
      var footerEl = null;
      var extraFooter = renderFooter && renderFooter(mode);

      if (props.showToday || timePicker || extraFooter) {
        var nowEl;

        if (props.showToday) {
          nowEl = _react.default.createElement(_TodayButton.default, Object.assign({}, props, {
            value: value
          }));
        }

        var okBtn;

        if (showOk === true || showOk !== false && !!props.timePicker) {
          okBtn = _react.default.createElement(_OkButton.default, Object.assign({}, props));
        }

        var timePickerBtn;

        if (props.timePicker) {
          timePickerBtn = _react.default.createElement(_TimePickerButton.default, Object.assign({}, props));
        }

        var footerBtn;

        if (nowEl || timePickerBtn || okBtn || extraFooter) {
          footerBtn = _react.default.createElement("span", {
            className: "".concat(prefixCls, "-footer-btn")
          }, extraFooter, (0, _mapSelf.default)([nowEl, timePickerBtn, okBtn]));
        }

        var cls = (0, _classnames.default)("".concat(prefixCls, "-footer"), _defineProperty({}, "".concat(prefixCls, "-footer-show-ok"), okBtn));
        footerEl = _react.default.createElement("div", {
          className: cls
        }, footerBtn);
      }

      return footerEl;
    }
  }]);

  return CalendarFooter;
}(_react.default.Component);

exports.default = CalendarFooter;