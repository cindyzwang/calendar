"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DateConstants = _interopRequireDefault(require("./DateConstants"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isSameDay(one, two) {
  return one && two && one.isSame(two, 'day');
}

function beforeCurrentMonthYear(current, today) {
  if (current.year() < today.year()) {
    return 1;
  }

  return current.year() === today.year() && current.month() < today.month();
}

function afterCurrentMonthYear(current, today) {
  if (current.year() > today.year()) {
    return 1;
  }

  return current.year() === today.year() && current.month() > today.month();
}

function getIdFromDate(date) {
  return "rc-calendar-".concat(date.year(), "-").concat(date.month(), "-").concat(date.date());
}

var DateTBody = function DateTBody(props) {
  var contentRender = props.contentRender,
      prefixCls = props.prefixCls,
      selectedValue = props.selectedValue,
      value = props.value,
      showWeekNumber = props.showWeekNumber,
      dateRender = props.dateRender,
      disabledDate = props.disabledDate,
      hoverValue = props.hoverValue,
      weekOnly = props.weekOnly; // very much className

  var cellClass = "".concat(prefixCls, "-cell");
  var weekCellClass = "".concat(prefixCls, "-week-cell");
  var weekNumberCellClass = "".concat(prefixCls, "-week-number-cell");
  var dateClass = "".concat(prefixCls, "-date");
  var todayClass = "".concat(prefixCls, "-today");
  var selectedClass = "".concat(prefixCls, "-selected-day");
  var selectedDateClass = "".concat(prefixCls, "-selected-date"); // do not move with mouse operation

  var selectedStartDateClass = "".concat(prefixCls, "-selected-start-date");
  var selectedEndDateClass = "".concat(prefixCls, "-selected-end-date");
  var inRangeClass = "".concat(prefixCls, "-in-range-cell");
  var lastMonthDayClass = "".concat(prefixCls, "-last-month-cell");
  var nextMonthDayClass = "".concat(prefixCls, "-next-month-btn-day");
  var disabledClass = "".concat(prefixCls, "-disabled-cell");
  var firstDisableClass = "".concat(prefixCls, "-disabled-cell-first-of-row");
  var lastDisableClass = "".concat(prefixCls, "-disabled-cell-last-of-row");
  var lastDayOfMonthClass = "".concat(prefixCls, "-last-day-of-month"); // Why?

  var iIndex;
  var jIndex;
  var current;
  var today = (0, _util.getTodayTime)(value);
  var dateTable = [];
  var month1 = value.clone();
  month1.date(1);
  var day = month1.day();
  var lastMonthDiffDay = (day + 7 - value.localeData().firstDayOfWeek()) % 7; // calculate last month

  var lastMonth1 = month1.clone();
  lastMonth1.add(0 - lastMonthDiffDay, 'days');
  var passed = 0;

  if (weekOnly) {
    // First day of current week
    current = value.clone().weekday(0);

    for (var i = 0; i < 7; i += 1) {
      current = current.clone();
      current.add(1, 'days');
      dateTable.push(current);
    }
  } else {
    for (iIndex = 0; iIndex < _DateConstants.default.DATE_ROW_COUNT; iIndex += 1) {
      for (jIndex = 0; jIndex < _DateConstants.default.DATE_COL_COUNT; jIndex += 1) {
        current = lastMonth1;

        if (passed) {
          current = current.clone();
          current.add(passed, 'days');
        }

        dateTable.push(current);
        passed += 1;
      }
    }
  }

  var tableHtml = [];
  passed = 0;

  for (iIndex = 0; iIndex < (weekOnly ? 1 : _DateConstants.default.DATE_ROW_COUNT); iIndex += 1) {
    var _cx;

    var isCurrentWeek = void 0;
    var weekNumberCell = void 0;
    var isActiveWeek = false;
    var dateCells = [];

    if (showWeekNumber) {
      weekNumberCell = _react.default.createElement("td", {
        key: dateTable[passed].week(),
        role: "gridcell",
        className: weekNumberCellClass
      }, dateTable[passed].week());
    }

    for (jIndex = 0; jIndex < _DateConstants.default.DATE_COL_COUNT; jIndex += 1) {
      var next = null;
      var last = null;
      current = dateTable[passed];

      if (jIndex < _DateConstants.default.DATE_COL_COUNT - 1) {
        next = dateTable[passed + 1];
      }

      if (jIndex > 0) {
        last = dateTable[passed - 1];
      }

      var cls = weekOnly ? weekCellClass : cellClass;
      var disabled = false;
      var selected = false;

      if (isSameDay(current, today)) {
        cls += " ".concat(todayClass);
        isCurrentWeek = true;
      }

      var isBeforeCurrentMonthYear = beforeCurrentMonthYear(current, value);
      var isAfterCurrentMonthYear = afterCurrentMonthYear(current, value);

      if (selectedValue && Array.isArray(selectedValue)) {
        var rangeValue = hoverValue.length ? hoverValue : selectedValue;

        if (!isBeforeCurrentMonthYear && !isAfterCurrentMonthYear) {
          var startValue = rangeValue[0];
          var endValue = rangeValue[1];

          if (startValue) {
            if (isSameDay(current, startValue)) {
              selected = true;
              isActiveWeek = true;
              cls += " ".concat(selectedStartDateClass);
            }
          }

          if (startValue || endValue) {
            if (isSameDay(current, endValue)) {
              selected = true;
              isActiveWeek = true;
              cls += " ".concat(selectedEndDateClass);
            } else if ((startValue === null || startValue === undefined) && current.isBefore(endValue, 'day')) {
              cls += " ".concat(inRangeClass);
            } else if ((endValue === null || endValue === undefined) && current.isAfter(startValue, 'day')) {
              cls += " ".concat(inRangeClass);
            } else if (current.isAfter(startValue, 'day') && current.isBefore(endValue, 'day')) {
              cls += " ".concat(inRangeClass);
            }
          }
        }
      } else if (isSameDay(current, value)) {
        // keyboard change value, highlight works
        selected = true;
        isActiveWeek = true;
      }

      if (isSameDay(current, selectedValue)) {
        cls += " ".concat(selectedDateClass);
      }

      if (isBeforeCurrentMonthYear) {
        cls += " ".concat(lastMonthDayClass);
      }

      if (isAfterCurrentMonthYear) {
        cls += " ".concat(nextMonthDayClass);
      }

      if (current.clone().endOf('month').date() === current.date()) {
        cls += " ".concat(lastDayOfMonthClass);
      }

      if (disabledDate) {
        if (disabledDate(current, value)) {
          disabled = true;

          if (!last || !disabledDate(last, value)) {
            cls += " ".concat(firstDisableClass);
          }

          if (!next || !disabledDate(next, value)) {
            cls += " ".concat(lastDisableClass);
          }
        }
      }

      if (selected) {
        cls += " ".concat(selectedClass);
      }

      if (disabled) {
        cls += " ".concat(disabledClass);
      }

      var dateHtml = void 0;

      if (dateRender) {
        dateHtml = dateRender(current, value);
      } else {
        var content = contentRender ? contentRender(current, value) : current.date();
        dateHtml = _react.default.createElement("div", {
          key: getIdFromDate(current),
          className: dateClass,
          "aria-selected": selected,
          "aria-disabled": disabled
        }, content);
      }

      dateCells.push(_react.default.createElement("td", {
        key: passed,
        onClick: disabled ? undefined : props.onSelect.bind(null, current),
        onMouseEnter: disabled ? undefined : props.onDayHover && props.onDayHover.bind(null, current) || undefined,
        role: "gridcell",
        title: (0, _util.getTitleString)(current),
        className: cls
      }, dateHtml));
      passed += 1;
    }

    tableHtml.push(_react.default.createElement("tr", {
      key: iIndex,
      role: "row",
      className: (0, _classnames.default)((_cx = {}, _defineProperty(_cx, "".concat(prefixCls, "-current-week"), isCurrentWeek), _defineProperty(_cx, "".concat(prefixCls, "-active-week"), isActiveWeek), _cx))
    }, weekNumberCell, dateCells));
  } // ??? what happened


  return _react.default.createElement("tbody", {
    className: "".concat(prefixCls, "-tbody")
  }, tableHtml);
};

var _default = DateTBody;
exports.default = _default;