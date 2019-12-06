"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CalendarHeader = _interopRequireDefault(require("../calendar/CalendarHeader"));

var _DateTable = _interopRequireDefault(require("../date/DateTable"));

var _DateInput = _interopRequireDefault(require("../date/DateInput"));

var _index = require("../util/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CalendarPart = function CalendarPart(props) {
  var prefixCls = props.prefixCls,
      value = props.value,
      hoverValue = props.hoverValue,
      selectedValue = props.selectedValue,
      mode = props.mode,
      direction = props.direction,
      locale = props.locale,
      format = props.format,
      placeholder = props.placeholder,
      disabledDate = props.disabledDate,
      timePicker = props.timePicker,
      disabledTime = props.disabledTime,
      timePickerDisabledTime = props.timePickerDisabledTime,
      showTimePicker = props.showTimePicker,
      onInputChange = props.onInputChange,
      onInputSelect = props.onInputSelect,
      enablePrev = props.enablePrev,
      enableNext = props.enableNext,
      clearIcon = props.clearIcon,
      showClear = props.showClear,
      inputMode = props.inputMode;
  var shouldShowTimePicker = showTimePicker && timePicker;
  var disabledTimeConfig = shouldShowTimePicker && disabledTime ? (0, _index.getTimeConfig)(selectedValue, disabledTime) : null;
  var rangeClassName = "".concat(prefixCls, "-range");
  var newProps = {
    locale: locale,
    value: value,
    prefixCls: prefixCls,
    showTimePicker: showTimePicker
  };
  var index = direction === 'left' ? 0 : 1;

  var timePickerEle = shouldShowTimePicker && _react.default.cloneElement(timePicker, _objectSpread({
    showHour: true,
    showMinute: true,
    showSecond: true
  }, timePicker.props, {}, disabledTimeConfig, {}, timePickerDisabledTime, {
    onChange: onInputChange,
    defaultOpenValue: value,
    value: selectedValue[index]
  }));

  var dateInputElement = props.showDateInput && _react.default.createElement(_DateInput.default, {
    format: format,
    locale: locale,
    prefixCls: prefixCls,
    disabledDate: disabledDate,
    placeholder: placeholder,
    value: value,
    showClear: showClear || false,
    selectedValue: selectedValue[index],
    onChange: onInputChange,
    onSelect: onInputSelect,
    clearIcon: clearIcon,
    inputMode: inputMode
  });

  return _react.default.createElement("div", {
    className: "".concat(rangeClassName, "-part ").concat(rangeClassName, "-").concat(direction)
  }, dateInputElement, _react.default.createElement("div", {
    style: {
      outline: 'none'
    }
  }, _react.default.createElement(_CalendarHeader.default, Object.assign({}, newProps, {
    mode: mode,
    value: value,
    enableNext: enableNext,
    enablePrev: enablePrev,
    onValueChange: props.onValueChange,
    onPanelChange: props.onPanelChange,
    disabledMonth: props.disabledMonth
  })), showTimePicker ? _react.default.createElement("div", {
    className: "".concat(prefixCls, "-time-picker")
  }, _react.default.createElement("div", {
    className: "".concat(prefixCls, "-time-picker-panel")
  }, timePickerEle)) : null, _react.default.createElement("div", {
    className: "".concat(prefixCls, "-body")
  }, _react.default.createElement(_DateTable.default, Object.assign({}, newProps, {
    value: value,
    hoverValue: hoverValue,
    selectedValue: selectedValue,
    dateRender: props.dateRender,
    onSelect: props.onSelect,
    onDayHover: props.onDayHover,
    disabledDate: disabledDate,
    showWeekNumber: props.showWeekNumber
  })))));
};

var _default = CalendarPart;
exports.default = _default;