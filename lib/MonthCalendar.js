"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _moment = _interopRequireDefault(require("moment"));

var _CalendarHeader = _interopRequireDefault(require("./calendar/CalendarHeader"));

var _CalendarFooter = _interopRequireDefault(require("./calendar/CalendarFooter"));

var _CalendarMixin = require("./mixin/CalendarMixin");

var _CommonMixin = require("./mixin/CommonMixin");

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

var MonthCalendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MonthCalendar, _React$Component);

  function MonthCalendar(props) {
    var _this;

    _classCallCheck(this, MonthCalendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MonthCalendar).call(this, props));

    _this.onSelect = function (value, cause) {
      if (value) {
        _this.setValue(value);
      }

      _this.setSelectedValue(value, cause);
    };

    _this.setSelectedValue = function (selectedValue, cause) {
      // 一个重来没用过得值，但是有个测试覆盖到了它
      // 这里强行用了一下
      var stateValue = _this.state.selectedValue;

      if (!('selectedValue' in _this.props) && stateValue) {
        _this.setState({
          selectedValue: selectedValue
        });
      }

      if (_this.props.onSelect) {
        _this.props.onSelect(selectedValue, cause);
      }
    };

    _this.onKeyDown = function (event) {
      var keyCode = event.keyCode;
      var ctrlKey = event.ctrlKey || event.metaKey;
      var stateValue = _this.state.value;
      var disabledDate = _this.props.disabledDate;
      var value = stateValue;

      switch (keyCode) {
        case _KeyCode.default.DOWN:
          value = stateValue.clone();
          value.add(3, 'months');
          break;

        case _KeyCode.default.UP:
          value = stateValue.clone();
          value.add(-3, 'months');
          break;

        case _KeyCode.default.LEFT:
          value = stateValue.clone();

          if (ctrlKey) {
            value.add(-1, 'years');
          } else {
            value.add(-1, 'months');
          }

          break;

        case _KeyCode.default.RIGHT:
          value = stateValue.clone();

          if (ctrlKey) {
            value.add(1, 'years');
          } else {
            value.add(1, 'months');
          }

          break;

        case _KeyCode.default.ENTER:
          if (!disabledDate || !disabledDate(stateValue)) {
            _this.onSelect(stateValue);
          }

          event.preventDefault();
          return 1;

        default:
          return undefined;
      }

      if (value !== stateValue) {
        _this.setValue(value);

        event.preventDefault();
        return 1;
      }

      return undefined;
    };

    _this.handlePanelChange = function (_, mode) {
      if (mode !== 'date') {
        _this.setState({
          mode: mode
        });
      }
    };

    _this.setValue = function (value) {
      var originalValue = _this.state.value;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      if (originalValue && value && !originalValue.isSame(value) || !originalValue && value || originalValue && !value) {
        _this.props.onChange(value);
      }
    };

    _this.saveRoot = function (root) {
      _this.rootInstance = root;
    };

    _this.renderRoot = function (newProps) {
      var _className;

      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      var prefixCls = props.prefixCls;
      var className = (_className = {}, _defineProperty(_className, prefixCls, 1), _defineProperty(_className, props.className, !!props.className), _defineProperty(_className, newProps.className, !!newProps.className), _className);
      return _react.default.createElement("div", {
        ref: _this.saveRoot,
        className: "".concat((0, _classnames.default)(className)),
        style: _this.props.style,
        tabIndex: 0,
        onKeyDown: _this.onKeyDown,
        onBlur: _this.onBlur
      }, newProps.children);
    };

    _this.state = {
      mode: 'month',
      value: props.value || props.defaultValue || (0, _moment.default)(),
      selectedValue: props.value || props.defaultValue || (0, _moment.default)()
    };
    return _this;
  }

  _createClass(MonthCalendar, [{
    key: "render",
    value: function render() {
      var props = this.props,
          state = this.state;
      var mode = state.mode,
          value = state.value;

      var children = _react.default.createElement("div", {
        className: "".concat(props.prefixCls, "-month-calendar-content")
      }, _react.default.createElement("div", {
        className: "".concat(props.prefixCls, "-month-header-wrap")
      }, _react.default.createElement(_CalendarHeader.default, {
        prefixCls: props.prefixCls,
        mode: mode,
        value: value,
        locale: props.locale,
        disabledMonth: props.disabledDate,
        monthCellRender: props.monthCellRender,
        monthCellContentRender: props.monthCellContentRender,
        onMonthSelect: this.onSelect,
        onValueChange: this.setValue,
        onPanelChange: this.handlePanelChange
      })), _react.default.createElement(_CalendarFooter.default, {
        prefixCls: props.prefixCls,
        renderFooter: props.renderFooter
      }));

      return this.renderRoot({
        className: "".concat(props.prefixCls, "-month-calendar"),
        children: children
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var value = nextProps.value,
          selectedValue = nextProps.selectedValue;
      var newState = {};

      if ('value' in nextProps) {
        newState.value = value || nextProps.defaultValue || (0, _CalendarMixin.getNowByCurrentStateValue)(prevState.value);
      }

      if ('selectedValue' in nextProps) {
        newState.selectedValue = selectedValue;
      }

      return newState;
    }
  }]);

  return MonthCalendar;
}(_react.default.Component);

MonthCalendar.defaultProps = Object.assign({}, _CommonMixin.defaultProp, _CalendarMixin.calendarMixinDefaultProps);

var _default = (0, _reactLifecyclesCompat.polyfill)(MonthCalendar);

exports.default = _default;