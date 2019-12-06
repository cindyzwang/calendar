"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DateTHead = _interopRequireDefault(require("./DateTHead"));

var _DateTBody = _interopRequireDefault(require("./DateTBody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTable = function DateTable(props) {
  var prefixCls = props.prefixCls;
  return _react.default.createElement("table", {
    className: "".concat(prefixCls, "-table"),
    cellSpacing: "0",
    role: "grid"
  }, _react.default.createElement(_DateTHead.default, Object.assign({}, props)), _react.default.createElement(_DateTBody.default, Object.assign({}, props)));
};

var _default = DateTable;
exports.default = _default;