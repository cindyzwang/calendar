"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _util = require("../util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function noop() {}

var CalendarHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarHeader, _Component);

  function CalendarHeader() {
    var _this;

    _classCallCheck(this, CalendarHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarHeader).apply(this, arguments));

    _this.onYearChange = function (year) {
      var newValue = _this.props.value.clone();

      newValue.year(parseInt(year, 10));

      _this.props.onValueChange(newValue);
    };

    _this.onMonthChange = function (month) {
      var newValue = _this.props.value.clone();

      newValue.month(parseInt("".concat(month), 10));

      _this.props.onValueChange(newValue);
    };

    _this.onWeekChange = function (week) {
      var newValue = _this.props.value.clone();

      newValue.week(parseInt(week, 10)); // The week with Jan 1 in it is always the first week

      _this.props.onValueChange(newValue);
    };

    _this.yearSelectElement = function (year) {
      var _this$props = _this.props,
          yearSelectOffset = _this$props.yearSelectOffset,
          yearSelectTotal = _this$props.yearSelectTotal,
          prefixCls = _this$props.prefixCls,
          Select = _this$props.Select;
      var start = year - yearSelectOffset;
      var end = start + yearSelectTotal;
      var options = [];

      for (var index = start; index < end; index += 1) {
        options.push(_react.default.createElement(Select.Option, {
          key: "".concat(index)
        }, index));
      }

      if (options.length < 1) {
        return null;
      }

      return _react.default.createElement(Select, {
        className: "".concat(prefixCls, "-header-year-select"),
        onChange: _this.onYearChange,
        dropdownStyle: {
          zIndex: 2000
        },
        dropdownMenuStyle: {
          maxHeight: 250,
          overflow: 'auto',
          fontSize: 12
        },
        optionLabelProp: "children",
        value: String(year),
        showSearch: false
      }, options);
    };

    _this.monthSelectElement = function (month) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props;

      var t = props.value.clone();
      var prefixCls = props.prefixCls;
      var options = [];
      var Select = props.Select;

      for (var index = 0; index < 12; index += 1) {
        t.month(index);
        options.push(_react.default.createElement(Select.Option, {
          key: "".concat(index)
        }, (0, _util.getMonthName)(t)));
      }

      return _react.default.createElement(Select, {
        className: "".concat(prefixCls, "-header-month-select"),
        dropdownStyle: {
          zIndex: 2000
        },
        dropdownMenuStyle: {
          maxHeight: 250,
          overflow: 'auto',
          overflowX: 'hidden',
          fontSize: 12
        },
        optionLabelProp: "children",
        value: String(month),
        showSearch: false,
        onChange: _this.onMonthChange
      }, options);
    };

    _this.weekSelectElement = function (week) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          props = _assertThisInitialize2.props;

      var prefixCls = props.prefixCls;
      var options = [];
      var Select = props.Select;

      for (var index = 0; index < props.value.weeksInYear(); index += 1) {
        options.push(_react.default.createElement(Select.Option, {
          key: "".concat(index)
        }, (0, _util.getWeekRangeStr)(index)));
      }

      return _react.default.createElement(Select, {
        className: "".concat(prefixCls, "-header-week-select"),
        dropdownStyle: {
          zIndex: 2000
        },
        dropdownMenuStyle: {
          maxHeight: 250,
          overflow: 'auto',
          overflowX: 'hidden',
          fontSize: 12
        },
        optionLabelProp: "children",
        value: String(week),
        showSearch: false,
        onChange: _this.onWeekChange
      }, options);
    };

    _this.changeTypeToWeek = function () {
      _this.props.onTypeChange('week');
    };

    _this.changeTypeToDate = function () {
      _this.props.onTypeChange('date');
    };

    _this.changeTypeToMonth = function () {
      _this.props.onTypeChange('month');
    };

    return _this;
  }

  _createClass(CalendarHeader, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          locale = _this$props2.locale,
          prefixCls = _this$props2.prefixCls,
          type = _this$props2.type,
          showTypeSwitch = _this$props2.showTypeSwitch,
          headerComponents = _this$props2.headerComponents;
      var year = value.year();
      var month = value.month();
      var week = value.week();
      var yearSelect = this.yearSelectElement(year);
      var monthSelect = type === 'month' ? null : this.monthSelectElement(month);
      var weekSelect = type === 'month' || type === 'date' ? null : this.weekSelectElement(week);
      var switchCls = "".concat(prefixCls, "-header-switcher"); // Week is for viewing every day in a week
      // Date is for viewing every day in a month
      // Month is for viewing every month in a year

      var typeSwitcher = showTypeSwitch ? _react.default.createElement("span", {
        className: switchCls
      }, type === 'week' ? _react.default.createElement("span", {
        className: "".concat(switchCls, "-focus")
      }, locale.week) : _react.default.createElement("span", {
        onClick: this.changeTypeToWeek.bind(this),
        className: "".concat(switchCls, "-normal")
      }, locale.week), type === 'date' ? _react.default.createElement("span", {
        className: "".concat(switchCls, "-focus")
      }, locale.month) : _react.default.createElement("span", {
        onClick: this.changeTypeToDate.bind(this),
        className: "".concat(switchCls, "-normal")
      }, locale.month), type === 'month' ? _react.default.createElement("span", {
        className: "".concat(switchCls, "-focus")
      }, locale.year) : _react.default.createElement("span", {
        onClick: this.changeTypeToMonth.bind(this),
        className: "".concat(switchCls, "-normal")
      }, locale.year)) : null;
      return _react.default.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, typeSwitcher, weekSelect, monthSelect, yearSelect, headerComponents);
    }
  }]);

  return CalendarHeader;
}(_react.Component);

CalendarHeader.defaultProps = {
  yearSelectOffset: 10,
  yearSelectTotal: 20,
  onValueChange: noop,
  onTypeChange: noop
};
var _default = CalendarHeader;
exports.default = _default;