"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodayButton = function TodayButton(_ref) {
  var prefixCls = _ref.prefixCls,
      locale = _ref.locale,
      value = _ref.value,
      timePicker = _ref.timePicker,
      disabled = _ref.disabled,
      disabledDate = _ref.disabledDate,
      onToday = _ref.onToday,
      text = _ref.text;
  var localeNow = (!text && timePicker ? locale.now : text) || locale.today;
  var disabledToday = disabledDate && !(0, _util.isAllowedDate)((0, _util.getTodayTime)(value), disabledDate);
  var isDisabled = disabledToday || disabled;
  var disabledTodayClass = isDisabled ? "".concat(prefixCls, "-today-btn-disabled") : '';
  return _react.default.createElement("a", {
    className: "".concat(prefixCls, "-today-btn ").concat(disabledTodayClass),
    role: "button",
    onClick: isDisabled ? null : onToday,
    title: (0, _util.getTodayTimeStr)(value)
  }, localeNow);
};

var _default = TodayButton;
exports.default = _default;