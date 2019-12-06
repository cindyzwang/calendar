"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProp = exports.propType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _en_US = _interopRequireDefault(require("../locale/en_US"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

var propType = {
  className: _propTypes.default.string,
  locale: _propTypes.default.object,
  style: _propTypes.default.object,
  visible: _propTypes.default.bool,
  onSelect: _propTypes.default.func,
  prefixCls: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onOk: _propTypes.default.func
};
exports.propType = propType;
var defaultProp = {
  locale: _en_US.default,
  style: {},
  visible: true,
  prefixCls: 'rc-calendar',
  className: '',
  onSelect: noop,
  onChange: noop,
  onClear: noop,
  renderFooter: function renderFooter() {
    return null;
  },
  renderSidebar: function renderSidebar() {
    return null;
  }
};
exports.defaultProp = defaultProp;