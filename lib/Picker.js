"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _createChainedFunction = _interopRequireDefault(require("rc-util/lib/createChainedFunction"));

var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

var _rcTrigger = _interopRequireDefault(require("rc-trigger"));

var _placements = _interopRequireDefault(require("./picker/placements"));

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

function noop() {}

function refFn(field, component) {
  this[field] = component;
}

var Picker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Picker, _React$Component);

  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Picker).call(this, props));
    _this.saveCalendarRef = refFn.bind(_assertThisInitialized(_this), 'calendarInstance');

    _this.onCalendarKeyDown = function (event) {
      if (event.keyCode === _KeyCode.default.ESC) {
        event.stopPropagation();

        _this.close(_this.focus);
      }
    };

    _this.onCalendarSelect = function (value) {
      var cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        source: ''
      };

      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      if (!('value' in props)) {
        _this.setState({
          value: value
        });
      }

      if (cause.source === 'keyboard' || cause.source === 'dateInputSelect' || !props.calendar.props.timePicker && cause.source !== 'dateInput' || cause.source === 'todayButton') {
        _this.close(_this.focus);
      }

      props.onChange(value);
    };

    _this.onKeyDown = function (event) {
      if (!_this.state.open && (event.keyCode === _KeyCode.default.DOWN || event.keyCode === _KeyCode.default.ENTER)) {
        _this.open();

        event.preventDefault();
      }
    };

    _this.onCalendarOk = function () {
      _this.close(_this.focus);
    };

    _this.onCalendarClear = function () {
      _this.close(_this.focus);
    };

    _this.onCalendarBlur = function () {
      _this.setOpen(false);
    };

    _this.onVisibleChange = function (open) {
      _this.setOpen(open);
    };

    _this.getCalendarElement = function () {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          props = _assertThisInitialize2.props;

      var _assertThisInitialize3 = _assertThisInitialized(_this),
          state = _assertThisInitialize3.state;

      var calendarProps = props.calendar.props;
      var value = state.value;
      var defaultValue = value;
      var extraProps = {
        ref: _this.saveCalendarRef,
        defaultValue: defaultValue || calendarProps.defaultValue,
        selectedValue: value,
        onKeyDown: _this.onCalendarKeyDown,
        onOk: (0, _createChainedFunction.default)(calendarProps.onOk, _this.onCalendarOk),
        onSelect: (0, _createChainedFunction.default)(calendarProps.onSelect, _this.onCalendarSelect),
        onClear: (0, _createChainedFunction.default)(calendarProps.onClear, _this.onCalendarClear),
        onBlur: (0, _createChainedFunction.default)(calendarProps.onBlur, _this.onCalendarBlur)
      };
      return _react.default.cloneElement(props.calendar, extraProps);
    };

    _this.setOpen = function (open, callback) {
      var onOpenChange = _this.props.onOpenChange;

      if (_this.state.open !== open) {
        if (!('open' in _this.props)) {
          _this.setState({
            open: open
          }, callback);
        }

        onOpenChange(open);
      }
    };

    _this.open = function (callback) {
      _this.setOpen(true, callback);
    };

    _this.close = function (callback) {
      _this.setOpen(false, callback);
    };

    _this.focus = function () {
      if (!_this.state.open) {
        // eslint-disable-next-line react/no-find-dom-node
        _reactDom.default.findDOMNode(_assertThisInitialized(_this)).focus();
      }
    };

    _this.focusCalendar = function () {
      if (_this.state.open && !!_this.calendarInstance) {
        _this.calendarInstance.focus();
      }
    };

    var open;

    if ('open' in props) {
      // eslint-disable-next-line prefer-destructuring
      open = props.open;
    } else {
      open = props.defaultOpen;
    }

    var value = props.value || props.defaultValue;
    _this.state = {
      open: open,
      value: value
    };
    return _this;
  }

  _createClass(Picker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      if (!prevState.open && this.state.open) {
        // setTimeout is for making sure saveCalendarRef happen before focusCalendar
        this.focusTimeout = setTimeout(this.focusCalendar, 0, this);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.focusTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          placement = _this$props.placement,
          style = _this$props.style,
          getCalendarContainer = _this$props.getCalendarContainer,
          align = _this$props.align,
          animation = _this$props.animation,
          disabled = _this$props.disabled,
          dropdownClassName = _this$props.dropdownClassName,
          transitionName = _this$props.transitionName,
          children = _this$props.children;
      var state = this.state;
      return _react.default.createElement(_rcTrigger.default, {
        popup: this.getCalendarElement(),
        popupAlign: align,
        builtinPlacements: _placements.default,
        popupPlacement: placement,
        action: disabled && !state.open ? [] : ['click'],
        destroyPopupOnHide: true,
        getPopupContainer: getCalendarContainer,
        popupStyle: style,
        popupAnimation: animation,
        popupTransitionName: transitionName,
        popupVisible: state.open,
        onPopupVisibleChange: this.onVisibleChange,
        prefixCls: prefixCls,
        popupClassName: dropdownClassName
      }, _react.default.cloneElement(children(state, this.props), {
        onKeyDown: this.onKeyDown
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var newState = {};
      var value = nextProps.value,
          open = nextProps.open;

      if ('value' in nextProps) {
        newState.value = value;
      }

      if (open !== undefined) {
        newState.open = open;
      }

      return newState;
    }
  }]);

  return Picker;
}(_react.default.Component);

Picker.defaultProps = {
  prefixCls: 'rc-calendar-picker',
  style: {},
  align: {},
  placement: 'bottomLeft',
  defaultOpen: false,
  onChange: noop,
  onOpenChange: noop,
  onBlur: noop
};
(0, _reactLifecyclesCompat.polyfill)(Picker);
var _default = Picker;
exports.default = _default;