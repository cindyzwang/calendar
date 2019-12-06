"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _DateConstants = _interopRequireDefault(require("./DateConstants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var genKey = function genKey(day, index) {
  return "".concat(day, "-").concat(index);
};

var DateTHead = function DateTHead(props) {
  var value = props.value,
      prefixCls = props.prefixCls;
  var localeData = value.localeData();
  var veryShortWeekdays = [];
  var weekDays = [];
  var firstDayOfWeek = localeData.firstDayOfWeek();
  var showWeekNumberEl;
  var now = (0, _moment.default)(); // This function can be optimized and it takes a long time to understand.

  for (var dateColIndex = 0; dateColIndex < _DateConstants.default.DATE_COL_COUNT; dateColIndex += 1) {
    var index = (firstDayOfWeek + dateColIndex) % _DateConstants.default.DATE_COL_COUNT;
    now.day(index);
    veryShortWeekdays[dateColIndex] = localeData.weekdaysMin(now);
    weekDays[dateColIndex] = localeData.weekdaysShort(now);
  }

  if (props.showWeekNumber) {
    showWeekNumberEl = _react.default.createElement("th", {
      role: "columnheader",
      className: "".concat(prefixCls, "-column-header ").concat(prefixCls, "-week-number-header")
    }, _react.default.createElement("span", {
      className: "".concat(prefixCls, "-column-header-inner")
    }, "x"));
  }

  var weekDaysEls = weekDays.map(function (day, xIndex) {
    return _react.default.createElement("th", {
      key: genKey(day, xIndex),
      role: "columnheader",
      title: day,
      className: "".concat(prefixCls, "-column-header")
    }, _react.default.createElement("span", {
      className: "".concat(prefixCls, "-column-header-inner")
    }, veryShortWeekdays[xIndex]));
  });
  return _react.default.createElement("thead", null, _react.default.createElement("tr", {
    role: "row"
  }, showWeekNumberEl, weekDaysEls));
};

var _default = DateTHead;
exports.default = _default;