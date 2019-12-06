"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OkButton = function OkButton(_ref) {
  var prefixCls = _ref.prefixCls,
      locale = _ref.locale,
      okDisabled = _ref.okDisabled,
      onOk = _ref.onOk;
  var className = (0, _classnames2.default)("".concat(prefixCls, "-ok-btn"), _defineProperty({}, "".concat(prefixCls, "-ok-btn-disabled"), okDisabled));
  return _react.default.createElement("a", {
    className: className,
    role: "button",
    onClick: okDisabled ? null : onOk
  }, locale.ok);
};

var _default = OkButton;
exports.default = _default;