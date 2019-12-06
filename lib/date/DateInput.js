"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _moment = _interopRequireDefault(require("moment"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var cachedSelectionStart;
var cachedSelectionEnd;
var dateInputInstance;

var DateInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    var _this;

    _classCallCheck(this, DateInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateInput).call(this, props));

    _this.onClear = function () {
      _this.setState({
        str: ''
      });

      _this.props.onClear(null);
    };

    _this.onInputChange = function (event) {
      var str = event.target.value;
      var _this$props = _this.props,
          disabledDate = _this$props.disabledDate,
          format = _this$props.format,
          onChange = _this$props.onChange,
          selectedValue = _this$props.selectedValue; // 没有内容，合法并直接退出

      if (!str) {
        onChange(null);

        _this.setState({
          invalid: false,
          str: str
        });

        return;
      } // 不合法直接退出


      var parsed = (0, _moment.default)(str, format, true);

      if (!parsed.isValid()) {
        _this.setState({
          invalid: true,
          str: str
        });

        return;
      }

      var value = _this.props.value.clone();

      value.year(parsed.year()).month(parsed.month()).date(parsed.date()).hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

      if (!value || disabledDate && disabledDate(value)) {
        _this.setState({
          invalid: true,
          str: str
        });

        return;
      }

      if (selectedValue !== value || selectedValue && value && !selectedValue.isSame(value)) {
        _this.setState({
          invalid: false,
          str: str
        });

        onChange(value);
      }
    };

    _this.onFocus = function () {
      _this.setState({
        hasFocus: true
      });
    };

    _this.onBlur = function () {
      _this.setState(function (prevState, prevProps) {
        return {
          hasFocus: false,
          str: (0, _util.formatDate)(prevProps.value, prevProps.format)
        };
      });
    };

    _this.onKeyDown = function (event) {
      var keyCode = event.keyCode;
      var _this$props2 = _this.props,
          onSelect = _this$props2.onSelect,
          value = _this$props2.value,
          disabledDate = _this$props2.disabledDate;

      if (keyCode === _KeyCode.default.ENTER && onSelect) {
        var validateDate = !disabledDate || !disabledDate(value);

        if (validateDate) {
          onSelect(value.clone());
        }

        event.preventDefault();
      }
    }; // eslint-disable-next-line react/no-find-dom-node


    _this.getRootDOMNode = function () {
      return _reactDom.default.findDOMNode(_assertThisInitialized(_this));
    };

    _this.focus = function () {
      if (dateInputInstance) {
        dateInputInstance.focus();
      }
    };

    _this.saveDateInput = function (dateInput) {
      dateInputInstance = dateInput;
    };

    var selectedValue = props.selectedValue;
    _this.state = {
      str: (0, _util.formatDate)(selectedValue, _this.props.format),
      invalid: false,
      hasFocus: false
    };
    return _this;
  }

  _createClass(DateInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (dateInputInstance && this.state.hasFocus && !this.state.invalid && !(cachedSelectionStart === 0 && cachedSelectionEnd === 0)) {
        dateInputInstance.setSelectionRange(cachedSelectionStart, cachedSelectionEnd);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var _this$state = this.state,
          invalid = _this$state.invalid,
          str = _this$state.str;
      var locale = props.locale,
          prefixCls = props.prefixCls,
          placeholder = props.placeholder,
          clearIcon = props.clearIcon,
          inputMode = props.inputMode;
      var invalidClass = invalid ? "".concat(prefixCls, "-input-invalid") : '';
      return _react.default.createElement("div", {
        className: "".concat(prefixCls, "-input-wrap")
      }, _react.default.createElement("div", {
        className: "".concat(prefixCls, "-date-input-wrap")
      }, _react.default.createElement("input", {
        ref: this.saveDateInput,
        className: "".concat(prefixCls, "-input ").concat(invalidClass),
        value: str,
        disabled: props.disabled,
        placeholder: placeholder,
        onChange: this.onInputChange,
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        inputMode: inputMode
      })), props.showClear ? _react.default.createElement("a", {
        role: "button",
        title: locale.clear,
        onClick: this.onClear
      }, clearIcon || _react.default.createElement("span", {
        className: "".concat(prefixCls, "-clear-btn")
      })) : null);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      var newState = {};

      if (dateInputInstance) {
        cachedSelectionStart = dateInputInstance.selectionStart;
        cachedSelectionEnd = dateInputInstance.selectionEnd;
      } // when popup show, click body will call this, bug!


      var selectedValue = nextProps.selectedValue;

      if (!state.hasFocus) {
        newState = {
          str: (0, _util.formatDate)(selectedValue, nextProps.format),
          invalid: false
        };
      }

      return newState;
    }
  }, {
    key: "getInstance",
    value: function getInstance() {
      return dateInputInstance;
    }
  }]);

  return DateInput;
}(_react.default.Component);

(0, _reactLifecyclesCompat.polyfill)(DateInput);
var _default = DateInput;
exports.default = _default;