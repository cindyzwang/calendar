"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNowByCurrentStateValue = getNowByCurrentStateValue;
exports.calendarMixinDefaultProps = exports.calendarMixinPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _index = require("../util/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

function getNowByCurrentStateValue(value) {
  var ret;

  if (value) {
    ret = (0, _index.getTodayTime)(value);
  } else {
    ret = (0, _moment.default)();
  }

  return ret;
}

var calendarMixinPropTypes = {
  value: _propTypes.default.object,
  defaultValue: _propTypes.default.object,
  onKeyDown: _propTypes.default.func
};
exports.calendarMixinPropTypes = calendarMixinPropTypes;
var calendarMixinDefaultProps = {
  onKeyDown: noop
};
exports.calendarMixinDefaultProps = calendarMixinDefaultProps;