"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _moment = _interopRequireDefault(require("moment"));

var _DateTable = _interopRequireDefault(require("./date/DateTable"));

var _CalendarHeader = _interopRequireDefault(require("./calendar/CalendarHeader"));

var _CalendarFooter = _interopRequireDefault(require("./calendar/CalendarFooter"));

var _CalendarMixin = require("./mixin/CalendarMixin");

var _CommonMixin = require("./mixin/CommonMixin");

var _DateInput = _interopRequireDefault(require("./date/DateInput"));

var _util = require("./util");

var _toTime = require("./util/toTime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function noop() {}

var getMomentObjectIfValid = function getMomentObjectIfValid(date) {
  if (_moment.default.isMoment(date) && date.isValid()) {
    return date;
  }

  return false;
};

var Calendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, props)); // from mix
    // to remove it, refactor to hooks

    _this.saveFocusElement = function (focusElement) {
      _this.focusElement = focusElement;
    };

    _this.focus = function () {
      if (_this.focusElement) {
        _this.focusElement.focus();
      } else if (_this.rootInstance) {
        _this.rootInstance.focus();
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

    _this.onSelect = function (value, cause) {
      if (value) {
        _this.setValue(value);
      }

      _this.setSelectedValue(value, cause);
    };

    _this.setSelectedValue = function (selectedValue, cause) {
      // if (this.isAllowedDate(selectedValue)) {
      if (!('selectedValue' in _this.props)) {
        _this.setState({
          selectedValue: selectedValue
        });
      }

      if (_this.props.onSelect) {
        _this.props.onSelect(selectedValue, cause);
      } // }

    };

    _this.isAllowedDate = function (value) {
      var disabledDate = _this.props.disabledDate;
      var disabledTime = _this.props.disabledTime;
      return (0, _util.isAllowedDate)(value, disabledDate, disabledTime);
    };

    _this.getFormat = function () {
      var format = _this.props.format;
      var _this$props = _this.props,
          locale = _this$props.locale,
          timePicker = _this$props.timePicker;

      if (!format) {
        if (timePicker) {
          format = locale.dateTimeFormat;
        } else {
          format = locale.dateFormat;
        }
      }

      return format;
    };

    _this.saveRoot = function (root) {
      _this.rootInstance = root;
    };

    _this.renderRoot = function (newProps) {
      var _className;

      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      var prefixCls = props.prefixCls;
      var className = (_className = {}, _defineProperty(_className, prefixCls, 1), _defineProperty(_className, "".concat(prefixCls, "-hidden"), !props.visible), _defineProperty(_className, props.className, !!props.className), _defineProperty(_className, newProps.className, !!newProps.className), _className);
      return _react.default.createElement("div", {
        ref: _this.saveRoot,
        className: "".concat((0, _classnames.default)(className)),
        style: _this.props.style,
        tabIndex: 0,
        onKeyDown: _this.onKeyDown,
        onBlur: _this.onBlur
      }, newProps.children);
    };

    _this.onPanelChange = function (value, mode) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          props = _assertThisInitialize2.props,
          state = _assertThisInitialize2.state;

      if (!('mode' in props)) {
        _this.setState({
          mode: mode
        });
      }

      props.onPanelChange(value || state.value, mode);
    };

    _this.onKeyDown = function (event) {
      if (event.target.nodeName.toLowerCase() === 'input') {
        return undefined;
      }

      var keyCode = event.keyCode; // mac

      var ctrlKey = event.ctrlKey || event.metaKey;
      var disabledDate = _this.props.disabledDate;
      var value = _this.state.value;

      switch (keyCode) {
        case _KeyCode.default.DOWN:
          _this.goTime(1, 'weeks');

          event.preventDefault();
          return 1;

        case _KeyCode.default.UP:
          _this.goTime(-1, 'weeks');

          event.preventDefault();
          return 1;

        case _KeyCode.default.LEFT:
          if (ctrlKey) {
            _this.goTime(-1, 'years');
          } else {
            _this.goTime(-1, 'days');
          }

          event.preventDefault();
          return 1;

        case _KeyCode.default.RIGHT:
          if (ctrlKey) {
            _this.goTime(1, 'years');
          } else {
            _this.goTime(1, 'days');
          }

          event.preventDefault();
          return 1;

        case _KeyCode.default.HOME:
          _this.setValue((0, _toTime.goStartMonth)(_this.state.value));

          event.preventDefault();
          return 1;

        case _KeyCode.default.END:
          _this.setValue((0, _toTime.goEndMonth)(_this.state.value));

          event.preventDefault();
          return 1;

        case _KeyCode.default.PAGE_DOWN:
          _this.goTime(1, 'month');

          event.preventDefault();
          return 1;

        case _KeyCode.default.PAGE_UP:
          _this.goTime(-1, 'month');

          event.preventDefault();
          return 1;

        case _KeyCode.default.ENTER:
          if (!disabledDate || !disabledDate(value)) {
            _this.onSelect(value, {
              source: 'keyboard'
            });
          }

          event.preventDefault();
          return 1;

        default:
          _this.props.onKeyDown(event);

          return 1;
      }
    };

    _this.onClear = function () {
      _this.onSelect(null);

      _this.props.onClear();
    };

    _this.onOk = function () {
      var selectedValue = _this.state.selectedValue;

      if (_this.isAllowedDate(selectedValue)) {
        _this.props.onOk(selectedValue);
      }
    };

    _this.onDateInputChange = function (value) {
      _this.onSelect(value, {
        source: 'dateInput'
      });
    };

    _this.onDateInputSelect = function (value) {
      _this.onSelect(value, {
        source: 'dateInputSelect'
      });
    };

    _this.onDateTableSelect = function (value) {
      var timePicker = _this.props.timePicker;
      var selectedValue = _this.state.selectedValue;

      if (!selectedValue && timePicker) {
        var timePickerDefaultValue = timePicker.props.defaultValue;

        if (timePickerDefaultValue) {
          (0, _util.syncTime)(timePickerDefaultValue, value);
        }
      }

      _this.onSelect(value);
    };

    _this.onToday = function () {
      var value = _this.state.value;
      var now = (0, _util.getTodayTime)(value);

      _this.onSelect(now, {
        source: 'todayButton'
      });
    };

    _this.onBlur = function (event) {
      setTimeout(function () {
        var dateInput = _DateInput.default.getInstance();

        var _assertThisInitialize3 = _assertThisInitialized(_this),
            rootInstance = _assertThisInitialize3.rootInstance;

        if (!rootInstance || rootInstance.contains(document.activeElement) || dateInput && dateInput.contains(document.activeElement)) {
          // focused element is still part of Calendar
          return;
        }

        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
      }, 0);
    }; // eslint-disable-next-line react/no-find-dom-node


    _this.getRootDOMNode = function () {
      return _reactDom.default.findDOMNode(_assertThisInitialized(_this));
    };

    _this.openTimePicker = function () {
      _this.onPanelChange(null, 'time');
    };

    _this.closeTimePicker = function () {
      _this.onPanelChange(null, 'date');
    };

    _this.goTime = function (direction, unit) {
      _this.setValue((0, _toTime.goTime)(_this.state.value, direction, unit));
    };

    _this.state = {
      mode: _this.props.mode || 'date',
      value: getMomentObjectIfValid(props.value) || getMomentObjectIfValid(props.defaultValue) || (0, _moment.default)(),
      selectedValue: props.selectedValue || props.defaultSelectedValue
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.showDateInput) {
        this.saveFocusElement(_DateInput.default.getInstance());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props,
          state = this.state;
      var locale = props.locale,
          prefixCls = props.prefixCls,
          disabledDate = props.disabledDate,
          dateInputPlaceholder = props.dateInputPlaceholder,
          timePicker = props.timePicker,
          disabledTime = props.disabledTime,
          showWeekNumber = props.showWeekNumber,
          clearIcon = props.clearIcon,
          renderFooter = props.renderFooter,
          inputMode = props.inputMode,
          monthCellRender = props.monthCellRender,
          monthCellContentRender = props.monthCellContentRender;
      var value = state.value,
          selectedValue = state.selectedValue,
          mode = state.mode;
      var showTimePicker = mode === 'time';
      var disabledTimeConfig = showTimePicker && disabledTime && timePicker ? (0, _util.getTimeConfig)(selectedValue, disabledTime) : null;
      var timePickerEle = null;

      if (timePicker && showTimePicker) {
        var timePickerProps = _objectSpread({
          showHour: true,
          showSecond: true,
          showMinute: true
        }, timePicker.props, {}, disabledTimeConfig, {
          onChange: this.onDateInputChange,
          value: selectedValue,
          disabledTime: disabledTime
        });

        if (timePicker.props.defaultValue !== undefined) {
          timePickerProps.defaultOpenValue = timePicker.props.defaultValue;
        }

        timePickerEle = _react.default.cloneElement(timePicker, timePickerProps);
      }

      var dateInputElement = props.showDateInput ? _react.default.createElement(_DateInput.default, {
        format: this.getFormat(),
        key: "date-input",
        value: value,
        locale: locale,
        placeholder: dateInputPlaceholder,
        showClear: true,
        disabledDate: disabledDate,
        onClear: this.onClear,
        prefixCls: prefixCls,
        selectedValue: selectedValue,
        onChange: this.onDateInputChange,
        onSelect: this.onDateInputSelect,
        clearIcon: clearIcon,
        inputMode: inputMode
      }) : null;
      var children = [];

      if (props.renderSidebar) {
        children.push(props.renderSidebar());
      }

      children.push(_react.default.createElement("div", {
        className: "".concat(prefixCls, "-panel"),
        key: "panel"
      }, dateInputElement, _react.default.createElement("div", {
        tabIndex: this.props.focusablePanel ? 0 : undefined,
        className: "".concat(prefixCls, "-date-panel")
      }, _react.default.createElement(_CalendarHeader.default, {
        locale: locale,
        mode: mode,
        value: value,
        onValueChange: this.setValue,
        onPanelChange: this.onPanelChange,
        renderFooter: renderFooter,
        showTimePicker: showTimePicker,
        prefixCls: prefixCls,
        monthCellRender: monthCellRender,
        monthCellContentRender: monthCellContentRender
      }), timePicker && showTimePicker ? _react.default.createElement("div", {
        className: "".concat(prefixCls, "-time-picker")
      }, _react.default.createElement("div", {
        className: "".concat(prefixCls, "-time-picker-panel")
      }, timePickerEle)) : null, _react.default.createElement("div", {
        className: "".concat(prefixCls, "-body")
      }, _react.default.createElement(_DateTable.default, {
        locale: locale,
        value: value,
        selectedValue: selectedValue,
        prefixCls: prefixCls,
        dateRender: props.dateRender,
        onSelect: this.onDateTableSelect,
        disabledDate: disabledDate,
        showWeekNumber: showWeekNumber
      })), _react.default.createElement(_CalendarFooter.default, {
        showOk: props.showOk,
        mode: mode,
        renderFooter: props.renderFooter,
        locale: locale,
        prefixCls: prefixCls,
        showToday: props.showToday,
        disabledTime: disabledTime,
        showTimePicker: showTimePicker,
        showDateInput: props.showDateInput,
        timePicker: timePicker,
        selectedValue: selectedValue,
        value: value,
        disabledDate: disabledDate,
        okDisabled: props.showOk !== false && (!selectedValue || !this.isAllowedDate(selectedValue)),
        onOk: this.onOk,
        onSelect: this.onSelect,
        onToday: this.onToday,
        onOpenTimePicker: this.openTimePicker,
        onCloseTimePicker: this.closeTimePicker
      }))));
      return this.renderRoot({
        children: children,
        className: props.showWeekNumber ? "".concat(prefixCls, "-week-number") : ''
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      var value = nextProps.value,
          selectedValue = nextProps.selectedValue;
      var newState = {};

      if ('mode' in nextProps && state.mode !== nextProps.mode) {
        newState = {
          mode: nextProps.mode
        };
      }

      if ('value' in nextProps) {
        newState.value = getMomentObjectIfValid(value) || getMomentObjectIfValid(nextProps.defaultValue) || (0, _CalendarMixin.getNowByCurrentStateValue)(state.value);
      }

      if ('selectedValue' in nextProps) {
        newState.selectedValue = selectedValue;
      }

      return newState;
    }
  }]);

  return Calendar;
}(_react.default.Component);

Calendar.defaultProps = _objectSpread({}, _CalendarMixin.calendarMixinDefaultProps, {}, _CommonMixin.defaultProp, {
  showToday: true,
  showDateInput: true,
  timePicker: null,
  onOk: noop,
  onPanelChange: noop,
  focusablePanel: true
});
(0, _reactLifecyclesCompat.polyfill)(Calendar);
var _default = Calendar;
exports.default = _default;