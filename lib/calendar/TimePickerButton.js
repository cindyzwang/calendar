"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TimePickerButton = function TimePickerButton(_ref) {
  var _classnames;

  var prefixCls = _ref.prefixCls,
      locale = _ref.locale,
      showTimePicker = _ref.showTimePicker,
      onOpenTimePicker = _ref.onOpenTimePicker,
      onCloseTimePicker = _ref.onCloseTimePicker,
      timePickerDisabled = _ref.timePickerDisabled;
  var className = (0, _classnames2.default)((_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-time-picker-btn"), true), _defineProperty(_classnames, "".concat(prefixCls, "-time-picker-btn-disabled"), timePickerDisabled), _classnames));
  var onClick = null;

  if (!timePickerDisabled) {
    onClick = showTimePicker ? onCloseTimePicker : onOpenTimePicker;
  }

  return _react.default.createElement("a", {
    className: className,
    role: "button",
    onClick: onClick
  }, showTimePicker ? locale.dateSelect : locale.timeSelect);
};

var _default = TimePickerButton;
exports.default = _default;